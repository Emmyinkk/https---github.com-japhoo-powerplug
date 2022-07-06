<template>
    <div class="footer">
        <div class="f-container">
            <div class="long">
                <div class="powerPlug">
                    <div class="pp-img">
                        <img src="@/assets/image18.png" alt="">
                    </div>
                </div>
                <div class="f long2">
                    <div class="icons2">
                        <a href="https://web.facebook.com/powerplugng/" target="_blank"><i class="ri-facebook-line n-icon2 "></i></a>
                        <a href="https://www.instagram.com/powerplugng/" target="_blank"><i class="ri-instagram-line n-icon2 "></i></a>
                        <a href="https://twitter.com/powerplugng" target="_blank"><i class="ri-twitter-line n-icon2 "></i></a>
                        <a href="https://www.linkedin.com/company/powerplugng/" target="_blank"><i class="ri-linkedin-line n-icon2"></i></a>
                    </div>
                    <div class="move">
                        <p class="cont">Contact</p>
                        <p class="cont">hello@powerplug.ng</p>
                    </div>
                </div>
            </div>
            <div class="f-flex">
                <div class="f-element part">
                    <p class="f-head">Products and Services</p>
                    <router-link :to="{ name: 'Home', hash: '#hero', replace: 'true'}">Buy Electricity</router-link><br>
                    <!-- <a href="#hero">Buy Electricity</a><br> -->
                    <a href="#">Get Electrician <span>coming soon</span></a><br>
                    <a href="#">Get Generator Repairer <span>coming soon</span></a><br>
                    <a href="#">Get AC Repairer <span>coming soon</span></a><br>
                    <a href="#">Install Solar/Inverter <span>coming soon</span></a><br>
                    <a href="#">Power Shop <span>coming soon</span></a><br>
                </div>
                <div class="f-flex2">
                    <div class="f-element">
                        <p class="f-head">Company</p>
                        <a href="#">Blog</a><br>
                        <a href="#">Press</a><br>
                        <a href="#">About Us</a>
                    </div>
                    <div class="f-element">
                        <p class="f-head">Help</p>
                        <router-link to="/FAQ">FAQ</router-link><br>
                        <router-link to="/contact">Contact Us</router-link>
                    </div>
                    <div class="f-element">
                        <p class="f-head">Transparency</p>
                        <a href="#">Terms and Conditions</a><br>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div class="f short">
                <p class="cont1">Contact</p>
                <p class="cont1">hello@powerplug.ng</p>
                <div class="icons2">
                    <a href="https://web.facebook.com/powerplugng/" target="_blank"><i class="ri-facebook-line n-icon2 "></i></a>
                    <a href="https://www.instagram.com/powerplugng/" target="_blank"><i class="ri-instagram-line n-icon2 "></i></a>
                    <a href="https://twitter.com/powerplugng" target="_blank"><i class="ri-twitter-line n-icon2 "></i></a>
                    <a href="https://www.linkedin.com/company/powerplugng/" target="_blank"><i class="ri-linkedin-line n-icon2"></i></a>
                </div>
            </div>
        </div>
        <hr>
        <p class="copyright">© 2021 PowerPlug. Powered by Hespat Technology LTD.</p>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        
    }
</script>