
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
      when('/about-us', {
      	templateUrl: 'templates/about-us.html'
      }).
      when('/contact', {
      	templateUrl: 'templates/contact.html'
      }).
      when('/press', {
        templateUrl: 'templates/press.html'
      }).
      when('/e-shop', {
        templateUrl: 'templates/e-shop.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

