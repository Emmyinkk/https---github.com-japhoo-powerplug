<template>
    <Navbar3></Navbar3>
        <div class="topH">
            <ul class="headerNav">
                <router-link class="mHeaderNav" to="/buyElectricity"><li>Buy Electricity</li></router-link>
                <router-link class="mHeaderNav" to="/orderReview"><li>Order Review</li></router-link>
                <span class="mHeaderNav disabled-link"><router-link to="/completeOrder"><li>Order Complete</li></router-link></span>
            </ul>
        </div>
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
            <div></div>
            <div class="or-container2">
                <div class="left">
                    <p class="total">Grand Total </p>
                    <p>&#8358; {{ result }}</p>
                </div>
            </div>
            <hr class="or-mini">
            <div class="or-container">
                <div class="or-flex2">
                    <button @click="cardPay()" class="or-payment grBa" id="payment">
                        <p class="or-type-t">Pay With Card</p>
                        <img src="../assets/visa.png" alt="" >
                        <img src="../assets/amex.png" alt="">
                        <img src="../assets/mastercard.png" alt="">
                        <img src="../assets/discover.png" alt="">
                    </button>
                    <div class="or-button grBa">
                        <button @click="onClick()" id="transfer">Bank Transfer</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
</template>

<script>
import Navbar3 from '@/components/Navbar3.vue'; 
import Footer from '@/components/Footer.vue';

    export default {
        components: {
            Navbar3,
            Footer
        },
        data() {
            return {
                charges: 100,
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
            }
        },
        methods: {
            onClick() {
                if(this.$store.state.buyerNumber === "" || this.$store.state.buyerMeter === "" || this.$store.state.buyerMeterType === "" || this.$store.state.buyerName === "" || this.$store.state.buyerEmail === "") {

                } else {
                    this.$router.push('/bankTransfer')
                }
            },
            cardPay() {
                // this.$router.push('/cardPayment')
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
    .picked {
        background: linear-gradient(90.05deg, #D91821 -5.66%, #FB0F1A 115.63%);
    }
    .orderReview {
        margin-top: 5em;
        
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
        margin-top: 3em;
        width: 100%;
    }
    .or-container2 {
        width: 100%;
    }
    .or-payment {
        box-sizing: border-box;
        width: 100%;
        padding: .5em;
        border: 1px solid #636363;
        box-shadow: none;
        display: flex;
        justify-content: space-between;
        background: white;
    }
    .or-button button {
        padding: 1.5em;
        width: 100%;
    }
</style>