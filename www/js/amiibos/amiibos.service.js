(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('AmiibosFactory', AmiibosFactory);

	AmiibosFactory.$inject = ['$resource'];

	function AmiibosFactory( $resource ) { 
		return $resource('http://192.168.0.3:3000/amiibos/:id');
	};
})();
