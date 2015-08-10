
var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('AnalyticsController', ['$scope', function ($scope) {

  $scope.$on('$viewContentLoaded', function(event) {
    var location = window.location.hash.split('#')[1];
    window.ga('send', 'pageview', { page: location });
  });
}]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html'
      }).
      when('/books', {
        templateUrl: 'templates/book-category.html'
      }).
      when('/storybooks', {
        templateUrl: 'templates/storybooks.html'
      }).
      when('/textbooks', {
        templateUrl: 'templates/textbooks.html'
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

