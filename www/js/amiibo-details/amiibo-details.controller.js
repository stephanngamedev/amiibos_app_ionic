(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('AmiiboDetailsController', AmiiboDetailsController);

	AmiiboDetailsController.$inject = ['AmiibosFactory', '$stateParams'];

	function AmiiboDetailsController( AmiibosFactory, $stateParams ) { 
		var vm = this;
		vm.amiibo = {};
		
		getAmiibo( $stateParams.id );

		function getAmiibo( amiiboId ) {
			AmiibosFactory.get( {id: amiiboId },
				getAmiiboCompleted,
				getAmiiboFailed
			);

			function getAmiiboCompleted( response ) {
				vm.amiibo = response;
				return vm.amiibo;
			};

			function getAmiiboFailed( error ) {
				console.log( error );
			};
		};
	};
})();
