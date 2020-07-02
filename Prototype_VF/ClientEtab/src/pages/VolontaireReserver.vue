<template>
  <div class="row">

   <card>
     <p id ="d1" > sélectionnez les dates durant lesquelles vous voulez réserver le volontaire :   </p> 
   </card>

    <card>
      
    <span slot="header">
           Volontaire
     </span>
         <h4 class="card-title" >{{fname}} {{lname}}</h4>
         <h5> Proffesion : {{jobType}} </h5>

     <p class="card-text">Disponible a partir du {{datedebut | moment("calendar")}} jusqu'au {{datefin | moment("calendar")}}  </p>
 
     
     <div  id = "c1" > 
      <h3> Date debut réservation:   </h3>  
      <datepicker v-model="datedeb" ></datepicker> 
     </div>

     <div  id = "c2" >  
      <h3> Date fin réservation :  </h3> 
      <datepicker v-model="datef"  ></datepicker>
 
     
  </div>
  
  <p class="card-text" style="text-align: center" > <br> Veuillez choisir des dates conformes au dates de disponibilité </p>
  <a href="#" class="btn btn-primary" id="d4" v-on:click="reservation" >Valider </a>
</card>
    
    
   
  </div>
  
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import axios from 'axios';
  import VueMoment from "vue-moment";
 var  fname , lname,
    jobType, 
    datedebut,
    datefin   , datedeb, datef; 
  export default {
    components: {
      Datepicker
    },

    data() {

      fname=  this.$store.state.user.fname;
      lname=  this.$store.state.user.lname;
      jobType= this.$store.state.user.jobtype; 
      datedebut= this.$store.state.user.datedebutdispo;
      datefin= this.$store.state.user.datefindispo;  
      return {
          
     fname,lname,  jobType, datedebut, datefin,datedeb,datef
      }
    },
    methods : 
    {
      reservation(){   /******* API herrreee  *******/
        var res={
           establishmentId : "5ef39715bc7e9104542256bd",
    volunteerId :  this.$store.state.user.id,
    startDate : this.datedeb,
    endDate : this.datef,
    volunteerResponse : "Non traitée",
    establishmentResponse: "Réservée"
        }
        axios.post('http://localhost:3005/reserving', res )
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
 width : 300px;
 margin-top: 30px;
}
#d4 {
margin-left: 70%;
width: 20%;
}
#aff{
  position: center ;
  
}
</style>
