(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('AmiibosController', AmiibosController);

	AmiibosController.$inject = ['AmiibosFactory', '$state', 'localStorageService'];

	function AmiibosController( AmiibosFactory, $state, localStorageService ) { 
		var vm = this;
		vm.amiibos = [];
		vm.searchField = '';
		vm.orderByField = '-release_date';
		vm.checkmark = checkmark;
		vm.goToDetails = goToDetails;
		vm.collection = localStorageService;
		
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

		function goToDetails( amiibo ) {
			$state.go('amiiboDetails', {id: amiibo.id})
		}
		function checkmark( amiibo ) {
			localStorageService.set( amiibo.id, !localStorageService.get(amiibo.id));
		};
	};
})();
