import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import AuthService from "@/services/AuthService"

let api_endpoint = process.env.VUE_APP_POKEMON_ENDPOINT || "http://localhost:1337"
//"http://localhost:1337" //data from strapi

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // fields in oop 
      data: [],
  },
  getters: {
      pokemons: (state) => state.data, 
  },


  // same private setter ใน oop , เปลี่ยนค่าใน state , acction จะมาเรียก
  mutations: {
      fetch(state, { res }) { //ansigh ค่า
          state.data = res.data
      },
      add(state,  payload ) {
          state.data.push(payload)
      },
      edit(state, index, data) {
        state.data[index] = data
      },
  },

  
  // same action public methods , ให้ภายนอกเรียกใช้ or ดึงข้อมูลจากภายนอก
  actions: {
      // commit เป็น keyword เรียก mutation
      async fetchPokemon ({ commit }) {

        let res = await Axios.get(api_endpoint + "/monsters") //data raw
        
        commit('fetch', { res }) // update for ลง state
      },

      async addPokemon({ commit }, payload) {
        // payload.pokemon_types = ["Fire", "Flying"] 
        // ["name_in=Fire", "name_in=Flying"]
        // "name_in=Fire&name_in=Flying"
        let qs = payload.pokemon_types.map(it => "name_in=" + it).join('&')
        let res_types = await Axios.get(api_endpoint + "/types?" + qs)
  
        let url = api_endpoint + "/monsters"

        
        let body = {
          name: payload.name,
          name_jp: payload.name_jp,
          pokemon_types: res_types.data.map(it => it.id)
        }

        try {
          let headers = AuthService.getApiHeader()
          let res = await Axios.post(url, body, headers)
          if (res.status === 200) {
            commit("add", res.data)
            return {
              success: true,
              data: res.data
            }
          } else {
            console.error(res)
            return {
              success: false,
              message: "Unknown status code: " + res.status
            }
          } 

        } catch (e) {
          if (e.response.state === 403) {
            console.error(e.response.data.message)
            return {
              success: false,
              message: e.response.data.message,
            }
          }
          else {
              return {
                success: false,
                message: "Unknown error:" + e.response.data
              }
          }
        }
  
        
      },

      async editPokemon({ commit }, payload) {
        console.log('payload', payload)
  
        // payload.pokemon_types = ["Fire", "Flying"] 
        // ["name_in=Fire", "name_in=Flying"]
        // "name_in=Fire&name_in=Flying"


        let qs = payload.pokemon_types.map(it => "name_in=" + it).join('&')
        let res_types = await Axios.get(api_endpoint + "/types?" + qs)
        // let id = payload.id
  
        let url = `${api_endpoint}/monsters/${payload.id}` //api_endpoint + "/monsters/" + payload.id
        let body = {
          name: payload.name,
          name_jp: payload.name_jp,
          pokemon_types: res_types.data.map((it) => it.id),
        }
        //console.log(payload.id)
        res = await Axios.put(url, body)
        console.log(payload.id)
        if (res.status === 200) {
          console.log("commit('edit')", payload.index, res.data)
          commit("edit", payload.index, res.data)
        } 
        else {
          console.log(payload.id)
          console.log(err)
        }
      },
  },
  modules: {},
})
