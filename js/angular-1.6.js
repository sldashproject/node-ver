var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    // var socketUrl = "https://localhost:3000";
    // var socket = io.connect(socketUrl);
    
    // socket.on('connectDb', function (data) {
    //     console.log('Connected clients: ' + data);
    // });
    
    // Controller magic
    $scope.first_name1 = '';
    $scope.last_name1 = '';
    $scope.middle_name1 = '';
    $scope.birth1 = '';
    
    $scope.modelView = true;
    $scope.todoView = false;
    $scope.dbtestView = false;
    $scope.dbselectView = false;
    $scope.ViewPage = function(view){
        switch(view)
        {
            case 1: 
                $scope.modelView = true;
                $scope.todoView = false;
                $scope.dbtestView = false;
                $scope.dbselectView = false;
                break;
            case 2:
                $scope.modelView = false;
                $scope.todoView = true;
                $scope.dbtestView = false;
                $scope.dbselectView = false;
                break;
            case 3:
                $scope.modelView = false;
                $scope.todoView = false;
                $scope.dbtestView = true;
                $scope.dbselectView = false;
                break;
            case 4:
                $scope.modelView = false;
                $scope.todoView = false;
                $scope.dbtestView = false;
                $scope.dbselectView = true;
                break;
        }
    };
    
    $scope.modelMale = true;
    $scope.modelFemale = false;
    $scope.modelGender = function(gender){
        switch(gender)
        {
            case 1:
                $scope.modelMale = true;
                $scope.modelFemale = false;
                break;
            case 2:
                $scope.modelMale = false;
                $scope.modelFemale = true;
                break;
        }
    };
    
    $scope.modelReset = function(){
        $scope.first_name1 = '';
        $scope.last_name1 = '';
        $scope.middle_name1 = '';
        $scope.birth1 = '';
    };
    
    // TodoList start
    $scope.todos = [
        {
          title: 'Schedule meeting with new client',
          completed: false,
          createdAt: Date.now()
        },
        {
          title: 'Create email address for new intern',
          completed: false,
          createdAt: Date.now()
        },
        {
          title: 'Have IT fix the network printer',
          completed: true,
          createdAt: Date.now()
        }
    ];
  
    $scope.remove = function(todo){
	    //find todo index in todos
	    var idx = $scope.todos.findIndex(function(item){
		    return item.id === todo.id;
	    })
	  
	    // remove from todos
	    if(idx > -1){
		    $scope.todos.splice(idx,1)
	    }
    }
  
    $scope.add = function(newTodoTitle){
	    //create new todos
	    var newTodo = {
		    title: newTodoTitle,
		    completed: false,
		    createdAt: Date.now()
	    };
	  
	  
  	    // push into todos
	    $scope.todos.push(newTodo);	 
	  
	    // empty focus
	    //$scope.newTodoTitle = "";
	    document.getElementById("todoName").value = "";
    }
    // TodoList end
    
    
    
    // CRUD with Mysql : Start
    
    $scope.clickedUser = {};
    $scope.clickedUserId = 0;
    $scope.clickedIndex = 0;
    $scope.message = "";
    
    $scope.selectUser = function(index,user){
        console.log("selectUser index:"+index);
        console.log("selectUser userId:"+user.id);
        $scope.clickedUser = user;
        $scope.clickedUserId = user.id;
        $scope.clickedIndex = index;
    };
    
    $scope.clearMessage = function(){
        $scope.message = "";
    };
    
    // displaying member
    $.ajax({
        url: 'https://dashboard-node-ver-sldashproject.c9users.io/getList',
        complete: function(data) {
            console.log(data);
            $scope.selectDB = data.responseJSON;
        }
    });
    
    // adding member
    $scope.saveUser = function(){
      var input_data = {name: $('#addName').val(), email: $('#addEmail').val()};
      $.ajax({
        url: 'https://dashboard-node-ver-sldashproject.c9users.io/addList',
        method: 'POST',
        dataType: 'text',
        data: input_data,
        complete: function(data) {
            console.log(data);
        }
      });
      var last_num = $scope.selectDB.length;
      var last_id = $scope.selectDB[last_num-1].id;
      console.log("saveUser last_id:"+last_id);
      var real_input_data = {id: last_id+1, name: $('#addName').val(), email: $('#addEmail').val()};
      $scope.selectDB.push(real_input_data);
      $scope.message = "New User Added Successfully";
    };
    
    // deleting member
    $scope.removeMember = function(){
        console.log("$scope.clickedIndex : "+$scope.clickedIndex);
        $.ajax({
            url: 'https://dashboard-node-ver-sldashproject.c9users.io/deleteList',
            method: 'POST',
            dataType: 'text',
            data: {id:$scope.clickedUserId},
            complete: function(data) {
                console.log(data);
            }
        });
        $scope.selectDB.splice($scope.selectDB.indexOf($scope.clickedIndex),1);
        $scope.message = "Deleted Successfully";
    }

    // updating member
    $scope.updateUser = function(){
        var userId = $scope.clickedUser.id;
        var userName = $scope.clickedUser.name;
        var email = $scope.clickedUser.email;
        console.log("updateUser userId : "+userId);
        console.log("updateUser userName : "+userName);
        console.log("updateUser email : "+email);
        
        var input_data = {name: userName, email: email, id:userId};
        $.ajax({
            url: 'https://dashboard-node-ver-sldashproject.c9users.io/updateList',
            method: 'POST',
            dataType: 'text',
            data: input_data,
            complete: function(data) {
                console.log(data);
            }
        });
        //$scope.selectDB.splice($scope.selectDB.indexOf($scope.clickedIndex),1);
        $scope.message = "Updated Successfully";
    }
    
    // CRUD with Mysql : End
    
}]);

//restrict only number
myApp.directive('onlyNumber', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.on('keydown', function (event) {
                var key = (event.which) ? event.which : event.keyCode;
                if((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key == 8) || (key == 9) ||
                    (key == 13) || (key == 16) || (key == 37) || (key == 39) || (key == 116)) {
                    return true;
                }
                else
                {
                    return false;
                }
            });
        }
    };
});