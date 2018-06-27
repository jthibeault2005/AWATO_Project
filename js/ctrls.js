angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope) {
       $scope.greeting = "Hello World";
});

angular.module('HelloUserApp', [])
   .controller('HelloUserController', function($scope) {
       $scope.NameChange = function () {
          $scope.greeting = "Hello " + $scope.name;
       };
});

/* Angular and REST */
/* My Attempt */
var app = angular.module('dogRestDBApp', ['ngResource']);
/* Connect to the RestDB */
app.factory("dogs", function($resource) {
    return $resource("https://awatodogs-5351.restdb.io/rest/dogs");
});
/* Get information */
app.controller("DogsCtrl", function($scope, dogs) {
    dogs.query(function(data) {
        $scope.dogs = data;
    }, function(err) {
        console.error("Error occured: ", err);
    });
});

/* GET all documents from the dogs collection */
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
  console.log(response);
});
*/
/* POST a new document to the dogs collection */
/* Used to add a new dog to collection
    May want to use root api-key
var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://awatodogs-5351.restdb.io/rest/dogs",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}
$.ajax(settings).done(function (response) {
  console.log(response);
});
*/
