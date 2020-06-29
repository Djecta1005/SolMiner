
<template>
  <div class="row">

    
   <card>
     <p id ="d1" > Veuillez remplir les informations necessaires pour faire une demande   </p> 
   </card>

    <card>
    
         
    <div class="row" >
     
     <div class="culumn" id = "c2" > 
      <h3> Date debut :   </h3>  
      <datepicker v-model="datedeb" :inline="afficher" ></datepicker> 
     </div>

     <div class="culumn" id = "c2" >  
      <h3> Date Fin :  </h3> 
      <datepicker v-model="datef" :inline="afficher"  ></datepicker>
     </div> 
      
      <div class="culumn" id = "c2" > 
      <h3> Choix des horaires </h3>  
      <select v-model="selected">
      
  <option disabled value="">Choisissez les horaires</option>
  <option>8h-16h</option>
  <option>16h-8h</option>
  <option>12h-20h</option>
    </select>

 </div> 
     
    


      <div class="culumn" id = "c2" > 
      <h3> Choix de la wilaya </h3>  
      <select v-model="selected">
      
  <option disabled value="">Choisissez la wilaya</option>
  <option>Alger</option>
  <option>Oran</option>
  <option>Annaba</option>
    </select>

 </div> 
     
  </div>

  
  <p class="card-text" style="text-align: center" > <br> Veuillez vérifier les informations avant la confirmation </p>
  <a href="#/v2" class="btn btn-primary" id="d4">Confirmer </a>
</card>

   
  </div>

  
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
var datedeb =  new Date(), datef = new Date() ; 
var affresultat= false; 

 var tableVolontaire = [
  {
    id: 1,
    name: "Dakota Rice",
    jobType: "INFIRMIER" , 
    datedebut: Date(2020,7,3),
    datefin: Date(2020,7,6) 

  },
  {
    id: 2,
    name: "Gigi Infi",
    jobType: "MEDECIN" , 
    datedebut: Date(2020,7,4) ,
    datefin: Date(2020,7,10) 

  }]
  export default {
    components: {
      Datepicker
    },

    data() {
      return {
          datedeb, datef, tableVolontaire, affresultat

      }
    },
    methods : 
    {
      recherche (){
      this.affresultat = true; 
      }
    }
  }
</script>


<style>
#d1 {
color : white  ; 
text-align: center;

}

#c1, #c2, #c3 {
 width : 400px; 
}



#d4 {
margin-left: 70%;
width: 20%;

}

#aff{
  position: center ;
  
  
}
</style>

