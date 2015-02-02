'use strict';
$(document).ready(function(){

    $(function() {
        $( "#datepicker" ).datepicker();
    });

    $('.navbar-collapse').click('li', function() {
        $('.navbar-collapse').collapse('hide');
    });

    eventHandler();

    function eventHandler(){
        $('#btnTaskList').on('click', showTaskList);
        $('#btnAddTask').on('click', showAddTaskView);
    }


    function showTaskList(){
        $('#views').load('templates/taskList.html');

    }
    function showAddTaskView(){
        $('#views').load('templates/addTask.html');
    }
});
