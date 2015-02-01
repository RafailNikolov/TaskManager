'use strict';

$(document).ready(function (){

    eventHandler();

    function eventHandler(){
        $("#btnLogin").click(loginClicked);
    }






    function loginClicked(){
        var username = $("#txtLoginUsername").val();
        var password = $("#txtLoginPassword").val();
        ajaxRequester.login(username, password, authSuccess, loginError);
    }

    function authSuccess(data) {
        userSession.login(data);
        alert('Succsess!!!!!!');
        $('#userMenu').load('templates/logOut.html');
        $('#views').load('templates/tasks.html');
    }

    function loginError(error){
        showErrorMsg("Login failed:" + error.responseJSON.error);
    }

    function showErrorMsg(error){
        alert(error);
    }

});

