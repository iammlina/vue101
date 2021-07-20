<template>
    <div>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name (En)</th>
                <th>Name (Jp)</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(poke, index) in pokemons" :key="index">
                <th>{{ index + 1}}</th>
                <th>{{ poke.name.english}}</th>
                <th>{{ poke.name.japanese}}</th>
                <th>{{ poke.type}}</th>
            </tr>
        </tbody>
    </table>
    </div> 
</template>

<script>
    import PokemonStore from '@/store/Pokemon'
    export default {
        data(){
            return {
                pokemons: []
            }
        },
        created() {
            // use this call methods in component ตัวเอง
            this.fetchPokemon()
        },
        methods: {
            fetchPokemon() {
                // call action in store use NameStore.dispatch(nameAction)
                PokemonStore.dispatch('fetchPokemon')

                // call getter in store
                this.pokemons = PokemonStore.getters.pokemons
            }
        }
    }
    
</script>

<style>

</style>

