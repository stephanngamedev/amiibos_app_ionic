(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('CompaniesFactory', CompaniesFactory);

	CompaniesFactory.$inject = ['$resource'];

	function CompaniesFactory( $resource ) { 
		return $resource('http://localhost:3000/companies/:id');
	};
})();
