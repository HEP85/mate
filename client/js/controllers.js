var appControllers = angular.module('appControllers', []);

appControllers.controller('UserListCtrl', ['$scope', '$http', '$location',
  function UserListCtrl($scope, $http, $location) {
  $scope.$location = $location; // DEBUG??
  $http.get('/api/users').
    success(function(data) {
      $scope.users = data.users;
    });
}]);
