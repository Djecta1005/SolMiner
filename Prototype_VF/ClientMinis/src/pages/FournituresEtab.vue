<template>
 
     
   
  <div>
   <div class="row"> 
    <div class="row" id = "cl" > 
      <div class="culumn" id = "cl1"  > 
      <h4> Wilaya </h4> 
      </div>
      <div class="culumn"  >   
      <select v-model="demoWilaya" id = "cl2">
       <option>Alger</option>
       <option>Tizi Ouzou</option>
       <option>Bejaia</option>
       <option>Oran</option>
       <option>Annaba</option>
      </select>
      </div> 

    </div> 
    <div class="row" id = "cl3"  > 
      <div class="culumn"  > 
      <h4> Etablissement de santé </h4> 
      </div>
      <div class="culumn"  >   
      <select v-model="demoEtab" id = "cl2" @change="getSupply('Bejaia','CHU khelil amrane')">
       <option> Les Oliviers</option>
       <option>CHU khelil amrane</option>
      </select>
      </div> 

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
         }],
         obj : {
           _id : '',
           suppliesNumberStock : '',
           suppliesNumberRequest:''
         },
         demoWilaya : 'Bejaia',
         demoEtab : 'Les Oliviers'
      }
    },
 async mounted () 

    {
      this.getSupply("Bejaia","Les Oliviers")
     
    },
 methods :
    {
    async getSupply(wilaya,establishment)
    {
      
        try {
          let i=0
           let k=0
           let taille2=this.Supply.length
            let response = await axios.get('http://localhost:3000/supply/Minestary/Stock/'+wilaya +'/'+establishment)
            
      
              response.data.forEach(element => {
                
                  this.Supply[i]._id=element.supplyinfo.supplyType
                   this.Supply[i].suppliesNumberStock=element.suppliesNumber
                   i++
                console.log("stock" + this.Supply[i]._id)
                
              
              });
              k=i
              while(k<taille2) {
                this.Supply.pop()
                k++
              }
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
           
            let response = await axios.get('http://localhost:3000/supply/Minestary/Request/'+wilaya+'/'+establishment)
          
              response.data.forEach(element => {
                j=0
                for(i=0; i<taille; i++) {
                  if (this.Supply[i]._id===element.supplyinfo.supplyType){
                    j=1
                    console.log("c'est egale"+this.Supply[i]._id)
                    this.Supply[i].suppliesNumberRequest=element.suppliesNumber
                  }
                }
                if (j===0) {
                  this.obj=new Object
                  this.obj._id=element.supplyinfo.supplyType
                  this.obj.suppliesNumberRequest=element.suppliesNumber
                  this.Supply.push(this.obj)         
                  console.log("non"+element.supplyinfo.supplyType)
                  
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
 width : 400px; 
}
 #cl3 {
 width : 400px; 
 marging-left : 400px; 
}
#cl2, cl1 {
 width : 150px; 
 
}

</style>
