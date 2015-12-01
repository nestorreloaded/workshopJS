angular.module('controladores',[]).controller('MiPrimerController', function($scope) {


  $scope.fecha = new Date();

  $scope.valor1 = 123;

  $scope.valor2 = ['123','456','789'];

  $scope.resultado = '';

  $scope.concatenar = function() {
    $scope.resultado = $scope.fecha + '\n'+ $scope.valor1;

  };
});
