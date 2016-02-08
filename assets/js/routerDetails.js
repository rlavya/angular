myApp.config(function($routeProvider) {
$routeProvider
    .when('/', {
        controller : 'loginController',
        templateUrl: 'app/views/login.html',
    })
    .when('/dashboard', {
        controller : 'dashboardController',
        templateUrl: 'app/views/dashboard.html'
    })
    .when('/userDetails', {
        controller : 'userController',
        templateUrl: 'app/views/userDetails.html',
        resolve : {
            param: function(){
                return false;
            }
        }
    })
    .when('/expense', {
        controller : 'expenseController',
        templateUrl: 'app/views/expense.html'
    })
    .otherwise({redirectTo: '/'})
});
