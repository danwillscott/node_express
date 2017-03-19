/**
 * Created by danielscott on 3/18/17.
 */
let app = angular.module('apiApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main.html'
        })
        .when('/users', {
            templateUrl: 'partials/all_users.html'
        })
        .when('/user/:id', {
            templateUrl: 'partials/user_info.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});
