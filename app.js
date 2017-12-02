var app = angular.module('spotifyPlaylist', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'homeView.html',
		controller: 'homeControl'
	})
	.when('/playlist', {
		templateUrl: 'playlistView.html',
		controller: 'imageController'
	})
	.otherwise ({
		templateUrl: 'errorview.html'
	})
	$locationProvider.hashPrefix('');
});