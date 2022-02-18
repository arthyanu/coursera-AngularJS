var app = angular.module("myModule", []);

app.controller("myCheck", function($scope){
  $scope.check = function () {
  isMatch = angular.equals($scope.pass, $scope.cpass);
  if(isMatch)
    $scope.msg = "Password Mached";
  else
  $scope.msg = "Password MisMached";
  }
});
