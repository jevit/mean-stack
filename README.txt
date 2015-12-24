NODE.JS
package.json // contient toutes les dépendances
COMMANDE: npm install -g nodemon // recupere 'npm install'
le main correspond au fichier principal du server
lancement du serveur: npm start  ou nodemon server.js
nodemon pour le redemraage a chaque modification de fichiers

MONGODB
executer mongod.exe
Utiliser/créer BD: use DB_NAME
Vérifier la BD courante: db
liste des bds: show dbs
créer un doc:todo={text:"todo"}   db.DB_NAME.insert(todo)   db.DB_NAME.find()

ARCHITECTURE
node_module : module du serveur
public : fichiers transferé au client

VERSION
0.10: 
 Squelette
 Modification du squelette et intégration de leaflet
 Affiche, ajoute, et supprime un points d'interets, afficher via leaftlet
 bootstrap pour le style
0.11: 
 ETL: projet parallele prototype pour importer des données ( gpx, web sémantique) via rest
 Decoupage des controllers, views, routes et ng-view
 intégration highchart <-
 découpage des services, ajout directives, filters.
 modifier des pois,liés les stats au pois, créer des parcours
0.12: 
 Gestion des sessions utilisateurs 
 Modifier les documents pour prendre en compte des parcours
--
0.130: guidestyle angular
--
0.170: Tests angular
--
0.190: Intégration continue 
--
0.200: Nouvelles fonctionnalité : import données, création parcours
--
0.300: Algorithme ( pathfinding,..)
--
...


REFERENCE: 
https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
http://getbootstrap.com/
http://mongoosejs.com/docs/models.html
https://docs.angularjs.org/api
http://tombatossals.github.io/angular-leaflet-directive/