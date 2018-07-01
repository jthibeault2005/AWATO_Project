mydogApp = angular.module('mydogApp', []);

hDogs.constant("config", {
    apiKey: "5b2fb8d50c346a20d90a5e05",
    restdbio: "https://awatodogs-5351.restdb.io/rest/dogs"
    dbName: "awatodogs-5351",
    collectionName: "dogs"
});

mydogApp.controller("mydogAppController", ["$scope", "mydogApp", function($scope, mydogApp){

}]);

mydogApp.factory("mydogApp", ["$http", "$q", "config", function($http, config) {
 apikey = config.apikey;
 httpdb = config.restdbio;

 var def = $q.defer();
 $http({
  async: true,
  crossDomain: true,
  url: httpdb,
  method: "GET",
  headers: {
   "content-type": "application/json",
   "x-apikey": apikey,
   "cache-control": "no-cache"
  }
 }).then(function successCallback(response) {
  def.resolve(response.data);
 }, function errorCallback(response) {
  console.log("Error " + response.data);
 });
}]);

