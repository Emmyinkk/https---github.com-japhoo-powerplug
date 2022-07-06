<template>
    <div class="Navbar3">
        <div class="nav">
            <ul class="navbar">
                <div class="top-nav">
                    <div class="l-nav">
                        <li><router-link to="/"><img src="@/assets/newLogo.png" alt="Powerplug logo"></router-link></li>
                    </div>
                    <div @click="onClick()" class="bar">
                        <i class="ri-menu-line menu"></i>
                    </div>
                </div>
                <div class="pop">
                    <div class="r-nav" id="menu-bar">
                        <div @click="onClick2()">
                            <i class="ri-close-line close"></i>
                        </div>
                        <transition appear name="slide-up">
                            <li @click="onClick2()" class="l-item"><router-link to="/">Home</router-link></li>
                        </transition>
                        <transition appear name="slide-up1">
                            <li @click="onClick2()" class="l-item"><router-link to="/merchant">Merchant</router-link></li>
                        </transition>
                        <transition appear name="slide-up2">
                            <li @click="onClick2()" class="l-item"><a href="#">Find My Token</a></li>
                        </transition>
                        <transition appear name="slide-up3">
                            <li @click="onClick2()" class="l-item"><router-link to="/FAQ">FAQ</router-link></li>
                        </transition>
                        <transition appear name="slide-up4">
                            <li @click="onClick2()" class="l-item"><router-link to="/contact">Contact Us</router-link></li>
                        </transition>
                        <div class="iconss">
                            <i class="ri-facebook-line n-icon spacee"></i>
                            <i class="ri-instagram-line n-icon spacee"></i>
                            <i class="ri-twitter-line n-icon spacee"></i>
                            <i class="ri-linkedin-line n-icon"></i>
                            <p class="ic-cont">© 2021 PowerPlug. Powered by Hespat Technology LTD.</p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        <!-- <div class="topH">
            <ul class="headerNav">
                <router-link class="mHeaderNav" to="/buyElectricity"><li>Buy Electricity</li></router-link>
                <span class="mHeaderNav disabled-link"><router-link to="/orderReview"><li>Order Review</li></router-link></span>
                <span class="mHeaderNav disabled-link"><router-link to="/completeOrder"><li>Order Complete</li></router-link></span>
            </ul>
        </div> -->
    </div>
</template>
<script>
    export default {
        name: 'Navbar3',
         methods: {
            onClick() {
                const navMenu = document.getElementById('menu-bar')

                if(navMenu.classList.contains('show-menu') === false) {
                    navMenu.classList.add('show-menu');
                }
            },
            onClick2() {
                const navMenu = document.getElementById('menu-bar')

                if(navMenu.classList.contains('show-menu') === true) {
                    navMenu.classList.remove('show-menu');
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
</style>