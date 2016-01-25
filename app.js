	var myApp = angular.module('myApp', ['ngRoute']);
	myApp.controller('mainController', function($scope,$location) {
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

    });
	// .controller('homeController',function($scope){
	//
	// })
	// .config(function($routeProvider) {
	// 	$routeProvider
	// 		.when('/dashboard', {
	// 	        controller : 'homeController',
	// 	        templateUrl: 'app/views/dashboard.html'
	//     	})
	// });
    myApp.config(function($routeProvider) {
    $routeProvider
		.when('/home', {
	        controller : 'navigation',
	        templateUrl: 'app/views/home.html'
    	})
		.when('/', {
	        controller : 'navigation',
	        templateUrl: 'app/views/login.html'
    	})
    }
);
