(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('AmiibosController', AmiibosController);

	AmiibosController.$inject = ['AmiibosFactory'];

	function AmiibosController( AmiibosFactory ) { 
		var vm = this;
		vm.amiibos = [];
		vm.searchField = '';
		vm.orderByField = '-release_date';

		getAmiibos();

		function getAmiibos() {
			AmiibosFactory.query(
				getAmiibosCompleted,
				getAmiibosFailed
			);

			function getAmiibosCompleted( response ) {
				vm.amiibos = response;
				return vm.amiibos;
			};

			function getAmiibosFailed( error ) {
				console.log( error );
			};
		};
	};
})();
