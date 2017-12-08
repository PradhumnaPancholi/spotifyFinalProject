var app = angular.module('spotifyPlaylist');
app.factory('spotifyFactory', function ($http) {
  var authToken;
  var retry = 1;
// var authToken creates empty authToken variable. 
  return {
    getTracks, 
    savedTracks: null
  };
//returning our function get tracks
  function getTracks (query) {
    return authorize().then(function(token){
      return trackRequest(token, query)
    });
  }
//our function getTracks takes query (user input) as a parameter (placeholder).
// the promise says- our getTracks function contains a promise that says if authorize function is succesful, then run 
// trackRequest function (uses token & query as parameters)

  function authorize () {
    if(authToken) {
      return Promise.resolve(authToken);
    }
    //our authorize function is saying return this promise object. this becomes the result of calling promise.resolve.

    var url = 'https://accounts.spotify.com/api/token';
    var data = 'grant_type=client_credentials';
    var headers = {
      Authorization: 'Basic NzQzYzJiMWE4Mzc1NDVmOTlmMTdiNWNjMjljNWZiMGE6NjQ5MWYzNWQ0M2FmNDZhNWI4NTgyNmRjODg5YzIyZGY=',
      'Content-Type': 'application/x-www-form-urlencoded' 
    }
    return $http.post(url, data, {headers}).then(function(result){
      authToken = result.data.access_token;
      return authToken;
    });
  }
//var url is our API link we are using to run our authorization through. 
//in this return we are sending our authToken to Spotify's Authorization api. we are setting our variable authToken equal
//to result.data.access_token (URL, Data, Headers, Authorization all provided by Spotify's Auth. API) & then we are returning that.

  function trackRequest (token, query){
    // if (savedTracks.length) {
    //   return Promise.resolve(savedTracks);
    // }
    var url=`https://api.spotify.com/v1/search?q=${query}&type=track&limit=50`
    var headers = {
      Authorization: `Bearer ${token}`
      //our function takes token & query as paramaters, then we move onto our next function (provided the authorization code is accepted)
      //we are pulling our tracks from Spotify's search api. we use ${query} to note where our inputs are going to go (our inputs from the user set the search parameters.)
      //our headers var is set to an object authorization with the value of "bearer ${token}", which will input the new authtoken we have gotten from the get request below
    }
    return $http.get(url, {headers}).then(function(response) {
      // savedTracks= response.data;
      return response.data;
      console.log(response.data);
    }).catch (function (err) {
      if (err.status === 401 && retry < 2) {
        retry++
        authToken = null;
        return getTracks();
      }
      if(retry >= 2) {
        retry = 1;
      }
    });
  };  

//
//   function createSpotifyPlaylist () {
//     // function to get login 
    
//     var url = 'https://api.spotify.com/v1/users/blairsteen/playlists';
//     var data = {
//       name: query,
//       description: 'playlist created by spotifind app'
//     };
//     var headers = {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     }

// }
//
  function createSpotifyPlaylist (user_id) {
    var authToken;
    var retry = 1;
  // var authToken creates empty authToken variable. 
    return {
      getPlaylist, 
      savedPlaylist: null
    };
  //returning our function get tracks
    function createSpotifyPlaylist (user_id) {
      return authorize().then(function(token){
        return playlistRequest(token, user_id)
      });
    }
  //our function getTracks takes user_id (username) as a parameter (placeholder).
  // the promise says- our getTracks function contains a promise that says if authorize function is succesful, then run 
  // trackRequest function (uses token & user_id as parameters)
  
    function authorize () {
      if(authToken) {
        return Promise.resolve(authToken);
      }
      //our authorize function is saying return this promise object. this becomes the result of calling promise.resolve.
  
      var url = 'https://accounts.spotify.com/api/token';
      var data = 'grant_type=client_credentials';
      var headers = {
        Authorization: 'Basic NzQzYzJiMWE4Mzc1NDVmOTlmMTdiNWNjMjljNWZiMGE6NjQ5MWYzNWQ0M2FmNDZhNWI4NTgyNmRjODg5YzIyZGY=',
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
      return $http.post(url, data, {headers}).then(function(result){
        authToken = result.data.access_token;
        return authToken;
      });
    }
  //var url is our API link we are using to run our authorization through. 
  //in this return we are sending our authToken to Spotify's Authorization api. we are setting our variable authToken equal
  //to result.data.access_token (URL, Data, Headers, Authorization all provided by Spotify's Auth. API) & then we are returning that.
  
    function playlistRequest (token, user_id){
      // if (savedTracks.length) {
      //   return Promise.resolve(savedTracks);
      // }
      var url=`https://api.spotify.com/v1/users/{user_id}/playlists`
      var headers = {
        Authorization: `Bearer ${token}`
        //our function takes token & query as paramaters, then we move onto our next function (provided the authorization code is accepted)
        //we are pulling our tracks from Spotify's search api. we use ${query} to note where our inputs are going to go (our inputs from the user set the search parameters.)
        //our headers var is set to an object authorization with the value of "bearer ${token}", which will input the new authtoken we have gotten from the get request below
      }
      return $http.get(url, {headers}).then(function(response) {
        // savedTracks= response.data;
        return response.data;
        console.log(response.data);
      }).catch (function (err) {
        if (err.status === 401 && retry < 2) {
          retry++
          authToken = null;
          return createSpotifyPlaylist();
        }
        if(retry >= 2) {
          retry = 1;
        }
      });
    };
  };
});
//our get request is pulling from URL (search API) & from our headers object which contains our new auth token. once that promise is fufilled,
//then we console logged our response from our get request to make sure the data was pulled correctly. once we saw that was working correctly,
//we return the data from our get get request (response.data). we have a catch function that says if we get an error status of 401 (not authorized),
// it will try two times to get a new auth token- authToken = null; will wipe out our old auth code and then we go back to our getTracks function which runs
//our authorize functiona to check if our auth code is still working and then runs our get request. 