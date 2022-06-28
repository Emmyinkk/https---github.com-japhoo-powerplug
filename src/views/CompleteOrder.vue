<template>
<Navbar4 />
     <div class="topH">
        <ul class="headerNav">
            <span class="mHeaderNav disabled-link"><router-link to="/buyElectricity"><li>Buy Electricity</li></router-link></span>
            <span class="mHeaderNav disabled-link"><router-link to="/orderReview"><li>Order Review</li></router-link></span>
            <router-link class="mHeaderNav" to="/completeOrder"><li class="list">Order Complete</li></router-link>
        </ul>
    </div>
    <div class="successful">
        <div class="s-container">
            <p class="s-head">Payment Succesful</p>
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
        margin-top: .7em;
    }

@media only screen and (min-width: 280px) {

    .topH {
        margin-top: 3em;
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
        margin-top: 4.2em;
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
    .completeOrder {
        margin-top: 2em;
    }
    .btn-payment {
        flex-grow: 1;
        flex-basis: 0;
    }
   .left {
        padding-top: 1em;
        padding-bottom: .5em;
        font-size: 12px;
    }
    #color {
        color: #D91821;
    }
</style>