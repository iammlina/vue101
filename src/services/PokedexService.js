import Axios from "axios"

const api_endpoint = process.env.VUE_APP_POKEMON_ENDPOINT || "http://localhost:1337"

export default {
    async getPokemonById (id) {
        try {
            let res = await Axios.get(`${api_endpoint}/monsters/${id}`)
            return res.data
        } catch (e) {

        }
    }
}