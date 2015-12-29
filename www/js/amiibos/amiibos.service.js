(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.factory('AmiibosFactory', AmiibosFactory);

	AmiibosFactory.$inject = ['$resource'];

	function AmiibosFactory( $resource ) { 
		return $resource('http://localhost:3000/amiibos/:id');
	};
})();
