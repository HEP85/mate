var appControllers = angular.module('appControllers', []);

appControllers.controller('UserListCtrl', ['$scope', '$location', 'User',
  function UserListCtrl($scope, $location, User) {
  $scope.$location = $location; // DEBUG??
  $scope.users = User.query();
}]);
