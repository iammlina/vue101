import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint =
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json" //data raw

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
      add(state, { payload }) {
          state.data.push(payload)
      },
      edit(state, { payload }) {
          state.data[payload.index].name = payload.name
          state.data[payload.index].type = payload.type
      },
  },

  
  // same action public methods , ให้ภายนอกเรียกใช้ or ดึงข้อมูลจากภายนอก
  actions: {
      // commit เป็น keyword เรียก mutation
      async fetchPokemon ({ commit }) {
        // สมมติเรียกข้อมูล api
        // let res = {
        //     data: [
        //         {
        //             name: {
        //                 english: 'Bulbasaur',
        //                 japanese: 'Fushikidane'
        //             },
        //             type: ['Grass','Poison']
        //         },
      
        //         {
        //           name: {
        //               english: 'Bulbasaur2',
        //               japanese: 'Fushikidane 2'
        //           },
        //           type: ['Grass','Poison']
        //        },
      
        //     ],
        // }
        let res = await Axios.get(api_endpoint) //data raw
        commit('fetch', { res }) // update for ลง state
      },

      addPokemon({ commit }, payload) {
          // todo: call cpi to add data
          commit("add", {payload})
      },

      editPokemon({ commit }, payload) {
        // todo : call api to edit data
        commit("edit", { payload })
      },
  },
  modules: {},
})
