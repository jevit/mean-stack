// js/services/pois.js
angular.module('poiService', [])

    .factory('pois', function($http) {
        return {
            get : function() {
                return $http.get('/api/pois');
            },
            create : function(poiData) {
                return $http.post('/api/pois', poiData);
            },
            delete : function(id) {
                return $http.delete('/api/pois/' + id);
            }
        }
    });