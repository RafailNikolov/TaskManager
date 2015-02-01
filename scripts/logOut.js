'use strict';
$(document).ready(function () {

    eventHandler();

    function eventHandler() {
        $("#btnLogOut").click(logOutClicked);
    }

    function logOutClicked(){
        userSession.logout();
        $('#views').load('templates/home.html');
        $('#userMenu').load('templates/userMenuView.html');
    }

});
