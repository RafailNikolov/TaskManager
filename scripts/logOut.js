'use strict';
$(document).ready(function () {

    eventHandler();
    var currentUser = userSession.getCurrentUser();
    $('#currentUser').text(' ' + currentUser.username);

    function eventHandler() {
        $("#btnLogOut").click(logOutClicked);
        $('#btnUser').on('click', viewTasks);
    }

    function logOutClicked(){
        userSession.logout();
        $('#views').load('templates/home.html');
        $('#userMenu').load('templates/userMenuView.html');
    }

    function viewTasks(){
        $('#views').load('templates/taskList.html');
    }

});
