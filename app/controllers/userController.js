var User = angular.module('UserDetails', []);

User.controller('userController', function($scope, UserService) {
    UserService.fetchUserDetails().then(function(data) {
        $scope.data = data;
    })
});
