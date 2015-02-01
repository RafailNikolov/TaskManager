'use strict';
$(document).ready(function(){

    $(function() {
        $( "#datepicker" ).datepicker();
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
