// js/services/pois.js
var poiService = angular.module('poiServiceModule', [])
poiService.constant("subUrlPOI", "/api/pois");
poiService.factory('poiService', function($http,subUrlPOI) {
        return {
            get : function(successCallback , errorCallback) {
                return $http.get(subUrlPOI).then( successCallback , errorCallback);
            },
            create : function(poiData, successCallback, errorCallback) {
                return $http.post(subUrlPOI, poiData).then( successCallback , errorCallback);
            },
            delet : function(id,successCallback , errorCallback) {
                return $http.delete(subUrlPOI+'/' + id).then( successCallback , errorCallback);
            }
        }
		
    });