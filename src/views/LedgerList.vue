<template>
  <div>
      <ledger-create-form></ledger-create-form>
      <ledger-table></ledger-table>
  </div>
</template>

<script>
    import LedgerCreateForm from '@/components/LedgerCreateForm'
    import LedgerTable from '@/components/LedgerTable.vue'

    export default {
        components: { 
            LedgerCreateForm,
            LedgerTable,

        },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;300&display=swap');

div {
    font-family: 'Prompt', sans-serif;
}
</style>