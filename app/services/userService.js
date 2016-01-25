User.factory('UserService' ,['$http' ,'$q', function($http ,$q){
    return{
        fetchUserDetails: function() {
            return $http.get('../user_details.json')
                    .then(
                            function(response){
                                return response.data;
                            },
                            function(errResponse){
                                console.error('Error while fetching users');
                                return $q.reject(errResponse);
                            }
                    );
    }
    }
}]);
