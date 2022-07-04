<template>
<Navbar3></Navbar3>
<div class="topH">
    <ul class="headerNav">
        <router-link class="mHeaderNav" to="/buyElectricity"><li class="list">Buy Electricity</li></router-link>
        <span class="mHeaderNav disabled-link"><router-link to="/orderReview"><li>Order Review</li></router-link></span>
        <span class="mHeaderNav disabled-link"><router-link to="/completeOrder"><li>Order Complete</li></router-link></span>
    </ul>
</div>
<div class="header">
    <p class="chang">There's been slight changes in tariff across some DisCos (this means you may receive lesser or more units from the usual amount). 
        For more information about this, please reach out to Your Electricity Distribution company.
    </p> 
</div>
<div class="buyElectricity">
    <div class="hero2">
        <div class="container">
            <p class="gren">{{ meterName }}</p>
            <form @submit.prevent="onSubmit" class="form" id="my_form" action="">
                <div class="form-control" :class="{invalid: buyerNameValidity === 'invalid'}">
                    <transition appear name="slide-fade2">
                        <input type="text" placeholder="Buyer Name" id="name" v-model.trim = "buyerName" @blur="validateInput">
                    </transition>
                    <p v-if="buyerNameValidity === 'invalid'" class="msg">This field must not be empty!</p>
                </div>
                <div class="form-control" :class="{invalid: buyerEmailValidity === 'invalid'}">
                    <transition appear name="slide-fade">
                        <input type="email" placeholder="Email" id="email" v-model.trim = "buyerEmail" @blur="validateInput2">
                    </transition>
                    <p v-if="buyerEmailValidity === 'invalid'" class="msg">This field must not be empty!</p>
                </div>
                <div class="form-control" :class="{invalid: amountValidity === 'invalid'}">
                        <transition appear name="slide-fade2">
                           <input type="number" placeholder="&#8358; Amount" class="i-size" v-model ="amount"  @blur="validateInputA">
                        </transition>
                        <p v-if="amountValidity === 'invalid'" class="msg">This field must not be empty!</p>
                        <p class="fee">A service fee of &#8358;100 will be added automatically</p>
                </div>
                 <div class="msg2">
                    <p>All fields must be filled</p> 
                    <i @click="onClose2()" class="ri-close-line"></i>
                </div>
                <button id="pay">Pay {{ results }}</button>
            </form>
        </div>
    </div>
</div>
<Footer></Footer>
</template>

<script>
import Navbar3 from '@/components/Navbar3.vue';
import Footer from '@/components/Footer.vue';
    export default {
        name: 'AboutView',
        components: {
            Navbar3,
            Footer
        },
        data() {
            return {
                register: '',
                noFiles: null,
                charges: 100,
                confirm: false,
                buyerNameValidity: 'pending',
                buyerEmailValidity: 'pending',
                files: null,
                amountValidity: 'pending',
            }   
        },
        computed: {
            buyerNumber: {
                get() {
                    return this.$store.state.buyerNumber
                },
                set(value) {
                    this.$store.commit('addBuyerNumber', value)
                }
            },
            buyerState: {
                get() {
                    return this.$store.state.buyerState
                },
                set(value) {
                    this.$store.commit('addBuyerState', value)
                }
            },
            buyerMeter: {
                get() {
                    return this.$store.state.buyerMeter
                },
                set(value) {
                    this.$store.commit('addBuyerMeter', value)
                }
            },
            buyerMeterType: {
                get() {
                    return this.$store.state.buyerMeterType
                },
                set(value) {
                    this.$store.commit('addBuyerMeterType', value)
                }
            },
            elecProvider: {
                get() {
                    return this.$store.state.elecProvider
                },
                set(value) {
                    this.$store.commit('addElecProvider', value)
                }
            },
            buyerName: {
                get() {
                    return this.$store.state.buyerName
                },
                set(value) {
                    this.$store.commit('addBuyerName', value)
                }
            },
            buyerEmail: {
                get() {
                    return this.$store.state.buyerEmail
                },
                set(value) {
                    this.$store.commit('addBuyerEmail', value)
                }
            },
            amount: {
                get() {
                    return this.$store.state.amount
                },
                set(value) {
                    this.$store.commit('addAmount', value)
                }
            },
            meterName: {
                get() {
                    return this.$store.state.meterName
                },
                set(value) {
                    this.$store.commit('addMeterName', value)
                }
            },
            result() {
                if(this.amount === '') {
                    return ''
                } else {
                    return parseInt(this.charges) + parseInt(this.amount)
                }
            },
            results() {
                 if(this.amount === '') {
                    return ''
                } else {
                    return '₦'+ this.result.toLocaleString()
                }
            },
        },
        methods: {
            onSubmit() {
                const message = document.querySelector ('.msg2');

                if (this.amount === "" || this.buyerName === "" || this.buyerEmail === "" ) {    
                    message.style.visibility = 'visible';
                    message.style.opacity = '1';
                    message.style.height = '25px'
                    message.style.padding = '.5em'
                    message.style.marginBottom = '.5em'
                    message.style.fontSize = '14px'
                } 
                else {
                    this.$router.push('/orderReview')
                }   
            },
            onClose2() {
                const message = document.querySelector ('.msg2')

                if(message.style.visibility == 'visible') {
                        message.style.visibity = 'hidden'
                        message.style.opacity = '0'
                        message.style.height = '0'
                        message.style.padding = '0'
                        message.style.marginBottom = '0'
                        message.style.fontSize = '0'
                }
            },
            validateInput() {
                if(this.buyerName === '') {
                    this.buyerNameValidity = 'invalid';
                } else {
                    this.buyerNameValidity = 'valid'
                }
            },
            validateInput2() {
                if(this.buyerEmail === '') {
                    this.buyerEmailValidity = 'invalid';
                } else {
                    this.buyerEmailValidity = 'valid'
                }
            },
             validateInputA() {
                if(this.$store.state.amount === '') {
                    this.amountValidity = 'invalid';
                } else {
                    this.amountValidity = 'valid'
                }
            },
        }
    }
</script>

<style scoped>
.nav {
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .disabled-link {
        cursor: not-allowed;
    }

    .disabled-link > a {
        display: inline-block;
        pointer-events: none;
        text-decoration: none;
    }
    .list {
        margin-top: .5em;
    }
    .fee {
        font-size: 12px;
    }
@media only screen and (min-width: 280px) {

    .topH {
        margin-top: 3.2em;
    }
    .mHeaderNav {
        padding: 1em;
    }
    .headerNav a {
        font-size: 12px;
    }
}
@media only screen and (min-width: 1024px) {
    .Navbar3 {
        margin-top: -.8em;
        z-index: 999;
    }
    .topH {
        margin-top: 5em;
    }
    .pop {
        padding-top: 0em;
        margin-top: 1em;
        margin-right: 0em;
    }
    .l-item {
        margin-top: -.5em;
    }
    .mHeaderNav {
        padding: 1.5em;
    }
    .headerNav a {
        font-size: 15px;
    }
}
    .headerNav {
        display: flex;
        justify-content: space-between;
        gap: .1em;
    }
    .headerNav a {
        color: white;
    }
    .headerNav a:hover {
        background: linear-gradient(90.05deg, #D91821 -5.66%, #FB0F1A 115.63%);
    }
    .mHeaderNav {
        border-radius: 0;
        box-shadow: none;
        flex-grow: 1;
        flex-basis: 0;
        background: #C4C4C4;
        text-align: center;
    }
    .buyElectricity {
        display: flex;
        height: 50vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .picked {
        background: linear-gradient(90.05deg, #D91821 -5.66%, #FB0F1A 115.63%);
    }
    .result {
        display: none;
    }
    .beforeC {
        display: inline-block;
        font-size: 20px;
        vertical-align: middle;
    }
    .afterC {
        display: none;
        font-size: 20px;
        vertical-align: middle;
    }
    .show {
        display: block;
    }
    .slide-fade-enter-active,
    .slide-fade2-enter-active,
    .slide-fade3-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active,
    .slide-fade2-leave-active,
    .slide-fade3-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
    .slide-fade2-enter-from,
    .slide-fade2-leave-to {
        transform: translateX(-20px);
        opacity: 0;
    }
    .slide-fade3-enter-from,
    .slide-fade3-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
</style>