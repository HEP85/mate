var appServices = angular.module('appServices', ['ngResource']);
 
appServices.factory('User', ['$resource',
  function($resource) {
    return $resource('api/users', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }
]);