import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // fields in oop
      data: [],
  },
  getters: {
      pokemons: (state) => state.data, 
  },

  // same private setter ใน oop , เปลี่ยนค่าใน state 
  mutations: {
      fetch(state, { res }) {
          state.data = res.data
      }
  },

  // same action public methods , ให้ภายนอกเรียกใช้ or ดึงข้อมูลจากภายนอก
  actions: {
      // commit เป็น keyword เรียก mutation
      fetchPokemon ({ commit }) {
        // สมมติเรียกข้อมูล api
        let res = {
            data: [
                {
                    name: {
                        english: 'Bulbasaur',
                        japanese: 'Fushikidane'
                    },
                    type: ['Grass','Poison']
                },
      
                {
                  name: {
                      english: 'Bulbasaur2',
                      japanese: 'Fushikidane 2'
                  },
                  type: ['Grass','Poison']
               },
      
            ],
        }
        commit('fetch', { res })
      }
  },
  modules: {
  }
})
