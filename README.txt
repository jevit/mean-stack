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
public : fichiers transferer au client


Reference : 
https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular