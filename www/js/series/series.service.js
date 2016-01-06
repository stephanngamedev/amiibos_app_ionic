(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('SeriesFactory', SeriesFactory);

	SeriesFactory.$inject = ['$resource', 'apiHost' ];

	function SeriesFactory( $resource, apiHost ) { 
		return $resource( apiHost + '/series/:id' );
	};
})();
