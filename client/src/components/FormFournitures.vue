<template>
    <form @submit.prevent @submit="submit">
      <base-input addon-left-icon="fab fa far-bas" placeholder="Nom de la fourniture" v-model ="fourniture.nom" required >
      </base-input>
      <base-input  type="number" min ="0"  placeholder="Nombre de fournitures manquantes" v-model="fourniture.nbmq" required></base-input>
      <base-input  type="number" min ="0"  placeholder="Nombre de fournitures disponibles" v-model="fourniture.nbdsp" required></base-input>
      <base-button block native-type="submit" type="primary">Ajouter</base-button>
    </form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'form-fournitures',
    mounted(){
        this.fourniture ={id: null,nom:null,nbmq:null,nbdsp:null}
    },
    data() {
    return {
      fourniture :{id: null,nom:null,nbmq:null,nbdsp:null}
    }
  },
    methods:{
        submit(){
        this.$store.commit("addFourniture" , this.fourniture );
        this.fourniture = {
                id: null,
                nom: null,
                nbmq: null,
                nbdsp:null,
            }
    },
}
}
</script>