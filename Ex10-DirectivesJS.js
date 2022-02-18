var app = angular.module("myDirectives", []);

app.controller("myOrder", function($scope){
  $scope.blurred = function(){
    alert("Thank you for your Order.... Please wait for 10 mins....");
  }
  $scope.count = 0;
  $scope.payNow = function(){
    var len = $scope.foodDetail.length;
    var order1 = $scope.order;
    var price1 = 0;
    for(var i = 0; i < len; i++)
    {
      if($scope.foodDetail[i]['name'] == order1)
        price1 = $scope.foodDetail[i]['price'];
    }
    alert("Your Payment Rs."+price1);
  }
  $scope.change1 = function(){
    alert("Do you want to order new item????");
  }
})
