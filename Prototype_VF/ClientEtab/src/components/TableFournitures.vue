<template>
     <base-table :data="tableData"
            :columns="columns" v-if="tableData.length>0">
        <template slot="columns">
          <th class="text-center"></th>
          <th>Nom fourniture</th>
          <th>Nombre manquant</th>
          <th>Nombre disponible</th>
          <th class="text-right"></th>
        </template>  
        <template slot-scope="{row}">
          <td >{{row.id}}</td>
          <td>{{row.supplyName}}</td>
          <td ><p v-if="show">{{row.supplyrequestNumber}}</p><base-input addon-left-icon="fa fa-bars" v-model="row.supplyrequestNumber" v-if="!show"></base-input></td>
          <td><p v-if="show">{{row.supplystockNumber}}</p><base-input addon-left-icon="fa fa-bars" v-model="row.supplystockNumber" v-if="!show" ></base-input></td>
          <td class="td-actions text-right">
            <base-button type="success" size="sm" icon @click="edit" v-if="show">
              <i class="tim-icons icon-pencil"></i>
            </base-button>
            <base-button type="success" size="sm" icon @click="send(tableData[tableData.indexOf(row)])" v-if="!show">
              <i class="tim-icons icon-check-2"></i>
            </base-button>
            <base-button type="danger" size="sm" icon>
              <i class="tim-icons icon-simple-remove" @click="remove(tableData[tableData.indexOf(row)])"></i>
            </base-button>
          </td>
        </template>    
</base-table>
</template>
<script>
import { BaseTable } from "@/components";
import { mapState } from 'vuex'
import FournituresService from '../FournituresService'
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
        columns: [    
                "id",
                "supplyName",
                "supplyrequestNumber",
                "supplystockNumber","actions"],
        tableData:[],
        show:true,
        fourniture :{
                establishmentWilaya:"Alger" ,
                establishmentName:"CHU Mustafa Bacha",
                establishmentID:"5ef27862cb384a16d42608c1",
                id: " ",
                supplyName:"GEL",
                supplyrequestNumber:44,
                supplystockNumber:53
            },
            row :{}
      }
    },

    methods:{
      edit() {
      this.show = !this.show
    },
     async send(fourniture1) {
       
      this.show = !this.show
      await FournituresService.updateStockFourniture("Bejaia","CHU khelil amrane",fourniture1.supplyName,fourniture1)
      await FournituresService.updateRequestFourniture("Bejaia","CHU khelil amrane",fourniture1.supplyName,fourniture1)
    },
    async remove(fourniture1) {
      this.tableData.splice(this.tableData.indexOf(fourniture1),1)
     await FournituresService.deleteFourniture(fourniture1)
    }
    },
  computed: {
    ...mapState([
      'fournitures'
    ]),
  }
}
</script>