(function() {
	'use strict';

	angular
		.module('amiibosApp')
		.controller('SeriesDetailsController', SeriesDetailsController);

	SeriesDetailsController.$inject = ['SeriesFactory', '$stateParams'];

	function SeriesDetailsController( SeriesFactory, $stateParams ) { 
		var vm = this;
		vm.series = {};
		
		getSeries( $stateParams.id );

		function getSeries( seriesId ) {
			SeriesFactory.get( {id: seriesId },
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
