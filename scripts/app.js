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
        $('#btnAddNewTask').on('click', addTaskClicked);
    }


    function showTaskList(){
        $('#views').load('templates/taskList.html');

    }

    function showAddTaskView(){
        $('#views').load('templates/addTask.html');
    }

    function addTaskClicked(){
        var taskName = $('#taskName').val();
        var dateTarget = $('#datepicker').val();
        var isDone = 'Not Done!';
        var isUrgent = $('#taskType').val();
        var currentUser = userSession.getCurrentUser();
        ajaxRequester.createTasks(taskName, dateTarget, isDone, isUrgent, currentUser.objectId,
        taskCreated, taskNotCreated);
    }

    function taskCreated(){
        var taskName = $('#taskName').val();
        alert("New Task Created: "+ "'" + taskName + "'");
        $('#taskName').val('');
        $('#datepicker').val('');
        $('#taskType').val('');

    }
    function taskNotCreated(){
        alert("NOOOOOOOOOO");
    }
});
