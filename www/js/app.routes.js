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
			})

			.state('series', {
				url: '/series',
				templateUrl: 'js/series/series.html',
				controller: 'SeriesController',
				controllerAs: 'vm'
			})

			.state('single_series', {
				url: '/series/:id',
				templateUrl: 'js/single-series/single-series.html',
				controller: 'SingleSeriesController',
				controllerAs: 'vm'
			});

		$urlRouterProvider.otherwise('/amiibos');
	}
})();