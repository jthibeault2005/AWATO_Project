angular.module('DogApp', [])
   .controller('DogController', function($scope) {
       $scope.dogs = "Hello Dogs";
       $scope.dog = function() {
           this.breed = "shitzoo";
           this.description = "";
           this.size = "";
           this.lifespan = "";
           return this;
       }
       $scope.dogdb = function() {
           return $.ajax(settings).done(function (response) {
           console.log(response);
           });
       }
});

/* GET all documents from the dogs collection */
/* restDB.io generated jQuery */
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
