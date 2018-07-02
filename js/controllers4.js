var dogfourApp = angular.module("dogfourApp", [])

dogfourApp.constant("config", {
    apiKey: "5b2fb8d50c346a20d90a5e05",
    restdbio: "https://awatodogs-5351.restdb.io/rest/dogs"
    dbName: "awatodogs-5351",
    collectionName: "dogs"
});

dogfourApp.controller("dogfourAppController", function($scope, $http) {

 //Now load the data from server
 getDogs();

 function getDogs() {
  $http({
   async: true,
   crossDomain: true,
   url: "https://awatodogs-5351.restdb.io/rest/dogs",
   method: "GET",
   headers: {
    "content-type": "application/json",
    "x-apikey": "5b2fb8d50c346a20d90a5e05",
    "cache-control": "no-cache"
   }
  }).then(function successCallback(response) {
   //response is the json data
   $scope.dogdb = response;
   console.log(response);
  }, function errorCallback(response) {
   console.log(response.statusText);
  });
 }
/* restDB.io generated jQuery
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://awatodogs-5351.restdb.io/rest/dogs",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5b2fb8d50c346a20d90a5e05",
    "cache-control": "no-cache"
  }
}
$.ajax(settings).done(function (response) {
  $scope.dogdb = response;
  console.log(response);
});
/* */

});
