<template>
    <div class="row"  >
      
      <card class="text-right" style="width: 150rem;">
          <a href="#/vd" class="btn btn-primary"> Rechercher des volontaires  </a>
          <a href="#/v1" class="btn btn-primary"> Faire une demande </a>
      </card>

     <div class="col-12"  >
        <card   v-for="item in Volontaires"
                v-bind:key="item._id"
                 >

          <span slot="header">
           Volontaire
         </span>
         <h4 class="card-title" >{{ item.myreservedvolunteers.volunteerFirstName }}  {{ item.myreservedvolunteers.volunteerLastName }}</h4>
         <h5> Proffesion : {{item.myreservedvolunteers.jobType }}  </h5>
         <p class="card-text"> Disponible à partir du {{item.myreservedvolunteers.reservationTime[0].startDate | moment("calendar") }} jusqu'au  {{item.myreservedvolunteers.reservationTime[0].endDate | moment("calendar")}}  </p>
         <a href="#" class="btn btn-primary"> Annuler  </a>
       </card>
     </div>
          
    </div>

</template>

<script>
import { BaseTable } from "@/components";
import axios from 'axios';
import VueMoment from "vue-moment";

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
      .get('http://localhost:3005/reserved/5ef39715bc7e9104542256bd') // API HERE************************************************
      .then(response => (this.Volontaires = response.data))
    }

  }
   
};


</script>
<style>
</style>
