myApp.controller('userController', function($scope,UserService) {
    UserService.fetchUserDetails().then(function(data) {
        $scope.data = data;
    })
    $scope.addRow = function(){
        // if($scope.firstname == undefined || $scope.lastname == undefined || $scope.email == undefined) {
        //     alert('enter all details');
        //     return false;
        // }
	$scope.data.push({ 'firstname':$scope.firstname, 'lastname': $scope.lastname, 'email':$scope.email, 'status':'active' });
    $scope.firstname=null;
    $scope.lastname=null;
    $scope.email=null;
    $scope.showAddForm = true;
    };

    $scope.showAddForm = true;
    $scope.ShowAdd = function () {
        $scope.showAddForm = $scope.showAddForm ? false : true;
    }
    $scope.HideAdd = function () {
        $scope.showAddForm = $scope.showAddForm ? false : true;
    }
    $scope.showEditForm = true;
    $scope.ShowEdit = function (e) {
        $scope.showEditForm = $scope.showEditForm ? false : true;
    }
    $scope.HideEdit = function () {
        $scope.showEditForm = $scope.showEditForm ? false : true;
    }
   });
