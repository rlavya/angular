myApp.controller('userController', function($scope,UserService) {
    UserService.fetchUserDetails().then(function(data) {
        $scope.data = data;
    })
    $scope.showAddForm = true;
    $scope.ShowAdd = function () {
        $scope.showAddForm = $scope.showAddForm ? false : true;
    }
    $scope.showEditForm = true;
    $scope.ShowEdit = function () {
        $scope.showEditForm = $scope.showEditForm ? false : true;
    }
   });
