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
        if (firstPassword != '' && firstPassword == confirmPassword) {
            var password = firstPassword;
        }
        else{
            showErrorMsg("Password does not match or exist.");
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
        showInfoMsg('Success!!!!!!');
        $('#userMenu').load('templates/logOut.html');
        $('#views').load('templates/tasks.html');
    }
    function registerError(){
        showErrorMsg("Register failed.");
    }
    function showErrorMsg(msg){
        noty({
            text: msg,
            type: 'error',
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function showInfoMsg(msg){
        noty({
            text: msg,
            type: 'success',
            layout: 'topCenter',
            timeout: 5000
        });
    }
});
