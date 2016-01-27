	var myApp = angular.module('myApp', ['ngRoute']);
	myApp.controller('mainController', function($scope) {
		$scope.user = {};
		$scope.submitForm = function() {
			if ($scope.userForm.$valid) {
                if ($scope.user.email == "lavya@qburst.com" && $scope.user.password == "lavya") {
                        window.location.href = '/home';
                }
                else {
                    $('#show_error').html('Enter correct details..');
                    $('#email').val("");
                    $('#password').val("");
                }
			}
		};
	})
    .controller('navigation', function() {
    })
	.controller('homeController',function(){
	})
	.controller('dashboardController',function(){
	});
