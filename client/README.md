Installation sur votre PC: (Vous devez disposé de Nodejs, si c'est pas le cas installez le d'abord )
 <br> 1.Télechargez le contenu de ce repository dans un dossier vide, appelons-le "Test"
  <br>2.Dans le terminal, accéder a l'intérieur du dossier "Test" ( ou il y a package.json ) 
  <br>3.Tapez dans le terminal : "npm install"
  <br>4.Tapez dans le terminal : "npm run serve"
  <br>5.Ouvrez votre browser est allez vers l'adresse indiqué dans le terminal ( probablment localhost:8080 )
 
 
 
 <br> Presentation de la structure:( Vous pouvez ouvrir utilisez VsCode ou SublimeText pour ouvrir et modifier le projet )
  <br>1.Ouvrez le dossier "Test"
  <br>2.Allez dans le dossier "src"
 <br> 3.vous trouverez de nombreux dossiers et fichiers : 
   <br>  le fichier "main.js": pour dire que "app.vue" est le composant Root (principal)
              <br>  "app.vue": le composant Root (principal)
   <br>  Les autres fichiers pour différentes config 
    
  <br>  Dans le dossier Layout: le skelette de la page, le menu, le plan du background, le footer ...
  <br>  Dans le dossier assets : les stylesheet css et sass
  <br>  Dans le dossier router : la ou se trouve le fichier qui indique pour chaque adresse quelle page charger
                            ( ex: localhost:8080/dashboard  charger le dashboard exc..  )
                             
  <br>  Dans le dossier components : les différents components (composants) qu'on peut utiliser ( des bouttons, des graphes... )
  <br>  (*) Dans le dossier pages: c'est la que se trouve nos pages a charger, le dashboard, page des volontaires ...( les pages
                              sont placées au milieu du layout, donc le layout ne change pas ) 
    
 
 <br> Quoi modifier ?: 
 <br> On modifie les pages (*) 
 
 <br> Comment : 
 <br>  Ouvrez par exemple la page "Volontaires.vue" dans votre editeur :  
 <br>   Vous trouverez 3 élements htmls essentiels:
  <br>    <template  /template> : Le code html de notre page
   <br>   <script></script>: La ou on manipule et lie les données a l'html 
   <br>   <style></style>:  code CSS
 
  <br>On ajoute des components ( ceux qui se trouvent dans le dossier components ) en les important dans <script>
 <br> On peut ajouter plusieurs composants en copiant directement leurs codes de la page doc du template 
   https://demos.creative-tim.com/vue-black-dashboard/documentation/?_ga=2.4559732.699264990.1592873283-1275501922.1592345483
  ( a gauche vous verrez une categorie "components", vous pouvez copier leurs codes et les coller dans la partie  >template> )
  
  <br> Pour savoir davantage comment manipuler les données et tout je vous conseille la documentation officielle :
  https://vuejs.org/v2/guide/


<br> Installation sup : 
<br> datpicker :
<br>npm install vuejs-datepicker --save

<br>Handeling the datepicker :
<br>https://github.com/charliekassel/vuejs-datepicker

<br>Vuex: gestion de variables globales entre components
<br>npm install vuex --save

<br>handeling vuex : 
<br>https://www.smashingmagazine.com/2020/01/data-components-vue-js/#vuex-application-level-shared-state
 

<br>  Axios: ( http requests management , communication avec le back )
<br>npm install --save axios vue-axios
