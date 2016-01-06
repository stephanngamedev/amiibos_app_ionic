(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('CompaniesFactory', CompaniesFactory);

	CompaniesFactory.$inject = ['$resource', 'apiHost' ];

	function CompaniesFactory( $resource, apiHost ) { 
		return $resource( apiHost + '/companies/:id' );
	};
})();
