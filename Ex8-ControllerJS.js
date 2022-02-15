var app = angular.module("m1", []);

app.controller("c1", function($scope, $rootScope){
	$scope.name = "Arthy";
	$scope.desi = "Assistant Professor";
	$scope.dept = "Information Technology";
	$rootScope.msg1 = "Hello ";
});

app.controller("c2", function($scope, $rootScope){
	$scope.name1 = "R.Arthy";
	$scope.desi1 = "Assistant Professor";
	$scope.dept1 = "Information Technology";
});