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
        if(taskName === ''){
            taskNotCreated();
        }else {

            var currentUser = userSession.getCurrentUser();
            ajaxRequester.createTasks(taskName, dateTarget, isDone, isUrgent, currentUser.objectId,
                taskCreated, taskNotCreated);
        }
    }

    function taskCreated(){
        var taskName = $('#taskName').val();
        showInfoMsg("New Task Created: "+ "'" + taskName + "'");
        $('#taskName').val('');
        $('#datepicker').val('');
        $('#taskType').val('');

    }

    function taskNotCreated(){
        showErrorMsg("Task Not created");
    }


    function showInfoMsg(msg){
        noty({
            text: msg,
            type: 'success',
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function showErrorMsg(msg){
        noty({
            text: msg,
            type: 'error',
            layout: 'topCenter',
            timeout: 5000
        });
    }
});
