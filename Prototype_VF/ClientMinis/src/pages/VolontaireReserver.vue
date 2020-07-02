<template>
  <div class="row">

    
   <card>
     <p id ="d1" > sélectionnez les dates durant lesquelles vous voulez réserver le volontaire :   </p> 
   </card>

    <card>
    <span slot="header">
           Volontaire
         </span>
         <h4 class="card-title" >{{name}}</h4>
         <h5> Proffesion : {{jobType}} </h5>

         <p class="card-text">Disponible a partir du {{datedebut}} jusqu'au {{datefin}}  </p>
   <div class="row" id="aff">
     
     <div class="culumn" id = "c1" > 
      <h3> Date debut réservation:   </h3>  
      <datepicker v-model="datedeb" :inline="afficher" ></datepicker> 
     </div>

     <div class="culumn" id = "c2" >  
      <h3> Date fin réservation :  </h3> 
      <datepicker v-model="datef" :inline="afficher"  ></datepicker>
     </div> 
      
      
     
  </div>
  
  <p class="card-text" style="text-align: center" > <br> Veuillez choisir des dates conformes au dates de disponibilité </p>
  <a href="#" class="btn btn-primary" id="d4">Valider </a>
</card>

   
  </div>
  
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
 var  name ,
    jobType, 
    datedebut,
    datefin   , datedeb, datef; 
  export default {
    components: {
      Datepicker
    },

    data() {

      name=  this.$store.state.user.username;
      jobType= this.$store.state.user.jobtype; 
      datedebut= this.$store.state.user.datedebutdispo;
      datefin= this.$store.state.user.datefindispo;  
      return {
          
     name, jobType, datedebut, datefin,datedeb,datef
      }
    },
    methods : 
    {
      reservation(){
        axios.post('/api', this.$store.state.user.id, this.datedeb, this.datef )

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

#c1 {
margin-left: 20%;
}

#d4 {
margin-left: 70%;
width: 20%;

}

#aff{
  position: center ;
  
}
</style>
