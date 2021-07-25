<template>
    <div>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th class="detail">Details</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="led in ledger" :key="led">
                
                <td>{{ led.list.date }}</td>
                <td class="detail">{{ led.list.details }}</td>
                <td v-if="led.list.credit === 0 ">{{ led.list.debit }}</td>
                <td v-if="led.list.credit === 0 ">0</td>
                <td v-if="led.list.debit === 0 ">0</td>
                <td v-if="led.list.debit === 0 ">{{ led.list.credit}}</td>
                <td>{{ led.list.total }}</td>
                <td>{{ fetchLedger() }}</td>
                
            </tr>

            <tr class="total">
                <td>รวมทั้งหมด</td>
                <td>{{ fetchLedger() }}</td>
                <td>{{ totalDebit }}</td>
                <td>{{ totalCredit }}</td>
                <td>{{ totalDebit - totalCredit}}</td>
            </tr>

        </tbody>


    </table>
    </div>
  
</template>

<script>
import LedgerStore from '@/store/Ledger'
export default {
    data(){
        return {
            ledger: [],
            form : {
                list: {
                    date: '',
                    details: '',
                    debit: '',
                    credit: '',

                }
            },
            totalDebit: [],
            totalCredit: [],
        
        }
    },
    

    created() {
            // use this call methods in component ตัวเอง
            this.fetchLedger()
    },
    
    methods: {
        fetchLedger() {
            this.ledger = LedgerStore.getters.ledger
            this.totalDebit = LedgerStore.getters.totalDebit
            this.totalCredit = LedgerStore.getters.totalCredit
        }

    }
}
</script>

<style lang="scss" scoped>

table {
    border: 3px solid #AA7070;
    border-collapse: collapse;
    width:70%; 
    margin-left:15%; 
    margin-right:15%;
    text-align: center;
}

thead {
    background-color: #AA7070;
    color : #F0E9E9;
    font-weight: normal;
    font-size: 1.2em;
}

td {
    border-left: 3px solid #AA7070;
}

.total {
    border-top: 2px solid #AA7070;
}

.detail {
  width: 50%;
}

</style>