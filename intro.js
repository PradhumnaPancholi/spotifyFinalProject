var app =angular.module('spotifyPlaylist');
app.controller('introControl', function($scope, $rootScope, $location) { 
        $rootScope.mainBackgroundImage = 'images/nylon_31.jpg';
        $scope.gotoHomePage = function(){
            $location.path('/home');
        }
    });