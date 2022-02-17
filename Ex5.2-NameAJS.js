var app = angular.module("NameModule", []);

app.controller('NameController', function($scope){
  $scope.name = "";
  $scope.sum = 0;

  $scope.displayValue = function(){
    var sum1 = 0;
    $scope.sum = sum1;

    var name1 = $scope.name;
    for(var i = 0; i < name1.length; i++)
      sum1 += name1.charCodeAt(i);
    $scope.sum = sum1;
  }
})
