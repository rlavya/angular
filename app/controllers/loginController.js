myApp.controller('loginController', function($scope, $location){
    $scope.user = {};
    $scope.submitForm = function(isValid) {
        if (isValid) {
            if ($scope.user.email == "lavya@qburst.com" && $scope.user.password == "lavya") {
                    $location.path('/dashboard').replace();
            }
            else {
                $('#show_error').html('Enter correct details..');
                $('#email').val("");
                $('#password').val("");
            }
        }
    };
});