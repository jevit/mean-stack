// js/controllers/mapController.js
var app = angular.module('poiController', []);
 app.controller("SimpleMapController", [ '$scope', function($scope) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
});