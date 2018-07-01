"use strict";
var hDogs = angular.module("hDogs", []);

hDogs.constant("config", {
    apiKey: "5b2fb8d50c346a20d90a5e05",
    dbName: "awatodogs-5351",
    collectionName: "dogs"
});

hDogs.controller("hDogsController", ["$scope", "hDogs", function($scope, hDogs) {
 $scope.get = function(){
console.log('controller start');
  hDogs.get().then(function(response) {
   $scope.hDogs = response;
   console.log('Retrieving Success:', response);
  }, function(response){
   console.log('Retrieving Failure:', response);
  });
 } 
}]);

hDogs.factory("hDogs", ["$http", "$q", "config", function($http, $q, config) {
 function hDogs(){
 console.log('factory start');
  var self = this;  
  self.apiKey = config.apiKey;
  self.apiUrl = "https://" + config.dbName + ".restdb.io/rest/" + config.collectionName;
  self.mediaUrl = "https://" + config.dbName + ".restdb.io/media";
  self.hDogs = null;
  self.get = function(update) {   
   var deferred = $q.defer();   
   if(self.hDogs !== null && update === false) {
    deferred.resolve(self.hDogs);    
   } else { 
    var api = {
     "url": self.apiUrl + "?sort=_createdby",
     "method": "GET",
     "headers": {
      "content-type": "application/json",
      "x-apikey": self.apiKey
     },
     "processData": false
    } 
    $http(api).then(function(response){
     for(var b = 0; b < response.data.length; b++){
      for(var i = 0; i < response.data[b].Dog.length; i++){      
       var dogId = response.data[b].Dog[i];
       response.data[b].Dog[i] = {
        dogId: dogId,
        thumb: self.getDogUrl(dogId, 't'),
        web: self.getDogUrl(dogId, 'w'),
        full: self.getDogUrl(dogId, '')
       }
      }
     }
     self.hDogs = response.data;
     deferred.resolve(self.hDogs);
    }, function(response){
     deferred.reject(response);
    });
   }
   return deferred.promise;
  };
  
  self.getDogUrl = function(dogId, size){
   return self.mediaUrl + '/' + dogId + '?s=' + size;
  }
 }
 return new hDogs();
}]);
