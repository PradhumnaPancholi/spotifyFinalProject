var app =angular.module('spotifyPlaylist');

app.controller('homeControl', function($scope, $rootScope, $timeout, $location, spotifyFactory){
  $rootScope.mainBackgroundImage = 'https://static1.squarespace.com/static/55d62be6e4b0be109fdab4b5/55d74672e4b06c5ffbc15cc4/55d746aae4b0c9560c4bd747/1440171692692/_T0U0829_20m_RGB.jpg?format=2500w';
  $scope.makePlaylist = function() {
    //pushes all of the user inputs into an empty array 
    var inputValues = [];
    
    inputValues.push($scope.input1);
    inputValues.push($scope.input2);
    inputValues.push($scope.input3);

    //this string will be used in the URL search, after being filled with the user inouts in the function below
    var search = '';

    //will loop through the array and clead the text, then add them to the URL string with a "+".  
    inputValues.forEach(function(obj) {
      if (obj) {
        input = obj.toLowerCase();
        input = input.replace(/\s+/g, '');
        input = input + '+';
        search = search + input;
        console.log(search);
      };
    });

    var query = search.substring(0, search.length - 1);
    console.log(query);

    $location.path('/playlist');
  }

// Ivan helped for image API/design with $rootScope up top


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
