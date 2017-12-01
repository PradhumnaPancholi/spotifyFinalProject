var app =angular.module('spotifyPlaylist');
app.controller('homeControl', function($scope, $timeout, $location, spotifyFactory){

  $scope.makePlaylist = function() {
    var search = '';
    if ($scope.input1.length) {
      input = $scope.input1;
      input = input.toLowerCase();
      input = input.replace(/\s+/g, '');
      input = input + '+';
      search = search + input;
      console.log(search);
    }
  }

//   spotifyFactory.getTracks(query).then(function(data){
//     console.log(data);
//     $timeout($scope.tracks = data);
//   });
//
//
});



//TO DO:
//Clean inputs, then call function in factory to search Spotify using the cleaned inputs

//The following will call the config and change the view to the playlist page
// $location.path('/playlist');

//function to call factory:
//SpotifyFactory.getTracks()
