(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('SeriesFactory', SeriesFactory);

	SeriesFactory.$inject = ['$resource'];

	function SeriesFactory( $resource ) { 
		return $resource('http://192.168.0.3:3000/series/:id');
	};
})();
