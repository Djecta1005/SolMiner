<template>
  <div class="row">


   <card>
     <p id ="d1" > sélectionnez ci-dessous les dates durant lesquelles vous cherchez des volontaires :   </p> 
   </card>


   <div class="row">
     
     <div class="culumn" id = "c1" > 
      <h3> Date debut :   </h3>  
      <datepicker v-model="datedeb" :inline="afficher" ></datepicker> 
     </div>

     <div class="culumn" id = "c2" >  
      <h3> Date Fin :  </h3> 
      <datepicker v-model="datef" :inline="afficher"  ></datepicker>
     </div> 
      
      
     <div class="culumn"  id = "c3"  > 
      <a href="#" class="btn btn-primary"  v-on:click ="recherche" a>Recherche </a>
     </div>

  </div>


<div id="d2" v-if="affresultat">
       <div class="col-12"  >
        
        <card   v-for="item in tableVolontaire"
                v-bind:key="item.id"
                v-bind:name="item.name"
                v-bind:dated="item.datedebut"
                v-bind:datef="item.datefin"
                 >
          <span slot="header">
           Volontaire
         </span>
         <h4 class="card-title" >{{item.name}}</h4>
         <h5> Proffesion : {{item.jobType}} </h5>
         <p class="card-text">Disponible a partir du {{item.datedebut}} jusqu'au {{item.datefin}}  </p>
         <a href="#/vr" class="btn btn-primary" v-on:click="volontaire(item.id, item.name, item.jobType, item.datedebut, item.datefin )" > Réserver   </a>
       </card>
          
       

      </div>

</div>

   
  </div>
  
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
var datedeb =  new Date(), datef = new Date() ; 
var affresultat= false, listeVolontaires;


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
          datedeb, datef, tableVolontaire, affresultat,listeVolontaires

      }
    },
    methods : 
    {
      recherche (){
      this.affresultat = true; 
      },

      volontaire ( id, name, job, db, df){
        var liste= [id, name, job, db, df ];
      this.$store.commit("getSelectedVolontaire" , liste );
      },

      RechercheV(datedeb, datef){
        axios.post('/api', datedeb, datef ).then((res) => {this.listeVolontaires=res ; }
        ).catch((err) => {
          console.log(err)
        })
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

#c1, #c2{
 width : 40%; 
}

#c3 {
 margin-left: 60%; 
}


#d2 {
  margin-top: 100px;
  width:1000px ;
}
</style>
