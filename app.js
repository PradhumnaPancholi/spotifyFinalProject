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
	$rootScope.mainBackgroundImage = 'images/Nocito_Skrillex.jpg';
	$rootScope.navClass = '';
	$timeout(function(){
		$rootScope.navClass = 'load';
	}, 100);
});