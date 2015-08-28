var authModule = angular.module('authModule', [
                                                	'ngRoute',
	                                                'ngAnimate'
									  ]).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/', {
								templateUrl: 'login/login.tml.html', 
								controller: 'loginCtrl'});
		$routeProvider.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});

	}]);
