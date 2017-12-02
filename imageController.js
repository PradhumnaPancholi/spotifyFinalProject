var app = angular.module('spotifyPlaylist');
app.controller('imageCtrl', function($scope, $http){
  $http.get('https://pixabay.com/api/?key=7224142-677dfa074025c367b8606c4be&q=music+rock&image_type=photo&per_page=10').then(function(data){
    $scope.posts = data.data.hits;
    $scope.post = data.data.hits[0];
    console.log($scope.posts);
  });

});