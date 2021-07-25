<template>
    <div>
        <pokemon-create-form></pokemon-create-form>
        <pokemon-table></pokemon-table>
    </div>
</template>

<script>
    import PokemonCreateForm from '@/components/PokemonCreateForm'
    import PokemonTable from '@/components/PokemonTable'
    export default {
        components: {
            PokemonCreateForm,
            PokemonTable
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
div {
  font-family: 'Nunito', sans-serif;
}
</style>
