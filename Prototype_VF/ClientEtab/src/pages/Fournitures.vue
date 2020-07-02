<template>
<card>
  <FormFournitures/>
  <TableFournitures/>
</card>
</template>
<script>
import FormFournitures from "@/components/FormFournitures.vue";
import TableFournitures from "@/components/TableFournitures.vue";
export default {
    components: {
      FormFournitures,
      TableFournitures
    },
    computed: {
      table(){
        return this.$t('dashboard.usersTable');
      }
    }
}
</script>
<style>
</style>
