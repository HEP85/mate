var app = angular.module('app', [
  'ngRoute',
  'appControllers',
  'appServices'
]);

app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/users', {
        templateUrl: '/partials/users.html', 
        controller: 'UserListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
