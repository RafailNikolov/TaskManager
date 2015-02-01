'use strict';
var ajaxRequester = (function(){
    var baseUrl = "https://api.parse.com/1/";

    var headers =
    {
        "X-Parse-Application-Id": "Z0KlJMt8oJwac6garOx2C8mnDJk7yuCfFmkwrDYv",
        "X-Parse-REST-API-Key": "QhFDBqDmkR9HLRfzaY0U5jrUM4LTmerZSarz6X8i"
    };

    function login(username, password, success, error){
        jQuery.ajax({
            method: "GET",
            headers: headers,
            url: baseUrl + "login",
            data: {username: username, password: password},
            success: success,
            error: error
        });
    }

    function register(username, password, success, error){
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "users",
            data: JSON.stringify({username: username, password: password}),
            success: success,
            error: error
        });
    }

    function getHeadersWithSessionToken(sessionToken){
        var headersWithToken = JSON.parse(JSON.stringify(headers));
        headersWithToken['X-Parse-Session-Token'] = sessionToken;
        return headersWithToken;
    }

    function getTasks(sessionToken, success, error){
        var headersWithToken = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "GET",
            headers: headersWithToken,
            url: baseUrl + "classes/Tasks",
            success: success,
            error: error
        });
    }

    function createTasks(taskName, dateTarget, isDone, isUrgent, userId, success, error){
        var tasks = {taskName: taskName, dateTarget: dateTarget, isDone: isDone, isUrgent: isUrgent, ACL : {}};
        tasks.ACL[userId] = {"write" : true, "read" : true};
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "classes/Tasks",
            data: JSON.stringify(tasks),
            success: success,
            error: error
        });
    }

    function deleteTasks(sessionToken, tasksId, success, error){
        var headersWithToken = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "DELETE",
            headers: headersWithToken,
            url: baseUrl + "classes/Tasks/" + tasksId,
            success: success,
            error: error
        });
    }

    return {
        login: login,
        register: register,
        getTasks: getTasks,
        createTasks: createTasks,
        deleteTasks: deleteTasks
    };
})();