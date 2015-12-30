(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('SeriesFactory', SeriesFactory);

	SeriesFactory.$inject = ['$resource'];

	function SeriesFactory( $resource ) { 
		return $resource('http://localhost:3000/series/:id');
	};
})();
