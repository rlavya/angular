myApp.controller('homeController',function($scope){

})
.controller('dashboardController', function() {
alert('dgdfg');
})
.config(function($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            controller : 'dashboardController',
            templateUrl: 'app/views/dashboard.html'
        })
});
