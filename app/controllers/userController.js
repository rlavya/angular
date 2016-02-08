myApp.controller('userController', function($scope,UserService) {
    UserService.fetchUserDetails().then(function(data) {
        $scope.data = data;
    })  
    $scope.rowindex=0;
    $scope.addRow = function() {
        if ($scope.firstname == "" || $scope.lastname =="" || $scope.add_email =="" ) {
            $('#show_error_adduser').show();
            $('#show_error_adduser').html('Enter all details..');
            return false;
        } else {
            if($scope.add_email.indexOf('@') == -1) {
                $('#show_error_adduser').hide();
                $('.help-block').text('Enter a valid email');
                $('.help-block').show();
                return false;
            } else {
                $scope.data.push({ 'firstname':$scope.firstname, 'lastname': $scope.lastname, 'email':$scope.add_email, 'status':'active' });
                $scope.showAddForm = true;
                $('.shadow-div').removeClass('display_block');
                $('#show_error_adduser').hide();
            }
        }
    };

    $scope.editRow = function() {
        if ($scope.first_name == "" || $scope.last_name =="" || $scope.email_text =="" ) {
            $('#show_error_edituser').show();
            $('#show_error_edituser').html('Enter all details..');
            return false;
        } else {
            if($scope.email_text.indexOf('@') == -1) {
                $('#show_error_edituser').hide();
                $('.help-block').text('Enter a valid email');
                $('.help-block').show();
                return false;
            } else {
                var tableRow = $("#user_details tbody tr")[$scope.rowindex];
                tableRow.children[1].innerHTML = $scope.first_name;
                tableRow.children[2].innerHTML = $scope.last_name;
                tableRow.children[3].innerHTML = $scope.email_text;
                tableRow.children[4].innerHTML = $scope.status_select;
                $('.help-block').hide();
                $scope.showEditForm = true;
                $('.shadow-div').removeClass('display_block');
                $('#show_error_edituser').hide();
            }
        }
    };
    $scope.errorTrue = false;
    $scope.showAddForm = true;
    $scope.ShowAdd = function () {
        $scope.firstname="";
        $scope.lastname="";
        $scope.add_email="";
        $('.help-block').hide();
        $('#show_error_adduser').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddForm = $scope.showAddForm ? false : true;
    }
    $scope.HideAdd = function () {
        $('.shadow-div').removeClass('display_block');
        $scope.showAddForm = $scope.showAddForm ? false : true;
    }
    $scope.showEditForm = true;
    $scope.ShowEdit = function (e) {
        $scope.rowindex=e.$index;
        $scope.first_name="";
        $scope.last_name="";
        $scope.email_text="";
        $('.shadow-div').addClass('display_block');
        $scope.showEditForm = $scope.showEditForm ? false : true;
        $('.help-block').hide();
        $('#show_error_edituser').hide();
    }
    $scope.HideEdit = function () {
        $('.shadow-div').removeClass('display_block');
        $scope.showEditForm = $scope.showEditForm ? false : true;
    }
   });
