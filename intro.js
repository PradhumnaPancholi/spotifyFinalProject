var app =angular.module('spotifyPlaylist');
app.controller('introControl', function($scope, $rootScope, $timeout, $location) { 
        $rootScope.mainBackgroundImage = 'images/nylon_31.jpg';
        $scope.gotoHomePage = function(){
            $location.path('/home');
        }
        $scope.boxClass = '';
        $timeout(function(){
            $scope.boxClass = 'load';
        }, 100);
    });