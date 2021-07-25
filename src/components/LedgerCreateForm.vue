<template>
  <div>
      <h1>General Ledger 2021</h1>
      <div>
            
            <div>
                <label for="date">Date (d/m) </label>
                <input type="date" v-model="form.list.date">
                <label for="details">Details...... </label>
                <input type="text" v-model="form.list.details">
            </div>
            <br>
            <div>
                <label for="debit">Debit (฿) </label>
                <input type="text" v-model="form.list.debit">
                <label for="credit">Credit (฿) </label>
                <input type="text" v-model="form.list.credit">
                <br>
            </div>
            
            <button @click="addLadger">Add</button>

      </div>
  </div>
</template>

<script>
import LedgerStore from '@/store/Ledger'
export default {
    data() {
        return {
            ledger: [],
                form : {
                list: {
                    date: '',
                    details: '',
                    debit: '',
                    credit: '',
                    // total: ''

                }
            }
        }
    },

        methods: {
        clearForm() {
            this.form = {
                list: {
                    date: '',
                    details: '',
                    debit: '',
                    credit: '',

                }
            }
        },

        addLadger() {
            let payload = {
                list: {
                    date: this.form.list.date,
                    details: this.form.list.details,
                    debit: parseInt(this.form.list.debit, 10),
                    credit: parseInt(this.form.list.credit, 10)
                }

            }
            // todo : call action pokemonStore add data
            console.log(payload)
            LedgerStore.dispatch("addLadger", payload)
            this.clearForm()
        },
        
    }

}
</script>

<style lang="scss" scoped>

h1 {
    margin-bottom: 50px;
}

button {
    
    background-color: #8B5D5D;
    margin: 20px 0 65px 0;
    border: none;
    
    padding: 10px 25px;
    border-radius: 6px;

    color: whitesmoke;
    font-size: 1em;
    text-align: center;
}

label {
    margin: 50px 10px 10px 50px;
}

</style>