(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.config(config);

	config.$inject = ['localStorageServiceProvider'];
	
	function config( localStorageServiceProvider ) {
		localStorageServiceProvider
			.setPrefix('amiibosCollection')
			.setNotify(true, true);
	}
})();