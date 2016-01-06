(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('AmiibosFactory', AmiibosFactory);

	AmiibosFactory.$inject = ['$resource', 'apiHost' ];

	function AmiibosFactory( $resource, apiHost ) { 
		return $resource( apiHost + '/amiibos/:id' );
	};
})();
