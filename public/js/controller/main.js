// js/controllers/main.js
    
angular.module('poiController', ['leaflet-directive'])
    .controller('mainController', function($scope, $http) {
        $scope.formDataPOI = {};
var center = {
								lat: 40.095,
								lng: -3.823,
								zoom: 4
							}
							$scope.center = center;
         /* Liste des pois */
        $http.get('/api/pois')
                .success(function(data) {
                        $scope.pois = data;
						var markers = [];
						for(var i=0;i<$scope.pois.length;i++){
							var marker = { 
								lat:$scope.pois[i].lat,lng:$scope.pois[i].lng,
								message:$scope.pois[i].nom,
								focus:true,
								draggable:false
							};
							markers.push(marker);
						}
						
						console.log(markers);
						angular.extend($scope, {
							center: center,
							defaults: {
								scrollWheelZoom: false
							},
							markers:markers
						});
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        /* Creation d'un poi */
        $scope.createPOI = function() {
                $http.post('/api/pois', $scope.formDataPOI)
                        .success(function(data) {
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
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

    })
	.controller("SimpleMapController", [ '$scope', function($scope, $http) {
	 /* $http.get('/api/pois')
                .success(function(data) {
						var markers = [];
						console.log($scope.pois)
						for(var i=0;i<$scope.pois.length;i++){
                        
						markers.push(marker);
						}
						console.log(markers)
						
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                }); */
    
}]);