var app =angular.module('spotifyPlaylist');
app.controller('playlistControl', function($scope, $rootScope, $http, $sce, spotifyFactory, $location) {
  $http.get(`https://pixabay.com/api/?key=7224142-677dfa074025c367b8606c4be&q=${spotifyFactory.location}&image_type=photo&per_page=10`).then(function(data){
    if (data.data.hits[0]){
      $rootScope.mainBackgroundImage = data.data.hits[0].webformatURL;
    }

    $scope.playlist = spotifyFactory.savedTracks;
    if (! $scope.playlist) {
      $location.path('/home')
    }
    $scope.playlist.forEach(function (song){
      song.src=$sce.trustAsResourceUrl(`https://embed.spotify.com/?uri=${song.uri}`);
      //making a new property on every object called SRC, we will reference this src object
    });

    $scope.quantity = 5;

  });

    $scope.nextButton = function() {
    	console.log('click1');
   		$scope.quantity += 1;
    };

    $scope.createSpotifyPlaylist = function(){
      spotifyFactory.createSpotifyPlaylist().then(function(result){
        console.log(result);
      });
    }
});


//Ivan question on plugging in $scope.input2 into image search


// $http.get('https://pixabay.com/api/?key=7224142-677dfa074025c367b8606c4be&q={$scope.input2}&image_type=photo&per_page=10').then(function(data){
