<template>
    <div class="nav">
        <ul class="navbar">
            <div class="top-nav">
                <div class="l-nav">
                    <li><router-link to="/"><img src="@/assets/newLogo.png" alt="Powerplug logo"></router-link></li>
                </div>
                 <div @click="onClick()" class="bar">
                    <i class="ri-dashboard-line menu"></i>
                </div>
            </div>
            <div class="pop">
                <div class="r-nav" id="menu-bar">
                    <div @click="onClick2()">
                        <i class="ri-close-line close"></i>
                    </div>
                    <transition appear name="slide-up">
                        <li @click="onClick2()" class="l-item"><router-link to="/" active-link='active'>Home</router-link></li>
                    </transition>
                    <transition appear name="slide-up1">
                        <li @click="onClick2()" class="l-item"><router-link to="/merchant">Merchant</router-link></li>
                    </transition>
                    <transition appear name="slide-up2">
                        <li @click="onClick2()" class="l-item"><router-link to="/findMyToken">Find My Token</router-link><a href="#"></a></li>
                    </transition>
                    <transition appear name="slide-up3">
                        <li @click="onClick2()" class="l-item"><router-link to="/FAQ">FAQ</router-link></li>
                    </transition>
                    <transition appear name="slide-up4">
                        <li @click="onClick2()" class="l-item"><router-link to="/contact">Contact Us</router-link></li>
                    </transition>
                    <li class="l-item log">
                        <button @click="onClick2()"><a href="#hero" active-link=''>Buy Electricity</a></button>
                    </li>
                    <div @click="onClick2()" class="iconss">
                        <a href="https://web.facebook.com/powerplugng/" target="_blank"><i class="ri-facebook-line n-icon spacee"></i></a>
                        <a href="https://www.instagram.com/powerplugng/" target="_blank"><i class="ri-instagram-line n-icon spacee"></i></a>
                        <a href="https://twitter.com/powerplugng" target="_blank"><i class="ri-twitter-line n-icon spacee"></i></a>
                        <a href="https://www.linkedin.com/company/powerplugng/" target="_blank"><i class="ri-linkedin-line n-icon"></i></a>
                        <p class="ic-cont">© 2021 PowerPlug. Powered by Hespat Technology LTD.</p>
                    </div>
                </div>
            </div>
            <div class="m-nav">
              <button><a href="#hero">Buy Electricity</a></button>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
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
    .active-link{
        color: #D91821;
        /* border-bottom: 2px solid red; */
    }
    .active-link a {
        color: #D91821;
    }
    .slide-up-enter-active {
        transition: all 1s ease;
    }
    .slide-up1-enter-active {
        transition: all 1.2s ease;
    }
    .slide-up2-enter-active {
        transition: all 1.4s ease;
    }
    .slide-up3-enter-active {
        transition: all 1.6s ease;
    }
    .slide-up4-enter-active {
        transition: all 1.8s ease;
    }

    .slide-up-enter-from,
    .slide-up1-enter-from,
    .slide-up2-enter-from,
    .slide-up3-enter-from,
    .slide-up4-enter-from
     {
        transform: translateY(-20px);
        opacity: 0;
    }
</style>