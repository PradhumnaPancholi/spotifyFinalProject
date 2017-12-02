var app =angular.module('spotifyPlaylist');
app.controller('playlistControl', function($scope, $timeout, $location, spotifyFactory) {
spotifyFactory.getTracks().then(function(data) {
  $timeout($scope.resonse.data.uri = data);
  console.log(data);
});
});
