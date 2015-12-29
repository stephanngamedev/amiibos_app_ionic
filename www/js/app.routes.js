(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function config( $stateProvider, $urlRouterProvider ) {
		$stateProvider
			.state('amiibos', {
				url: '/amiibos',
				templateUrl: 'js/amiibos/amiibos.html',
				controller: 'AmiibosController',
				controllerAs: 'vm'
			})
			
			.state('amiibo', {
				url: '/amiibo/:id',
				templateUrl: 'js/amiibo/amiibo.html',
				controller: 'AmiiboController',
				controllerAs: 'vm'
			});

		$urlRouterProvider.otherwise('/amiibos');
	}
})();