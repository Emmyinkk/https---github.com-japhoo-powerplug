<template>
    <div>
        <Navbar4 />
        <div class="topH">
            <ul class="headerNav">
                <span class="mHeaderNav disabled-link pad2"><router-link to="/buyElectricity"><li>Buy Electricity</li></router-link></span>
                <span class="mHeaderNav disabled-link pad2"><router-link to="/orderReview"><li>Order Review</li></router-link></span>
                <router-link class="mHeaderNav pad" to="/completeOrder"><li class="list">Order Complete</li></router-link>
            </ul>
        </div>
        <div class="successful">
            <div class="s-container">
                <p class="s-head">Order Submitted</p>
                <div class="s-cont">
                    <img src="@/assets/Symbol.png" alt="">
                    <p class="ss-head">Your Payment will be confirmed, you will get an email and SMS shortly!</p>
                </div>
                <div class="s-item">
                    <div class="s-item-container">
                        <button @click="more()" class="btn-payment" id="more">Buy More</button>
                        <button @click="home()" class="btn-payment" id="g-home">Go Home</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar4 from '@/components/Navbar4.vue'; 
import Footer from '@/components/Footer.vue';

    export default {
        components: {
            Navbar4,
            Footer
        },
        methods: {
            more() {
                const payment = document.querySelector ('.successful');
                
                payment.style.display = 'none';
                this.$router.push('/buyElectricity')
            },
            home() {
                this.$router.push('/')
                this.$store.commit('reset')
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
    .pad1, .pad {
        padding: 1em;
    }
    .pad2 {
        padding: .75em;
    }
    .completeOrder {
        margin-top: 2em;
    }
    .btn-payment {
        flex-grow: 1;
        flex-basis: 0;
    }
    .list {
        padding-top: .3em;
    }
   .left {
        padding-top: 1em;
        padding-bottom: .5em;
        font-size: 12px;
    }
    #color {
        color: #D91821;
    }
    .picked {
        background: linear-gradient(90.05deg, #D91821 -5.66%, #FB0F1A 115.63%);
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
    .list {
        padding-top: 0em;
    }
}

</style>