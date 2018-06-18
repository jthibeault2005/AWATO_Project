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
