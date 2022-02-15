var app = angular.module("m1", []);

// Provider
app.config(function($provide) {  
    $provide.provider('MathService', function() {  
        this.$get = function() {  
            var factory = {};  
                factory.multiply = function(a, b) {  
                    return a * b;  
                }  
                return factory;  
            };  
        });  
    });  
           
// Value		   
app.value("defaultInput", 10);  
        
// Factory		
app.factory('MathService', function() {  
    var factory = {};  
    
    factory.multiply = function(a, b) {  
        return a * b;  
    }  
    return factory;  
    });  
 
// Service 
app.service('CalcService', function(MathService){  
	this.square = function(a) {  
    return MathService.multiply(a,a);  
	}  
    });  
    
app.controller('CalcController', function($scope, CalcService, defaultInput) {  
    $scope.number = defaultInput;  
    $scope.result = CalcService.square($scope.number);  
	
    $scope.square = function() {  
		$scope.result = CalcService.square($scope.number);  
        }  
    });  
         