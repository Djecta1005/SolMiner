<template>
<card>
   <form @submit.prevent>
      <base-input addon-left-icon="fa fa-bars" placeholder="Nom de la fourniture" >
      </base-input>
      <base-input  type="number" min ="0"  placeholder="Nombre de fournitures manquantes"></base-input>
      <base-input  type="number" min ="0"  placeholder="Nombre de fournitures disponibles"></base-input>
      <base-button block native-type="submit" type="primary">Ajouter</base-button>
    </form>
    <base-table :data="tableData"
            :columns="columns">
        <template slot="columns">
          <th class="text-center">#</th>
          <th>Nom fourniture</th>
          <th>Nombre manquant</th>
          <th>Nombre disponible</th>
          <th class="text-right"></th>
        </template>  
        <template slot-scope="{row}">
          <td>{{row.id}}</td>
          <td>{{row.nom}}</td>
          <td><base-input addon-left-icon="fa fa-bars" v-model="row.nbmq" ></base-input></td>
          <td><base-input addon-left-icon="fa fa-bars" v-model="row.nbdsp" ></base-input></td>
          <td class="td-actions text-right">
            <base-button type="success" size="sm" icon>
              <i class="tim-icons icon-settings"></i>
            </base-button>
            <base-button type="danger" size="sm" icon>
              <i class="tim-icons icon-simple-remove"></i>
            </base-button>
          </td>
        </template>    
</base-table>

</card>
</template>
<script>
  import { BaseTable } from "@/components";
  export default {
    components: {
      BaseTable
    },
    computed: {
      table(){
        return this.$t('dashboard.usersTable');
      }
    },
    methods:{
        submit(){
          this.fourniture.nom=nom
        }
    },
  data() {
    return {
      nom:"",
      columns: ["id", "nom", "nbmq", "nbdsp","actions"],
      tableData: [
        {
          id: 1,
          nom: "	Andrew Mike",
          nbmq: "€ 99,225	",
          nbdsp: "Develop",
        },
        {
          id: 2,
          nom: "	John Doe",
          nbmq: "€ 89,241",
          nbdsp: "Design",
        },
        {
          id: 3,
          nom: "	John Doe",
          nbmq: "€ 89,241",
          nbdsp: "Design",
        }
      ],
      fourniture :{
          id: null,
          nom: "",
          nbmq: "",
          nbdsp: "",
      }
    }
  }
}
</script>
<style>
</style>
