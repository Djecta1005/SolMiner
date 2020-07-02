<template>
    <div class="row"  onload="getVolontaires();">
      
      <card class="text-right" style="width: 150rem;">
          <a href="#/vd" class="btn btn-primary"> Rechercher des volontaires  </a>
          <a href="#/v1" class="btn btn-primary">Faire une demande </a>

      </card>
       
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
         <p class="card-text">Disponible a partir du {{item.datedebut}} jusqu'au {{item.datefin}}   </p>
         <a href="#" class="btn btn-primary"> Annuler  </a>
       </card>
      </div>

    </div>
</template>

<script>
import { BaseTable } from "@/components";
import axios from 'axios'
var listeVolontaires;
export default {
  components: {

  },
  data() {
    var aff =this.$store.state.user.username;

    return {
     aff ,listeVolontaires,
     tableVolontaire : [
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
    };

  }, 
  methods:{

    getVolontaires() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.listeVolontaires = response))
  }

  }
};
</script>
<style>
</style>
