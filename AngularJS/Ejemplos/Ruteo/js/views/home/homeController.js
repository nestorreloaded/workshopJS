'use strict';

angular
  .module('routing')
  .controller('homeController', Controller);

function Controller($scope,$location) {

$scope.volver = function() {
  $location.path('/login');
}

}
