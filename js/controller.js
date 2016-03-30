var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope', '$location', function($scope, $location) {
    
    $scope.test = function(){
        $location.path('/wordtest/' + $scope.testWord);
    };
}]);

controllers.controller('wordtestController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        
        var newWord = $routeParams.testWord;
        var lwrWord = newWord.toLowerCase();
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
}]);



