var app = angular.module('app');

app.controller('homeControl', function($scope, $location){
	$scope.makePlaylist = function() {
		console.log($scope.input1);
		console.log($scope.input2);
		console.log($scope.input3);
		//TODO: 
		//Clean inputs, then call function in factory to search Spotify using the cleaned inputs

		//The following will call the config and change the view to the playlist page
		// $location.path('/playlist');

		//function to call factory:
		//SpotifyFactory.getTracks()
	}
})