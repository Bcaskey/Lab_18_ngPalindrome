var controllers = angular.module('myApp.controllers', []);



controllers.controller('welcomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.test = function(){
        $rootScope.testWord = $scope.testWord;
        window.location.href = '#/wordtest';
    };
}]);

controllers.controller('wordtestController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    var wordToTest = $rootScope.testWord;

    $scope.origWord = wordToTest;

    
}]);

