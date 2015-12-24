appPOI.service('mapService', function() {
	/* Liste de points */
	this.buildMarkers = function (response){
		var markers = [];
		for(var i = 0; i < response.data.length; i++){
			var marker = { 
				lat		 : response.data[i].lat, 
				lng		 : response.data[i].lng,
				message	 : response.data[i].nom,
				focus	 : false,
				draggable: false
			};
			markers.push(marker);
		};
		return markers;
	};
	/* Construit un tracé */
	this.buildPaths = function (markers, weight, color){
		var paths = {
			p1: {
				color: color,
				weight: weight,
				latlngs: markers,
			}
		};
		return paths;
	};
	/* centre de la carte */
	this.buildCenter = function(lat,lng,zoom){
		var center = {
			lat: lat,
			lng: lng,
			zoom: zoom
		};
		return center;
	};
});