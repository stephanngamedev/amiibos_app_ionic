(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('CompaniesFactory', CompaniesFactory);

	CompaniesFactory.$inject = ['$resource'];

	function CompaniesFactory( $resource ) { 
		return $resource('http://192.168.0.3:3000/companies/:id');
	};
})();
