<template>
    <form @submit.prevent @submit="submit">
      <base-input addon-left-icon="fab fa far-bas" placeholder="Nom de la fourniture" v-model ="fourniture.supplyName" required >
      </base-input>
      <base-input  type="number" min ="0"  placeholder="Nombre de fournitures manquantes" v-model="fourniture.supplyrequestNumber" required></base-input>
      <base-input  type="number" min ="0"  placeholder="Nombre de fournitures disponibles" v-model="fourniture.supplystockNumber" required></base-input>
      <base-button block native-type="submit" type="primary">Ajouter</base-button>
    </form>
</template>
<script>
import { mapActions } from 'vuex'
import FournituresService from '../FournituresService'
export default {
    name: 'form-fournitures',
    mounted(){
        this.fourniture ={
                establishmentWilaya:"Bejaia" ,//A changer
                establishmentName:"CHU khelil amrane",//A changer
                establishmentID:"5ef2b9b146ee536688454553",//A changer
             
                id: " ",
                supplyName:null,
                supplyrequestNumber:null,
                supplystockNumber:null
            }
    },
    data() {
    return {
      fourniture :{
                establishmentWilaya:"Bejaia" ,//A changer
                establishmentName:"CHU khelil amrane",//A changer
                establishmentID:"5ef2b9b146ee536688454553",//A changer
                id: " ",
                supplyName:null,
                supplyrequestNumber:null,
                supplystockNumber:null
            }
    }
  },
    methods:
    {
        async submit(){
        this.$store.commit("addFourniture" , this.fourniture )
        
        await FournituresService.insertFourniture(this.fourniture)
        this.fourniture = {
                establishmentWilaya:"Bejaia" ,//A changer
                establishmentName:"CHU khelil amrane",//A changer
                establishmentID:"5ef2b9b146ee536688454553",//A changer
                
                id: " ",
                supplyName:null,
                supplyrequestNumber:null,
                supplystockNumber:null
            }
    },
}
}
</script>