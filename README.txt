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

0.1: Squelette à partir de l'article scotch.io
0.2: Modification du squelette avec des points d'interets
0.3: Ajout de fonctionnalités

Reference : 
https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
http://getbootstrap.com/
http://mongoosejs.com/docs/models.html
https://docs.angularjs.org/api