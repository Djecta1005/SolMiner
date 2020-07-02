<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
    <tr>
     <th scope="col">Fournitures</th>
     <th scope="col">Disponibles</th>
     <th scope="col">Manquants</th>
    </tr>
    </thead>
    <tbody :class="tbodyClasses">
    <tr v-for="fouriture in fournitures">
       <td>{{fouriture.nom}}</td>
       <td>{{fouriture.nbDispo}}</td>
       <td>{{fouriture.nbManq}}</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'base-table',
    props: {
       columns: {
        type: Array,
        default: () => [],
        description: "Table columns"
      },
      data: {
        fournitures : [
          {
            nom : 'Gel',
            nbDispo : 10,
            nbManq : 15
          },
           {
            nom : 'Gel1',
            nbDispo : 10,
            nbManq : 15
          },
           {
            nom : 'Gel2',
            nbDispo : 10,
            nbManq : 15
          }
        ],
      },
      type: {
        type: String, // striped | hover
        default: "",
        description: "Whether table is striped or hover type"
      },
      theadClasses: {
        type: String,
        default: '',
        description: "<thead> css classes"
      },
      tbodyClasses: {
        type: String,
        default: '',
        description: "<tbody> css classes"
      }
    },
    computed: {
      tableClass() {
        return this.type && `table-${this.type}`;
      }
    },
    methods: {
      hasValue(item, column) {
        return item[column.toLowerCase()] !== "undefined";
      },
      itemValue(item, column) {
        return item[column.toLowerCase()];
      }
    }
  };
</script>
<style>
</style>
