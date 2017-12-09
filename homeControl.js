var app =angular.module('spotifyPlaylist');

var items = ['Favorite sport?', 'Gin or Juice?', 'Tea or coffee?','Where were you born?','One thing to eat for the rest of your life?',
'What color are your kicks?','What’s the color of your locks??','What is your favorite season?','What’s in your pocket?','Dog, cat, fish, bird?',
'Howdya like your steak done?','Biggie or Tupac?','Knicks or Bulls?','Relationship status?','If animals could talk, which would be the rudest?',
'What color is that dress??','What color was your first car?','What’s your favorite time of day?','Morning or night person?','What’s your dream destination?',
'What city do you love?','What city do you loathe?','The last you’ll ever say?','Favorite swear word…','Favorite instrument?','David or Goliath?','Kim, Caitlyn or Kayne?'];


app.controller('homeControl', function($scope, $rootScope, $location, $timeout, spotifyFactory){
  $rootScope.mainBackgroundImage = 'images/Nocito_Skrillex.jpg';
  spotifyFactory.savedTracks= null
  $scope.placeholder = items[Math.floor(Math.random()*items.length)];
  var placeholderList = items.filter(function(item){
    return item !== $scope.placeholder;
  });
  $scope.placeholder2 = placeholderList[Math.floor(Math.random()*placeholderList.length)];

  $scope.makePlaylist = function() {
    //pushes all of the user inputs into an empty array 
    // var inputValues = [];
    
    // inputValues.push($scope.input1);
    // inputValues.push($scope.input2);
    // inputValues.push($scope.input3);

    //this string will be used in the URL search, after being filled with the user inouts in the function below
    // var search = '';

    //will loop through the array and clead the text, then add them to the URL string with a "+".  
    // inputValues.forEach(function(obj) {
    //   if (obj) {
    //     input = obj.toLowerCase();
    //     input = input.replace(/\s+/g, '');
    //     input = input + 'OR';
    //     search = search + input;
    //     console.log(search);
    //   };
    // });
    spotifyFactory.location = $scope.input2;
    var query = `track:${$scope.input1}+OR+track:${$scope.input2}`
    console.log(query);
    spotifyFactory.getTracks(query).then(function(data){
      console.log(data.tracks);
      spotifyFactory.savedTracks= data.tracks.items;
      $timeout($location.path('/playlist'));
    });
  }

// Ivan helped for image API/design with $rootScope up top


  

//
});



//TO DO:
//Clean inputs, then call function in factory to search Spotify using the cleaned inputs

//The following will call the config and change the view to the playlist page
// $location.path('/playlist');

//function to call factory:
//SpotifyFactory.getTracks()
