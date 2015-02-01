'use strict';

var views = $(document).ready(function () {

    loadHomeView();
    eventHandler();

    function eventHandler() {
        $('.navbar-brand').on('click', loadHomeView);
        $('#btnHome').on('click', loadHomeView);
        $('#btnTasks').on('click', loadTasksView);
        $('#btnAbout').on('click',loadAboutView);
        $('#btnInfo').on('click', loadInfoView);
    }

    var currentUser = userSession.getCurrentUser();
//--------------VIEWS-----------------------

    function loadInfoView(){
        $('#views').load('templates/info.html');
    }
    function loadHomeView(){
        if(currentUser){
            $('#views').load('templates/home.html');
            $('#userMenu').load('templates/logOut.html');
        }else {
            $('#views').load('templates/home.html');
            $('#userMenu').load('templates/userMenuView.html');
        }
    }
    function loadTasksView(){
        if(currentUser) {
            $('#views').load('templates/tasks.html');
        }else{
            $('#views').load('templates/noUserTasks.html');
        }
    }
    function loadAboutView(){
        $('#views').load('templates/about.html');
    }

});