# SolMiner
## Les installation et les configuration BackEnd:
  Initialiser les deux repertoires Serveur et Client en saisissant cette commande

   ```
    npm init
   ```

  Dans chaque microservice FournitureLocale/FournitureAtlas/Volontaire:
  
     - Executer 
     
              ```
                npm init
              ```
             
     - Executer
     
              ```
                npm install body-parser express express-list-endpoints mongoose nodemon officegen dotenv --save
              ```
              
     - Allez au fichier package.json 
     
     - Effacer le contenu de script 
     
     - Remplacer le par "start": "nodemon app.js"
     
     
## Lancer le serveur BackEnd:
   -Executer 
   
              ```
               npm start
              ```
     
