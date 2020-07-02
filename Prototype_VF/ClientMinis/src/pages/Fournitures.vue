<template>
 
     
   
  <div>
    <div class="row" id = "cl" > 
      <div class="culumn" id = "cl1" > 
      <h4> Wilaya </h4> 
      </div>
      <div class="culumn" id = "cl2">   
      <select v-model="selected" @change="getSupply('Bejaia')">
       <option>Alger</option>
       <option>Tizi Ouzou</option>
       <option>Bejaia</option>
       <option>Oran</option>
       <option>Annaba</option>
      </select>
      </div> 

    </div> 
    

  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
    <tr>
     <th scope="col">Fournitures</th>
     <th scope="col">Disponibles</th>
     <th scope="col">Manquants</th>
    </tr>
    </thead>
    <tbody :class="tbodyClasses">
  
 <tr v-for="(st) in Supply" v-bind:key="st._id">
     <td>{{st._id}}</td>
     <td>{{st.suppliesNumberStock}}</td>
     <td>{{st.suppliesNumberRequest}}</td>
    </tr>
    </tbody>
  </table>
  <a href="#/vfe" class="btn btn-primary" id="d4">Plus de détails </a>
  </div>

</template>
<script>
  import { BaseTable } from "@/components";
  import axios from 'axios'
  export default {
    components: {
      BaseTable
    },
    computed: {
      table(){
        return this.$t('dashboard.usersTable');
      }
    },

    data() {
      return {
         
         Supply : [ 
          { _id : '',
           suppliesNumberStock : '',
           suppliesNumberRequest:''
           
         }]

      }
    },
    
    methods :
    {
    async getSupply(wilaya)
    {
        try {
           let i=0
            let response = await axios.get('http://localhost:3000/supply/Minestary/Stock/'+wilaya)
              response.data.forEach(element => {
                
                this.Supply[i]=element
                console.log("stock" + this.Supply[i]._id)
                
                i++
              });
              this.Supply.forEach(element =>{
                console.log(element)
              })
        }
        catch(err){
          
          console.log("ooo");
          console.log(err);

        }
 try {
           let j=0
           let i=0
           let taille=this.Supply.length
            let response = await axios.get('http://localhost:3000/supply/Minestary/Request/'+wilaya)
          
              response.data.forEach(element => {
                j=0
                for(i=0; i<taille; i++) {
                  
                  
                  if (this.Supply[i]._id===element._id){
                    j=1
                    console.log("c'est egale"+this.Supply[i]._id)
                    this.Supply[i].suppliesNumberRequest=element.suppliesNumberRequest
                  }
                }
                if (j===0) {
                  this.Supply.push(element)
                  console.log("non"+element._id)
                  
                }
              });
              this.Supply.forEach(element3 =>{
                console.log(element3)
              })
        }
        catch(err){
          
          console.log("ooo");
          console.log(err);

        }

     }

    }
    
  }

 

</script>
<style>
#cl {
 width: 800
}
#cl1 {
 width: 200
}
#cl2 {
 width: 200
}



</style>
