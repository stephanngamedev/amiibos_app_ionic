(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('CompanyDetailsController', CompanyDetailsController);

	CompanyDetailsController.$inject = ['CompaniesFactory', '$stateParams'];

	function CompanyDetailsController( CompaniesFactory, $stateParams ) { 
		var vm = this;
		vm.company = {};

		getCompany( $stateParams.id );

		function getCompany( companyId ) {
			CompaniesFactory.get( {id: companyId },
				getCompanyCompleted,
				getCompanyFailed
			);

			function getCompanyCompleted( response ) {
				vm.company = response;
				return vm.company;
			};

			function getCompanyFailed( error ) {
				console.log( error );
			};
		};
	};
})();
