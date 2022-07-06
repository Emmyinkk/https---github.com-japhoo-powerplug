import { createApp } from 'vue'
import { createStore } from 'vuex'
import Notifications from '@kyvg/vue3-notification'
import createPersistedState from 'vuex-persistedstate'
import App from './App.vue'
import '@/assets/style.css';
import router from './router'
import 'aos/dist/aos.css'

function initialState () {
    return { 
        buyerNumber: '',
        elecProvider: 'Distribution Company',
        buyerState: 'State',
        buyerMeterType: 'Prepaid',
        buyerMeter: '',
        buyerName: '',
        buyerEmail: '',
        amount: '',
        charges: '',
        meterName: '',
        bank: '',
        account_no: '',
        account_name: '',
    }
}

const store = createStore({
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
        }),
    ],
    state: initialState,
    mutations: {
        addElecProvider (state, disco) {
            state.elecProvider = disco
        },
        addBuyerNumber (state, num) {
            state.buyerNumber = num
        },
        addBuyerState (state, bState) {
            state.buyerState = bState
        },
        addBuyerMeter (state, number) {
            state.buyerMeter = number
        },
        addBuyerMeterType (state, type) {
            state.buyerMeterType = type
        },
        addBuyerName (state, name) {
            state.buyerName = name
        },
        addBuyerEmail (state, email) {
            state.buyerEmail = email
        },
        addAmount (state, price) {
            state.amount = price
        },
        addCharges(state, charges) {
            state.charges = charges
        },
        addMeterName (state, mName) {
            state.amount = mName
        },
        addBank (state, bank) {
            state.bank = bank
        },
        addAccount_no (state, aNumber) {
            state.account_no = aNumber
        },
        addAccount_name (state, aName) {
            state.account_name = aName
        },
        reset (state) {
            // acquire initial state
            const s = initialState()
            Object.keys(s).forEach(key => {
              state[key] = s[key]
            })
          }
    },
}); 

createApp(App).use(store).use(Notifications).use(router).mount('#app')

