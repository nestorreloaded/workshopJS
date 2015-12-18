'use strict';

angular
  .module('routing')
  .controller('loginController', Controller);

function Controller($scope,$location) {
  $scope.usuario = '';

  $scope.password = '';


  $scope.login = function() {
    $location.path('/home');
  }
}
