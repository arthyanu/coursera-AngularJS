var app = angular.module("myModule", []);

app.controller("myCheck", function($scope){
  $scope.check = function () {
  isMatch = angular.equals($scope.pwd, $scope.cpwd);
  if(isMatch)
    alert("Thank you for your Registration");
  else
    alert("MisMatch Password");
  }
});
