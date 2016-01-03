(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('SeriesController', SeriesController);

	SeriesController.$inject = ['SeriesFactory'];

	function SeriesController( SeriesFactory ) { 
		var vm = this;
		vm.series = [];
		
		getSeries();

		function getSeries() {
			SeriesFactory.query(
				getSeriesCompleted,
				getSeriesFailed
			);

			function getSeriesCompleted( response ) {
				vm.series = response;
				return vm.series;
			};

			function getSeriesFailed( error ) {
				console.log( error );
			};
		};
	};
})();
