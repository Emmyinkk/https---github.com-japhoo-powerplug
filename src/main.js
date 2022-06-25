import { createApp } from 'vue'
import { createStore } from 'vuex'
import Notifications from '@kyvg/vue3-notification'
import VueCreditCardValidation from 'vue-credit-card-validation'
import App from './App.vue'
import '@/assets/style.css';
import router from './router'
import 'aos/dist/aos.css'


const store = createStore({
    state() {
        return {
            buyerNumber: '',
            elecProvider: 'Distribution Company',
            buyerState: 'State',
            buyerMeterType: 'Prepaid',
            buyerMeter: '',
            buyerName: '',
            buyerEmail: '',
            amount: '',
        }
    },
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
    }
}); 

createApp(App).use(store).use(Notifications).use(VueCreditCardValidation).use(router).mount('#app')

