var app =angular.module('spotifyPlaylist');
app.controller('playlistControl', function($scope, $rootScope, $http, $sce, spotifyFactory) {
  $http.get('https://pixabay.com/api/?key=7224142-677dfa074025c367b8606c4be&q=detroit&image_type=photo&per_page=10').then(function(data){

    $rootScope.mainBackgroundImage = data.data.hits[0].webformatURL;
    $scope.playlist = spotifyFactory.savedTracks;
    $scope.playlist.forEach (function (song){
      song.src=$sce.trustAsResourceUrl(`https://embed.spotify.com/?uri=${song.uri}`); 
      //making a new property on every object called SRC, we will reference this src object 
     
    });
  });
});
