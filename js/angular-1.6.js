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
    $scope.ViewPage = function(view){
        switch(view)
        {
            case 1: 
                $scope.modelView = true;
                $scope.todoView = false;
                $scope.dbtestView = false;
                break;
            case 2:
                $scope.modelView = false;
                $scope.todoView = true;
                $scope.dbtestView = false;
                break;
            case 3:
                $scope.modelView = false;
                $scope.todoView = false;
                $scope.dbtestView = true;
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
  
    $.ajax({
        url: 'https://dashboard-node-ver-sldashproject.c9users.io/getList',
        complete: function(data) {
            console.log(data);
        }
    });
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