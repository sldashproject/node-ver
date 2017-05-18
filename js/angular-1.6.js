var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    // Controller magic
    $scope.first_name1 = '';
    $scope.last_name1 = '';
    $scope.middle_name1 = '';
    $scope.birth1 = '';
    
    $scope.modelView = true;
    $scope.todoView = false;
    $scope.ViewPage = function(view){
        switch(view)
        {
            case 1: 
                $scope.modelView = true;
                $scope.todoView = false;
                break;
            case 2:
                $scope.modelView = false;
                $scope.todoView = true;
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
  
  
}]);