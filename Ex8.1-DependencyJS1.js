var app = angular.module("mymodule", []);

app.controller('nameController', function($scope){
  $scope.name = 'Arthy';
  $scope.sayHello = function(){
    return "Hello";
  }
});
