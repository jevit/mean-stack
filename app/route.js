var POI = require('./model/poi');

module.exports = function(app) {
	// Liste de POIs
	app.get('/api/pois', function(req, res) {
        POI.find(function(err, POIs) {
            if (err){ res.send(err); }
            res.json(POIs); 
        });
	});
	
	// Création d'un POI
	app.post('/api/pois', function(req, res) {
        POI.create({
            nom : req.body.nom,
			lat: req.body.lat,
			lng: req.body.lng,
            done : false
        }, function(err, poi) {
            if (err){ res.send(err); }
            POI.find(function(err, pois) {
                if (err){ res.send(err); }
                res.json(pois);
            });
        });

    });

    // Suppression d'un POI
	app.delete('/api/pois/:poi_id', function(req, res) {
        POI.remove({
            _id : req.params.poi_id
        }, function(err, pois) {
            if (err){ res.send(err); }
            POI.find(function(err, pois) {
                if (err){ res.send(err); }
                res.json(pois);
            });
        });
    });
	
	// Affiche la page d'accueil
	app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); 
	});

};
