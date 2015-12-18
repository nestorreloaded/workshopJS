//Definimos la aplicacion AngularJS y configuramos ruteo
angular.module('routing',['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/home', {
					controller: 'homeController',
					templateUrl: 'js/views/home/home.html'
				}).when('/login', {
          controller: 'loginController',
          templateUrl: 'js/views/login/login.html'
        }).otherwise({
					redirectTo: '/login'
				});

});
