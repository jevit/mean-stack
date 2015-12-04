appPOI.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/map', {controller:'MapController', templateUrl:'view/poi.html'});
    /* when('/edit/:projectId', {controller:'EditCtrl', templateUrl:'detail.html'}).
    when('/new', {controller:'CreateCtrl', templateUrl:'detail.html'}). */
   
}]);

appPOI.controller('Section1Controllers', function($scope) {
	$scope.message = 'Section 1';
});

appPOI.controller('Section2Controllers', function($scope) {
	$scope.message = 'Section 2';
});
