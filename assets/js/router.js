myApp.config(function($routeProvider) {
$routeProvider
    .when('/', {
        controller : 'navigation',
        templateUrl: 'app/views/login.html'
    })
    .when('/home', {
        controller : 'homeController',
        templateUrl: 'app/views/home.html'
    })
    .when('/dashboard', {
        controller : 'dashboardController',
        templateUrl: 'app/views/dashboard.html'
    })
    .when('/userDetails', {
        controller : 'userController',
        templateUrl: 'app/views/userDetails.html'
    })
});
