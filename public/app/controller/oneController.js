// js/controllers/main.js
    
angular.module('poiController', ['leaflet-directive'])
.controller('mainController', function($scope, $http) {
        $scope.formDataPOI = {};
		$scope.paths = {};
		$scope.center = {};
        $scope.pois = {};
		$scope.markers = [];
		$scope.defaults = {
			scrollWheelZoom: false
		};
         /* Liste des pois */
        $http.get('/api/pois')
                .success(function(data) {
				 $scope.pois = data;
					var paths = {
						p1: {
							color: '#008000',
							weight: 8,
							latlngs: [
								{ lat: 51.50, lng: -0.082 },
								{ lat: 48.83, lng: 2.37 },
								{ lat: 41.91, lng: 12.48 }
							],
						}
					};
					var center = {
						lat: 45.095,
						lng: 6.823,
						zoom: 5
					};
					var markers = [];
					for(var i = 0; i < $scope.pois.length; i++){
						var marker = { 
							lat		 : $scope.pois[i].lat, 
							lng		 : $scope.pois[i].lng,
							message	 : $scope.pois[i].nom,
							focus	 : false,
							draggable: false
						};
						markers.push(marker);
					};
					$scope.pois = data;
					$scope.paths = paths;
					$scope.center = center;
					$scope.markers = markers;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        /* Creation d'un poi */
        $scope.createPOI = function() {
                $http.post('/api/pois', $scope.formDataPOI)
                        .success(function(data) {
							var markers = [];
							for(var i = 0; i < data.length; i++){
								var marker = { 
									lat		 : data[i].lat, 
									lng		 : data[i].lng,
									message	 : data[i].nom,
									focus	 : false,
									draggable: false
								};
								markers.push(marker);
							};
								$scope.markers = markers;
                                $scope.formDataPOI = {}; // clean le formulaire
                                $scope.pois = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

        /* Supprime un poi */
        $scope.deletePOI = function(id) {
			$http.delete('/api/pois/' + id)
					.success(function(data) {
							$scope.pois = data;
							
								$scope.markers = markers;
					})
					.error(function(data) {
							console.log('Error: ' + data);
					});
        };
	
    });
	