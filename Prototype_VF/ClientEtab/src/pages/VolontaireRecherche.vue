<template>
  <div class="row">


   <card>
     <p id ="d1" > sélectionnez ci-dessous les dates durant lesquelles vous cherchez des volontaires :   </p> 
   </card>


   <div class="row">
     
     <div class="culumn" id = "c1" > 
      <h3> Date debut :   </h3>  
      <datepicker v-model="datedebut"  ></datepicker> 
     </div>

     <div class="culumn" id = "c2" >  
      <h3> Date Fin :  </h3> 
      <datepicker v-model="datefin" ></datepicker>
     </div> 
      
      
     <div class="culumn"  id = "c3"  > 
      <a href="#/vd" class="btn btn-primary" v-on:click="recherche" a>Recherche </a>
     </div>

  </div>


<div id="d2" >
       <div class="col-12"  >
        
        <card   v-for="item in Volontaires"
                v-bind:key="item._id"
                 >
          <span slot="header">
           Volontaire
         </span>
         <h4 class="card-title" >{{item.volunteer.volunteerFirstName }}  {{item.volunteer.volunteerLastName }}</h4>
         <h5> Proffesion : {{item.volunteer.jobType }} </h5>
         <p class="card-text">Disponible a partir du {{item.startDate | moment("calendar")}} jusqu'au {{item.endDate | moment("calendar") }}  </p>
         <a href="#/vr" class="btn btn-primary" v-on:click="volontaire(item.volunteer._id,item.volunteer.volunteerFirstName, item.volunteer.volunteerLastName, item.volunteer.jobType, item.startDate, item.endDate )" > Réserver   </a>
       </card>
          
    
      </div>

</div>

   
  </div>
  
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
import VueMoment from "vue-moment";
var  listeVolontaires;
var datedebut, datefin ;

  export default {
    components: {
      Datepicker
    },

    data() {
      return {
         Volontaires : "",datedebut : this.$store.state.dated,
         datefin :this.$store.state.datef,

      }
    },
       mounted() {
      this.RechercheV();
    },
    
    methods : 
    {
      recherche()
      {
        this.setdated(this.datedebut);
        this.setdatef(this.datefin);
        this.RechercheV();
      },
      volontaire ( id, fname,lname, job, db, df){
        var liste= [id, fname, lname, job, db, df ];
      this.$store.commit("getSelectedVolontaire" , liste );
      },

      setdated ( d){
      this.$store.commit("setdated" , d );
      },

      setdatef ( d){
      this.$store.commit("setdatef" , d );
      },

      RechercheV(){ //*****************  API pour les criteres  ************************** */
         
        const res={
          establishmentId:'5ef39715bc7e9104542256bd',
          startDate:this.$store.state.dated,
          endDate:this.$store.state.datef
        }

        axios     //*****************  API HERE ************************** */
      .get('http://localhost:3005/searchVolunteers/5ef39715bc7e9104542256bd/'+this.$store.state.dated+'/'+this.$store.state.datef
      ,{
        params:{
          res
        }
      }
      )
      .then(response => (this.Volontaires = response.data))
      
      
      }

    }

  }
</script>
<style>

#d1 {
color : white  ; 
text-align: center;
}
#c1, #c2{
 margin-left: 10%;
 width : 40%; 
}
#c3 {
 margin-left: 80%;
 
}
#d2 {
  margin-top: 100px;
  width:1000px ;
}
</style>
