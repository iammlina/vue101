<template>
    <div>
        <!-- <pokedex-table></pokedex-table> -->
        <h1>Edit Pokemon {{ id }} </h1>

        <div>
            <label for="name">Name (EN)</label>
            <input v-model="form.name" type="text">
        </div>

        <div>
            <label for="name">Name (JP)</label>
            <input v-model="form.name_jp" type="text">
        </div>

        <div>
            <label for="name">Type</label>
            <input v-model="form.pokemon_types" type="text">
        </div>

        <div>
            <button @click="editPokemon">Update</button>
            <button @click="exit">Exit</button>
        </div>
    </div>
</template>

<script>
import PokedexApiStore from '@/store/PokedexApi'
import PokedexService from "@/services/PokedexService"
import AuthUser from "@/store/AuthUser"


// import PokedexTable from '@/components/PokedexTable'
export default {
    // components : {
    //     PokedexTable,
    // },
    // mounted() {
    //     if (!this.isAuthen()) {
    //         this.$swal("Restricted Area", "You have no permission", " warning")
    //         this.$router.push("/pokedex")
    //     }
    // },
    data() {
        return {
            id: '',
            form: {
                name: '',
                name_jp: '',
                pokemon_types: ''
            }
        }
    },
    async created() {
        this.id = this.$route.params.id
        let pokemon = await PokedexService.getPokemonById(this.id)
        console.log(pokemon)
        this.form.name = pokemon.name
        this.form.name_jp = pokemon.name_jp
        this.form.pokemon_types = pokemon.pokemon_types.map(it => it.name).join(', ')
        // this.form = PokedexApiStore.getters.form
    },

    methods: {
        isAuthen() {
             return AuthUser.getters.isAuthen
        },

        // closeForm() {
        //         this.form = {
        //             id: "",
        //             name: "",
        //             name_jp: "",
        //             pokemon_types: ""
        //         }
        // },
        async editPokemon() {
                let payload = {
                    id: this.id,
                    name: this.form.name,
                    name_jp: this.form.name_jp,
                    pokemon_types: this.form.pokemon_types.split(',').map(
                        (item) => item.trim()
                    ),
                }
                console.log(payload)
                await PokedexApiStore.dispatch("editPokemon", payload)
                
        },
        exit() {
            this.$router.push('/pokedex')
        }
    }

}
</script>

<style>

</style>