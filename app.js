	var validationApp = angular.module('myApp', []);

	validationApp.controller('mainController', function($scope, $http) {
$scope.user = {};
		$scope.submitForm = function() {

			if ($scope.userForm.$valid) {
                if ($scope.user.email == "lavya@qburst.com" && $scope.user.password == "lavya") {
                        alert('right');
                }
                else {
                    alert('wrong');
                }
			}
		};
	});
