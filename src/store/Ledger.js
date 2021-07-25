import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // fields in oop
        data: [
            {
                list: {
                    date: '2021-7-1',
                    details: 'เงินเข้า',
                    debit: 500,
                    credit: 0,
                    // total: 500
                },
            },
  
            {
                list: {
                    date: '2021-7-1',
                    details: 'กินข้าวเช้า',
                    debit: 0,
                    credit: 80,
                    // total: 420
                }
            },
        ],
        totalDebit: 500,
        totalCredit: 80
    },
    getters: {
        ledger: (state) => state.data, 
        totalDebit: (state) => state.totalDebit,
        totalCredit: (state) => state.totalCredit
    },


    // same private setter ใน oop , เปลี่ยนค่าใน state 
    mutations: {
        add(state, { payload }) {
            state.data.push(payload)
            if(payload.list.credit === 0 )
            {
                state.totalDebit += payload.list.debit
            } 
            else if(payload.list.debit === 0) {
                state.totalCredit += payload.list.credit
            }
        },

    },


    // same action public methods , ให้ภายนอกเรียกใช้ or ดึงข้อมูลจากภายนอก
    actions: {
      addLadger({ commit }, payload) {
        // todo: call cpi to add data
        commit("add", {payload})
    },
 },

    modules: {},

})