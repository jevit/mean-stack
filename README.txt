NODE.JS
package.json // contient toutes les d�pendances
COMMANDE: npm install -g nodemon // recupere 'npm install'
le main correspond au fichier principal du server
lancement du serveur: npm start  ou nodemon server.js
nodemon pour le redemraage a chaque modification de fichiers

MONGODB
executer mongod.exe
Utiliser/cr�er BD: use DB_NAME
V�rifier la BD courante: db
liste des bds: show dbs
cr�er un doc:todo={text:"todo"}   db.DB_NAME.insert(todo)   db.DB_NAME.find()

ARCHITECTURE
node_module : module du serveur
public : fichiers transfer� au client

VERSION
0.10: 
 Squelette
 Modification du squelette et int�gration de leaflet
 Affiche, ajoute, et supprime un points d'interets, afficher via leaftlet
 bootstrap pour le style
0.11: 
 ETL: projet parallele prototype pour importer des donn�es ( gpx, web s�mantique) via rest
 Decoupage des controllers, views, routes et ng-view
 int�gration highchart <-
 d�coupage des services, ajout directives, filters.
 modifier des pois,li�s les stats au pois, cr�er des parcours
0.12: 
 Gestion des sessions utilisateurs 
 Modifier les documents pour prendre en compte des parcours
--
0.130: guidestyle angular
--
0.170: Tests angular
--
0.190: Int�gration continue 
--
0.200: Nouvelles fonctionnalit� : import donn�es, cr�ation parcours
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