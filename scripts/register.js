'use strict';

$(document).ready(function () {

    eventHandler();

    function eventHandler() {
        $("#btnRegister").click(registerClicked);
    }

    function registerClicked() {
        var username = $("#username").val();
        var firstPassword = $("#password").val();
        var confirmPassword = $("#confirm-password").val();
        var password;
        if (firstPassword == confirmPassword) {
            var password = firstPassword;
        }
        else{
            showErrorMsg("Password does not match.");
        }
        ajaxRequester.register(username, password,
            function (data) {
                data.username = username;
                authSuccess(data);
            },
            registerError);

    }

    function authSuccess(data) {
        userSession.login(data);
        alert('Succsess!!!!!!');
        $('#userMenu').load('templates/logOut.html');
    }
    function registerError(){
        showErrorMsg("Register failed.");
    }
    function showErrorMsg(error){
        alert(error);
    }
});
