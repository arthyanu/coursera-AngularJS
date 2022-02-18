var myApp = angular.module('myApp', []);

myApp.controller('timeoutSer', function($scope, $timeout){

    $scope.test1 = "Example for $timeout"

      $timeout( function(){
          $scope.test1 = "Welcome to AngularJS";
      }, 5000 );
  });

myApp.controller('intervalSer', function ($scope, $interval) {

    $scope.ptime = new Date().toLocaleTimeString();

    $interval(function () {

    $scope.ptime = new Date().toLocaleTimeString();

    }, 1000);

});

myApp.controller('locationSer', function ($scope, $location) {

      $scope.weburl = $location.absUrl();

      $scope.urlhost = $location.host();

      $scope.urlport = $location.port();

      $scope.urlprotocol = $location.protocol();

});

myApp.controller('httpSer', function ($scope, $http) {

  $http({

  method: 'GET',

  url: 'www.google.com'

  }).then(function success(response) {

  $scope.myWelcome = response.data;
  $scope.statusval = response.status;
  $scope.statustext = response.statusText;
  $scope.headers = response.headers();

  }, function error(response) {

  });

  });
