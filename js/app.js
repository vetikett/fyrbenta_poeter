
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

