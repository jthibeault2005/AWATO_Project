mydogApp = angular.module('mydogApp', []);

hDogs.constant("config", {
    apiKey: "5b2fb8d50c346a20d90a5e05",
    restdbio: "https://awatodogs-5351.restdb.io/rest/dogs"
    dbName: "awatodogs-5351",
    collectionName: "dogs"
});

mydogApp.controller("mydogAppController", "$http", "$q", "config", ["$scope", "mydogApp", function($scope, $http, $q, config, mydogApp){
 apikey = config.apikey;
 httpdb = config.restdbio;

 var def = $q.defer();
 $scope.doggys = $http({
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
