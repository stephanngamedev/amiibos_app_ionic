(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('AmiiboController', AmiiboController);

	AmiiboController.$inject = ['AmiibosFactory', '$stateParams'];

	function AmiiboController( AmiibosFactory, $stateParams ) { 
		var vm = this;
		vm.amiibos = [];
		
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
