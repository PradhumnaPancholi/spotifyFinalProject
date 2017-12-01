var app = angular.module('spotifyPlaylist');
app.factory('spotifyFactory', function ($http) {
  var authToken;
  var retry = 1;

  return {
    getTracks
  };

  function getTracks (query) {
    return authorize().then(function(token){
      return trackRequest(token, query)
    });
  }


  function authorize () {
    if(authToken) {
      return Promise.resolve(authToken);
    }

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


  function trackRequest (token, query){
    // if (savedTracks.length) {
    //   return Promise.resolve(savedTracks);
    // }
    var url=`https://api.spotify.com/v1/search?q=${query}&type=album,artist,track&limit=5`
    var headers = {
      Authorization: `Bearer ${token}`
    }
    return $http.get(url, {headers}).then(function(response) {
      console.log(response);
      // savedTracks= response.data;
      return response.data;
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
});