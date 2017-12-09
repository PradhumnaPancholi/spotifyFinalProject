var app =angular.module('spotifyPlaylist');
app.controller('errorControl', function($scope, $rootScope) { 
        $rootScope.mainBackgroundImage = 'http://www.electronicbeats.net/app/uploads/2016/06/rickastley.jpg';
        
    });



    // $http.get('http://www.electronicbeats.net/app/uploads/2016/06/rickastley.jpg').then(function(data){

    //     $rootScope.mainBackgroundImage = data.webformatURL;
    
// });