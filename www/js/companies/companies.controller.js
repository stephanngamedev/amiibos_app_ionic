(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('CompaniesController', CompaniesController);

	CompaniesController.$inject = ['CompaniesFactory'];

	function CompaniesController( CompaniesFactory ) { 
		var vm = this;
		vm.companies = [];

		getCompanies();

		function getCompanies() {
			CompaniesFactory.query(
				getCompaniesCompleted,
				getCompaniesFailed
			);

			function getCompaniesCompleted( response ) {
				vm.companies = response;
				return vm.companies;
			};

			function getCompaniesFailed( error ) {
				console.log( error );
			};
		};
	};
})();
