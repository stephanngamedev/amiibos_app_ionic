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
			
			.state('amiiboDetails', {
				url: '/amiibos/:id',
				templateUrl: 'js/amiibo-details/amiibo-details.html',
				controller: 'AmiiboDetailsController',
				controllerAs: 'vm'
			})

			.state('series', {
				url: '/series',
				templateUrl: 'js/series/series.html',
				controller: 'SeriesController',
				controllerAs: 'vm'
			})

			.state('seriesDetails', {
				url: '/series/:id',
				templateUrl: 'js/series-details/series-details.html',
				controller: 'SeriesDetailsController',
				controllerAs: 'vm'
			})

			.state('companies', {
				url: '/companies',
				templateUrl: 'js/companies/companies.html',
				controller: 'CompaniesController',
				controllerAs: 'vm'
			})

			.state('companyDetails', {
				url: '/companies/:id',
				templateUrl: 'js/company-details/company-details.html',
				controller: 'CompanyDetailsController',
				controllerAs: 'vm'
			});

		$urlRouterProvider.otherwise('/amiibos');
	}
})();