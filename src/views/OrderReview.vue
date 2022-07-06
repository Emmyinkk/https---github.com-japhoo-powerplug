<template>
    <div>
        <Navbar3/>
        <div class="topH">
            <ul class="headerNav">
                <router-link class="mHeaderNav pad" to="/buyElectricity"><li class="list">Buy Electricity</li></router-link>
                <router-link class="mHeaderNav pad1" to="/orderReview"><li class="list">Order Review</li></router-link>
                <div class="mHeaderNav disabled-link pad2"><router-link  to="/completeOrder"><li>Order Complete</li></router-link></div>
            </ul>
        </div>
        <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
        <div class="orderReview">
            <div class="or-container">
                <div class="or-flex">
                    <div class="left">
                        <p>Meter/Account Number</p>
                        <p>{{ buyerMeter }}</p>
                    </div>
                    <div class="left">
                        <p>Meter Type</p>
                        <p>{{ buyerMeterType }}</p>
                    </div>
                    <div class="left">
                        <p>Name</p>
                        <p id="meter">{{ buyerName }}</p>
                    </div>
                    <div class="left">
                        <p>Phone Number</p>
                        <p>{{ buyerNumber }}</p>
                    </div>
                     <div class="left">
                        <p>Email</p>
                        <p>{{ buyerEmail }}</p>
                    </div>
                    <div class="left">
                        <p>Amount</p>
                        <p>&#8358; {{ amount }}</p>
                    </div>
                    <div class="left">
                        <p>Processing Fee</p>
                        <p>&#8358; {{ charges }}</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="or-container2 tottal">
                <div class="left">
                    <h2 class="total">Grand Total </h2>
                    <h2> {{ results }} </h2>
                </div>
            </div>
            <hr class="or-mini">
            <div class="resultt">
                <div class="or-flex2">
                    <button @click="cardPay()" class="or-payment grBa" id="payment">
                        <div class="or-type-t">
                            <p>Pay With Card</p>
                        </div>
                        <div class="imgs">
                            <img src="../assets/visa.png" alt="" >
                            <img src="../assets/amex.png" alt="">
                            <img src="../assets/mastercard.png" alt="">
                            <img src="../assets/discover.png" alt="">
                        </div>
                    </button>
                    <div class="or-button grBa">
                        <button @click.prevent="doAjax" id="transfer">Bank Transfer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- <Footer /> -->
</template>

<script>
import Navbar3 from '@/components/Navbar3.vue'; 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        components: {
            Navbar3,
            Loading
            // Footer
        },
        data() {
            return {
                charges: 100,
                isLoading: false,
                fullPage: true
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
            result() {
                    return parseInt(this.charges) + parseInt(this.amount)
            },
            results() {
                    return '₦'+ this.result.toLocaleString()
            },
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                }, 5000)
                this.sendApi()
                this.$router.push('/bankTransfer')
            },
            onCancel() {
                console.log('User cancelled the loader.')
            },
            onClick() {
                if(this.$store.state.buyerNumber === "" || this.$store.state.buyerMeter === "" || this.$store.state.buyerMeterType === "" || this.$store.state.buyerName === "" || this.$store.state.buyerEmail === "") {

                } else {
                    this.$router.push('/bankTransfer')
                    this.sendApi()
                }
            },
            cardPay() {
                // this.$router.push('/cardPayment')
            },
            sendApi() {
                var axios = require('axios');

                var config = {
                method: 'get',
                url: 'https://beta.powerplug.ng/api/class.php?PP_API_KEY=P_P_Auth_API_Master_key--><--(...)&key=BEDCForm&phone=08063050592&fullname=Api Test&state=Ondo&meter_type=Prepaid&meter_no=12345678901&email=japhetsoj53@gmail.com&amount=5000&duplicateCheck=1',
                headers: { }
                };

                axios(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    var result = JSON.stringify(response.data)                
                    var result = JSON.parse(result)
                    var res = result.res
                    console.log(res)
                })
                .catch(function (error) {
                    console.log(error);
                });
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
        display: block;
        pointer-events: none;
        text-decoration: none;      
    }
     .orderReview {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    a {
        color: white;
    }
    .left {
        padding-top: 1em;
        padding-bottom: .5em;
        font-size: 12px;
    }
    .or-container {
        margin-top: 4em;
        width: 100%;
    }
    .resultt {
        margin-top: 1em;
        width: 100%;
    }
    .or-container2 {
        width: 100%;
    }
    .pad1, .pad {
        padding: 1.2em;
    }
    .pad2 {
        padding: .9em;
    }
    .picked {
        background: linear-gradient(90.05deg, #D91821 -5.66%, #FB0F1A 115.63%);
    }
    .topH {
        position: fixed;
        width: 100%;
    }
    .loader {
        border: 16px solid #f3f3f3;
        border-top: 16px solid #3498db;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
        }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
@media only screen and (min-width: 1024px) {
    .Navbar3 {
        margin-top: -.8em;
        z-index: 999;
    }
    .l-item {
        margin-top: -.5em;
    }
    .pad1, .pad {
        padding: 1.5em;
    }
    .pad2 {
        padding: 1.41em;
    }
}
</style>