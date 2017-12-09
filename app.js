var app = angular.module('spotifyPlaylist', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'intro.html',
		controller: 'introControl'
	})
	.when('/home', {
		templateUrl: 'homeView.html',
		controller: 'homeControl'
	})
	.when('/playlist', {
		templateUrl: 'playlistView.html',
		controller: 'playlistControl'
	})
	.otherwise ({
		templateUrl: 'errorview.html',
		controller: 'errorControl'
	})
	$locationProvider.hashPrefix('');
});

app.run(function($rootScope, $timeout){
	$rootScope.mainBackgroundImage = 'https://static1.squarespace.com/static/55d62be6e4b0be109fdab4b5/55d74672e4b06c5ffbc15cc4/55d746aae4b0c9560c4bd747/1440171692692/_T0U0829_20m_RGB.jpg?format=2500w'
	$rootScope.navClass = '';
	$timeout(function(){
		$rootScope.navClass = 'load';
	}, 100);
});