var controllers = angular.module('myApp.controllers', []);



controllers.controller('welcomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.test = function(){
        $rootScope.testWord = $scope.testWord;
        var wordToTest = $rootScope.testWord;
        var lwrWord = wordToTest.toLowerCase();
        $scope.origWord = lwrWord;
        var revWord = '';
        for (var i = lwrWord.length - 1; i >= 0; i--) {
            revWord += lwrWord[i];
        } 
        $scope.testResults = '';
        $scope.revWord = revWord;
        if (lwrWord === revWord) {
            $scope.testResults = 'This word is a palindrome.';
        } else {
            $scope.testResults = 'This word is not a palindrome.';
        }
        console.log($scope.testResults);
        $rootScope.testResults = $scope.testResults;
        $rootScope.revWord = $scope.revWord;
        $rootScope.origWord = $scope.origWord;
        window.location.href = '#/wordtest';
        
        //routeParam
    };
}]);

controllers.controller('wordtestController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    
    $rootScope.origWord;
    $rootScope.revWord;
    $rootScope.testResults;
    
}]);



