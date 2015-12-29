(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.config(config);

	config.$inject = ['$routeProvider'];
	
	function config( $routeProvider ) {
		$routeProvider
			.when('/amiibos', {
				templateUrl: 'js/amiibos/amiibos.html',
				controller: 'AmiibosController',
				controllerAs: 'vm'
			});

		$routeProvider
			.when('/amiibo/:id', {
				templateUrl: 'js/amiibo/amiibo.html',
				controller: 'AmiiboController',
				controllerAs: 'vm'
			});

		$routeProvider
			.otherwise({ redirectTo: 'amiibos' });
	}
})();