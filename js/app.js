
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html'
      }).
      when('/books', {
        templateUrl: 'templates/books.html'
      }).
      when('/info', {
      	templateUrl: 'templates/info.html'
      }).
      when('/about-us', {
      	templateUrl: 'templates/about-us.html'
      }).
      when('/press', {
        templateUrl: 'templates/press.html'
      }).
      when('/e-shop', {
        templateUrl: 'templates/e-shop.html'
      }).
      when('/contact', {
        templateUrl: 'templates/contact.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

