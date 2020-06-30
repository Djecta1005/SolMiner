<template>
     <base-table :data="tableData"
            :columns="columns" v-if="tableData.length>0">
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
          <td ><p v-if="show">{{row.nbmq}}</p><base-input addon-left-icon="fa fa-bars" v-model="row.nbmq" v-if="!show"></base-input></td>
          <td><p v-if="show">{{row.nbdsp}}</p><base-input addon-left-icon="fa fa-bars" v-model="row.nbdsp" v-if="!show" ></base-input></td>
          <td class="td-actions text-right">
            <base-button type="success" size="sm" icon @click="edit" v-if="show">
              <i class="tim-icons icon-pencil"></i>
            </base-button>
            <base-button type="success" size="sm" icon @click="send" v-if="!show">
              <i class="tim-icons icon-check-2"></i>
            </base-button>
            <base-button type="danger" size="sm" icon>
              <i class="tim-icons icon-simple-remove" @click="remove"></i>
            </base-button>
          </td>
        </template>    
</base-table>
</template>
<script>
import { BaseTable } from "@/components";
import { mapState } from 'vuex'
export default {
    name: 'table-fournitures',
    components: {
      BaseTable
    },
    mounted(){
       this.tableData = this.fournitures
    },
    data() {
      return {
        columns: ["id", "nom", "nbmq", "nbdsp","actions"],
        tableData:[],
        show:true
      }
    },
    methods:{
      edit() {
      this.show = !this.show
    },
     send() {
      this.show = !this.show
    },
    remove() {
      this.tableData - this.row
    }
    },
  computed: {
    ...mapState([
      'fournitures'
    ]),
  }
}
</script>