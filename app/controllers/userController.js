myApp.controller('userController', function($scope,UserService) {
    UserService.fetchUserDetails().then(function(data) {
        $scope.data = data;
    })
    $scope.addRow = function(){
    	$scope.data.push({ 'firstname':$scope.firstname, 'lastname': $scope.lastname, 'email':$scope.add_email, 'status':'active' });
        $scope.firstname=null;
        $scope.lastname=null;
        $scope.add_email=null;
        $scope.showAddForm = true;
        $('.shadow-div').removeClass('display_block');
    };
    $scope.errorTrue = false;
    // $('#add_form #add_email').on('keyup', function(eve){
    //    if ($scope.form.add_email.$viewValue.length == 0) {
    //         $scope.errorTrue = true;
    //    }
    //    else{
    //         $scope.errorTrue = false;    
    //    }
    // });
    $scope.showAddForm = true;
    $scope.ShowAdd = function () {
        $('.shadow-div').addClass('display_block');
        $scope.showAddForm = $scope.showAddForm ? false : true;
    }
    $scope.HideAdd = function () {
        $('.shadow-div').removeClass('display_block');
        $scope.showAddForm = $scope.showAddForm ? false : true;
    }
    $scope.showEditForm = true;
    $scope.ShowEdit = function (e) {
        $('.shadow-div').addClass('display_block');
        $scope.showEditForm = $scope.showEditForm ? false : true;
    }
    $scope.HideEdit = function () {
        $('.shadow-div').removeClass('display_block');
        $scope.showEditForm = $scope.showEditForm ? false : true;
    }
   });
