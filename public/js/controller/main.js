// js/controllers/main.js
    
angular.module('poiController', [])
    .controller('mainController', function($scope, $http) {
        $scope.formData = {};

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
                $http.post('/api/pois', $scope.poi)
                        .success(function(data) {
                                $scope.formData = {}; // clear the form so our user is ready to enter another
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