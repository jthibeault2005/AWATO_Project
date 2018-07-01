"use strict";
var hDogs = angular.module("hDogs", []);

hDogs.constant("config", {
    apiKey: "5b2fb8d50c346a20d90a5e05",
    dbName: "awatodogs-5351",
    collectionName: "dogs"
});

hDogs.controller("hDogsController", ["$scope", "hDogs", function($scope, hDogs) {
 $scope.get = function(){
  hDogs.get().then(function(response) {
   $scope.hDogs = response;
   console.log('Retrieving Success:', response);
  }, function(response){
   console.log('Retrieving Failure:', response);
  });
 } 
 $scope.new = function(){
  $scope.hDog = document.getElementById("hDog").files[0];
  if($scope.hDog && $scope.hDogName){
   hDogs.new($scope.hDog, $scope.hDogName).then(function(response) {
    console.log('Creation Success:', response);
    $scope.get(true);
    $scope.hDog = null;
    document.getElementById('hDog').value = null;
    $scope.hDogName = null;
   }, function(response){
    console.log('Creation Failure:', response);
   });
  }
 }
 $scope.delete = function(hDog){
  hDogs.delete(hDog).then(function(response) {
   console.log('Deletion Success:', response);
   $scope.get(true);
  }, function(response){
   console.log('Deletion Failure:', response);
  });
 }
 $scope.rename = function(hDogId, newName){
  hDogs.rename(hDogId, newName).then(function(response) {
   console.log('Rename Success:', response);
   $scope.get(true);
  }, function(response){
   console.log('Rename Failure:', response);
  });
 }
 $scope.get(false);
}]);

hDogs.factory("hDogs", ["$http", "$q", "config", function($http, $q, config) {
 function hDogs(){
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
       var imageId = response.data[b].Dog[i];
       response.data[b].Dog[i] = {
        imageId: imageId,
        thumb: self.getDogUrl(imageId, 't'),
        web: self.getDogUrl(imageId, 'w'),
        full: self.getDogUrl(imageId, '')
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
  
  self.new = function(hDog, hDogName){ 
   var deferred = $q.defer();  
   var formData = new FormData();
   formData.append('Dog', hDog, hDog.name); 
   var mediaApi = {
    "url": self.mediaUrl,
    "method": "POST",
    "headers": {
     "content-type": undefined,
     "x-apikey": self.apiKey   
    },
    "processData": false,
    "data": formData
   }
   $http(mediaApi).then(function(response){
    var api = {
     "url": self.apiUrl + "?sort=_createdby",
     "method": "POST",
     "headers": {
      "content-type": "application/json",
      "x-apikey": self.apiKey
     },
     "processData": false,
     "data": { 
      "Name": hDogName,
      "Dog": [ response.data.ids[0] ]
     }
    }
    $http(api).then(function(response){
     deferred.resolve(response.data);
    }, function(response){
     deferred.reject(response);
    });
   }, function(response){
    deferred.reject(response);
   });
   return deferred.promise;
  }
  
  self.delete = function(beauty){ 
   var deferred = $q.defer();
   var mediaApi = {
    "url": self.mediaUrl + "/" + beauty.Dog[0].imageId,
    "method": "DELETE",
    "headers": {
     "content-type": "application/json",
     "x-apikey": self.apiKey   
    }
   } 
   $http(mediaApi).then(function(response){
    var api = {
     "url": self.apiUrl + "/" + beauty._id,
     "method": "DELETE",
     "headers": {
      "content-type": "application/json",
      "x-apikey": self.apiKey
     },
     "processData": false
    }
    $http(api).then(function(response){
     deferred.resolve(response);
    }, function(response){
     deferred.reject(response);
    });
   }, function(response){
    deferred.reject(response);
   });
   return deferred.promise;
  }
  
  self.rename = function(hDogId, newName){ 
   var deferred = $q.defer();
   var api = {
    "url": self.apiUrl + "/" + hDogId,
    "method": "PUT",
    "headers": {
     "content-type": "application/json",
     "x-apikey": self.apiKey
    },
    "processData": false,
    "data": { 
     "Name": newName
    }
   } 
   $http(api).then(function(response){
    deferred.resolve(response);
   }, function(response){
    deferred.reject(response);
   });
   return deferred.promise;
  }
  
  self.getDogUrl = function(imageId, size){
   return self.mediaUrl + '/' + imageId + '?s=' + size;
  }
 }
    return new hDogs();
}]);
