var app = angular.module('spotifyPlaylist', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'homeView.html',
		controller: 'homeControl'
	})
	.when('/playlist', {
		templateUrl: 'playlistView.html'
	})
	.otherwise ({
		template: '<h1>HTTP ERROR 404</h1><h3>Oops, it looks like this page does not exist.</h3>'
	})
	$locationProvider.hashPrefix('');
});