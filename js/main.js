var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeController'
    })
    .when('/wordtest', {
        templateUrl: 'views/wordtest.html',
        controller: 'wordtestController'
    })
    .otherwise({
        redirectTo: '/welcome'
    });
}])
   