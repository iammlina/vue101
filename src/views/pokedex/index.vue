<template>
    <div>
        <router-link v-if="isAuthen()" to="/pokedex/create">Add New Pokedex</router-link>
        <!-- <pokedex-create-form></pokedex-create-form> -->
        <pokedex-table></pokedex-table>
    </div>
</template>

<script>
    // import PokedexCreateForm from '@/components/PokedexCreateForm'
    import PokedexTable from '@/components/PokedexTable'
    // import AuthService from "@/services/AuthService"
    import AuthUser from "@/store/AuthUser"
    export default {
        components: {
            // PokedexCreateForm,
            PokedexTable
        },
        methods: {
            isAuthen() {
                return AuthUser.getters.isAuthen
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
div {
  font-family: 'Nunito', sans-serif;
}
</style>
