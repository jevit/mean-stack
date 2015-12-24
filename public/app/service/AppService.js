var appService = angular.module('appService', []);

/**
* Indique la version 
*/
appService.value('version', '0.11');

/**
* Pour injecter le debut de l'url rest dans l'adresse
*/
appService.constant("restUrl", "rest/");

appService.factory("RestConfiguration", function(restUrl) {
	var Rest = function() {};
	Rest.url = restUrl;
	return Rest;
});