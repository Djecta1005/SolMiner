<template>
    <div class="row"  >
      
      <card class="text-right" style="width: 150rem;">
          <a href="#/vd" class="btn btn-primary"> Rechercher des volontaires  </a>
          <a href="#/v1" class="btn btn-primary"> Faire une demande </a>
      </card>

     <div class="col-12"  >
        <card   v-for="item in Volontaires"
                v-bind:key="item.establishmentId"
                 >

          <span slot="header">
           Volontaire
         </span>
         <h4 class="card-title" >{{ item.myreservedvolunteers.volunteerFirstName }}  {{ item.myreservedvolunteers.volunteerLastName }}</h4>
         <h5> Proffesion : {{item.myreservedvolunteers.jobType }}  </h5>
         <p class="card-text"> Disponible à partir du {{item.myreservedvolunteers.reservationTime[0].startDate }} jusqu'au  {{item.myreservedvolunteers.reservationTime[0].endDate }}  </p>
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
     aff ,listeVolontaires,Volontaires : "" ,  
    }; 

  },  
  
   mounted() {
      this.getVolontaires();
    },
  
  methods:{

    getVolontaires() {
    axios
      .get('') // API HERE************************************************
      .then(response => (this.Volontaires = response))
    }

  }
   
};


</script>
<style>
</style>
