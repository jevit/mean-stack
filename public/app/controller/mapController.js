appPOI.controller('MapController', function($scope, $http,poiService,mapService) {
	$scope.formDataPOI = {};
	$scope.paths = {};
	$scope.center = {};
	$scope.pois = {};
	$scope.markers = [];
	$scope.defaults = {
		scrollWheelZoom: false
	};
	 /* Liste des pois */
	poiService.get(function(response) {
			var markers = mapService.buildMarkers(response);
			var paths = mapService.buildPaths(markers, 3, '#008000');
			var center = mapService.buildCenter( 45.095,6.823, 4);
			$scope.pois = response.data;
			$scope.paths = paths;
			$scope.center = center;
			$scope.markers = markers;
		},function(response) {
				console.log('Error: ' + response.data);
		});

	/* Creation d'un poi */
	$scope.createPOI = function() {
		poiService.create( $scope.formDataPOI, function(response) {
				$scope.markers = mapService.buildMarkers(response);
				$scope.paths = mapService.buildPaths(markers, 3, '#008000');
				$scope.formDataPOI = {}; // clean le formulaire
				$scope.pois = response.data;
			},function(response) {
				console.log('Error: ' + response.data);
			});
	};

	/* Supprime un poi */
	$scope.deletePOI = function(id) {
		poiService.delet(id,function(response) {
				var markers = mapService.buildMarkers(response);
				$scope.paths = mapService.buildPaths(markers, 3, '#008000');
				$scope.pois = response.data;
				$scope.markers = markers;
			},function(response) {
				console.log('Error: ' + response.data);
			});
	};
	
});