// js/controllers/main.js
    
angular.module('poiController', [])
    .controller('mainController', function($scope, $http) {
        $scope.formDataPOI = {};

         /* Liste des pois */
        $http.get('/api/pois')
                .success(function(data) {
                        $scope.pois = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        /* Creation d'un poi */
        $scope.createPOI = function() {
                $http.post('/api/pois', $scope.formDataPOI)
                        .success(function(data) {
				console.log( $scope.formDataPOI)
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

    });