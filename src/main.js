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
        meterName: '',
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
        addMeterName (state, mName) {
            state.amount = mName
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

