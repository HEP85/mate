var mateApp = angular.module('mateApp', []);

mateApp.controller('UserListCtrl', function UserListCtrl($scope) {
  $scope.users = [
    {'name': 'Count Zero',
     'avatar': 'img/default_avatar.png'},
    {'name': 'doc',
     'avatar': 'img/default_avatar.png'},
    {'name': 'G-Baer',
     'avatar': 'img/default_avatar.png'},
    {'name': 'h1rich',
     'avatar': 'img/default_avatar.png'},
    {'name': 'Hal_9000',
     'avatar': 'img/default_avatar.png'},
    {'name': 'HEP',
     'avatar': 'img/default_avatar.png'},
    {'name': 'Jan',
     'avatar': 'img/default_avatar.png'},
    {'name': 'vileda',
     'avatar': 'img/default_avatar.png'}
  ];
});

