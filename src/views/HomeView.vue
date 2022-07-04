<template>
<Navbar></Navbar>
<div class="home">
    <!-- <div class="front-menu">
            <ul>
                <li class="fButton"><router-link to="/merchant">Merchant</router-link></li>
                <li class="fButton"><router-link to="/FMT">Find My Token</router-link></li>
                <li class="fButton"><router-link to="/FAQ">FAQ</router-link></li>
            </ul>
    </div> -->
    <div class="hero">
        <transition appear name="fade">
            <div class="headerDiv">
                <p class="buyP">Buy Electricity Instantly With Powerplug</p>
                <p class="miniText">We're here to help you pay for your electricity bills from your comfort and get your tokens instantly</p>
                <button><a href="#hero">Buy Electricity<span><i class="ri-arrow-down-line down"></i></span></a></button>
            </div>
        </transition>
    </div>
        <div class="backgroundDiv">
            <div class="i-container" id="hero">
                <div class="l-hero" data-aos="fade-right">
                    <!-- <h5>We are Powerplug</h5> -->
                    
                    <form @submit.prevent="onSubmit" class="myForm" id="myForm" action="">
                        <div class="form-control" :class="{invalid: buyerNumberValidity === 'invalid'}">
                            <transition appear name="slide-in">
                                <input type="tel" placeholder="Phone Number" class="i-size" v-model ="buyerNumber" @blur="validateInput4">
                            </transition>
                            <p v-if="buyerNumberValidity === 'invalid'" class="msg">This field must not be empty!</p>
                            <p class="msg1">The number appears to be wrong!</p>
                        </div>
                        <div class="form-control" :class="{invalid: buyerMeterValidity === 'invalid'}">
                            <transition appear name="slide-in4">
                                <input type="text" inputmode="numeric" placeholder="Meter/Account Number" class="i-size" v-model = "buyerMeter"  @blur="validateInput1">
                            </transition>
                            <p v-if="buyerMeterValidity === 'invalid'" class="msg">This field must not be empty!</p>
                            <p class="msg3">The number appears to be wrong!</p>
                        </div>
                        <div class="form-control custom-select" :class="{invalid: buyerMeterTypeValidity === 'invalid'}">
                            <transition appear name="slide-in3">
                                <select name="meterNo" id="meterNo"  v-model = "buyerMeterType"  @blur="validateInput2">
                                    <option selected>Meter Type</option>
                                    <option value="Prepaid">Prepaid</option>
                                    <option value="Postpaid" disabled>Postpaid</option>
                                </select>
                            </transition>
                            <p v-if="buyerMeterTypeValidity === 'invalid'" class="msg">An option must be choosen!</p>
                        </div>
                        <div class="form-control custom-select" :class="{invalid: buyerStateValidity === 'invalid'}">
                            <transition appear name="slide-in1">
                                <select id="State" name="State" v-model = "buyerState"  @blur="validateInput3">
                                    <option selected>State</option>
                                    <option value="Delta">Delta</option>
                                    <option value="Edo">Edo</option>
                                    <option value="Ekiti">Ekiti</option>
                                    <option value="Ondo">Ondo</option>
                                </select>
                            </transition>
                            <p v-if="buyerStateValidity === 'invalid'" class="msg">An option must be choosen!</p>
                        </div>
                        <div class="form-control" id="select" :class="{invalid: elecProviderValidity === 'invalid'}" >
                            <transition appear name="slide-in2">
                                <select class="i-size" id="State" name="State" v-model = "elecProvider"  @blur="validateInput7" @click="apiCheck">
                                    <option selected>Distribution Company</option>
                                    <template v-for= "disco in discos" :key="disco.id">
                                        <option v-if="disco.status == 'enabled'"> {{ disco.shortName}}</option>
                                        <option v-if="disco.status == 'disabled'" :class="{'disabledd' : disco.shortName}" disabled> {{ disco.shortName }} (coming soon) </option>
                                    </template>
                                </select>
                            </transition>
                            <p v-if="elecProviderValidity === 'invalid'" class="msg">An option must be choosen!!</p>
                        </div>
                        <div class="msg2">
                            <p>All fields must be filled</p> 
                            <i @click="onClose2()" class="ri-close-line"></i>
                        </div>
                        <div class="form-control end">
                            <button class="proceed"><p>Proceed</p><span><i class="ri-arrow-right-up-line nextP"></i></span></button>
                            <div class="agent">
                                <p><a href="tel: 08112345678">Talk to Agent 08112345678</a></p>
                                <i class="ri-customer-service-2-line cCare"></i>
                            </div>
                        </div>
                    </form>
                </div> 
                <div class="r-hero" data-aos="fade-left">
                    <img src="../assets/mainImage.png" alt="image">
                </div> 
        </div>
        </div>
    <!-- <div class="service">
        <i class="ri-chat-4-fill chatbot" id="chatBot"></i>
    </div> -->
    <div class="section-about">
            <div class="aboutP">
        <div class="about">
            <div class="fill">
                <i class="ri-map-pin-2-fill"></i>
            </div>            
            <p class="aState"><span class="mainS">30+</span><br>States</p>
        </div>
        <div class="about">
            <div class="fill">
                <i class="ri-archive-drawer-fill"></i>
            </div>     
            <div class="postS">
                <p class="post"><span class="mainS">1000+</span> <br>
                    Postpaid & Prepaid Meters
                </p>
                <!-- <p></p>
                <p></p> -->
            </div>        
        </div>
        <div class="about">
            <div class="fill">
                <i class="ri-user-fill"></i>
            </div>            
            <p class="cus"><span class="mainS">90+</span><br>Customers</p>
        </div>
    </div>
    </div>
    <div class="reason">
        <div class="r_container">
            <div>
                <h3 data-aos="fade-right" class="gradient-text">Why should you use Powerplug?</h3>
                <img src="../assets/Group.png" alt="Chart" class="chart">
            </div>
            <div class="r-container" data-aos="fade-left">
                <div class="m-reason">
                    <i class="ri-smartphone-fill"></i>
                    <p>Purchase your token from your device</p>
                </div>
                <div class="m-reason down">
                    <i class="ri-lightbulb-fill"></i>
                    <p>Get your Electricity restored instantly</p>
                </div>
                <div class="m-reason">
                    <i class="ri-customer-service-fill"></i>
                    <p>24/7 customer support</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section2">
        <div class="aboutUs">
            <h3 class="gradient-text" data-aos="fade-left">About Us</h3>
            <p class="a-text" data-aos="fade-right">PowerPlug is an internet powered platform that allows users purchase electricity token instantly anywhere
                 and anytime. Our satisfaction is to provide our customers with ultimate convenience. Your Power plug anywhere, anytime</p>
        </div>
        <div class="product">
            <h3 class="gradient-text" data-aos="fade-right">Product and Services</h3>
            <div class="p_icon" data-aos="fade-left">
                <div class="_icon">
                    <a href="#hero"><i class="ri-lightbulb-flash-fill green"></i></a>
                    <p class="namE">Buy Electricity</p>
                </div>
                <div class="_icon">
                    <i class="ri-user-2-fill redd"></i>
                    <p class="namE">Get Electrician</p>
                    <p class="cms">Coming Soon</p>
                </div>
                <div class="_icon">
                    <i class="material-symbols-outlined redd">solar_power</i>
                    <!-- <img src="../assets/solarPanel.png" alt=""> -->
                    <p class="namE">Install Solar/Inverter</p>
                    <p class="cms">Coming Soon</p>
                </div>
                <div class="_icon">
                    <i class="material-symbols-outlined redd">shopping_cart</i>
                    <!-- <img src="../assets/cart.png" alt=""> -->
                    <p class="namE">Power Shop</p>
                    <p class="cms">Coming Soon</p>
                </div>
                <div class="_icon">
                    <img src="../assets/image24.png" alt="" class="gen">
                    <p class="namE">Get Generator Repairer</p>
                    <p class="cms">Coming Soon</p>
                </div>
                <div class="_icon">
                    <img src="../assets/image25.png" alt="" class="ac">
                    <p class="namE">Get AC Repairer</p>
                    <p class="cms">Coming Soon</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section3">
        <!-- class="gradient-text" -->
        <h5 data-aos="fade-right">Our Service Providers</h5>
        <div class="s-menu">
            <div class="s-menu-m">
                <div class="m-item">
                    <img src="../assets/bedc.png" alt="bedc logo" style="margin-top: 1.5em;">
                </div>
                <div class="m-item">
                    <img src="../assets/ikeja.png" alt="Ikeja electric logo">
                    <p>Coming Soon</p>
                </div>
                <div class="m-item">
                    <img src="../assets/ibedc.png" alt="IBEDC logo" >
                    <p>Coming Soon</p>
                </div>
                <div class="m-item">
                    <img src="../assets/ekedc.png" alt="Eko Electric logo">
                    <p>Coming Soon</p>
                </div>
               
            </div>
            <div class="s-menu-m">
                 <div class="m-item">
                    <img src="../assets/eedc.png" alt="Enugu Electric logo" >
                    <p>Coming Soon</p>
                </div>
                <div class="m-item">
                    <img src="../assets/aedc.png" alt="Abuja electric logo" >
                    <p>Coming Soon</p>
                </div>
                <div class="m-item">
                    <img src="../assets/phed.png" alt="PHED logo">
                    <p>Coming Soon</p>
                </div>
                <div class="m-item">
                    <img src="../assets/kedco.png" alt="Eko Electric logo">
                    <p>Coming Soon</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section4">
        <div class="ss-container">
            <div class="l-download" data-aos="fade-right">
                <img src="../assets/mobile.png" alt="image">
            </div>
            <div class="r-download">
                <h2 >Download Powerplug Mobile App Today</h2>
                <div class="download">
                    <button class="b-flex">
                        <img src="../assets/image21.png" alt="playstore">
                        <p>Soon On<br><span>Google Play</span></p>
                    </button>
                    <button class="b-flex2">
                        <img src="../assets/image22.png" alt="apple">
                        <p>Soon On<br><span>App Store</span></p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="section5">
        <div class="s_container">
            <h3 class="gradient-text" data-aos="fade-right">Testimonials</h3>
            <div class="s_flex">
                <div class="r_items">
                    <div class="contents">
                        <h2>Olaoluwa Adetula</h2>
                        <p>Top notch service by @powerplugng . Excellent service in less than 5mins. I got notified through text and email.</p>
                    </div>
               </div>
               <div class="r_items">
                    <div class="contents">
                        <h2>Henry</h2>
                        <p>As a first time user, I love your service. Highly commendable.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="l-section">
        <div class="l-container">
            <form @submit.prevent="emailRegister()" action="">
                 <div class="l-flex">
                <div class="l-loop">
                    <p class="s-loop">Stay in the loop</p>
                    <p class="s-loop2">Subscribe to receive the latest news and updates about TDA.
                        We promise not to spam you! </p>
                </div>
                <div class="r-loop">
                    <div class="form-control2">
                      <input type="email" placeholder="Enter Email Address" v-model="register" @blur="registerSure">
                      <button><p>Subscribe</p></button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
    <div class="success" id="hideMe">
        <p>Thanks for registering. We will definitely keep you in the loop!</p>
        <i @click="onClose()" class="ri-close-line"></i>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';
import AOS from "aos";

export default {
  name: 'HomeView',
  created() {
    this.fetchApi2()
  },
    setup() {
        onMounted(() => {
            AOS.init();
        })
    },
    components: {
        Navbar,
        Footer
    },
   data() {
            return {
                register: '',
                buyerStateValidity: 'pending',
                elecProviderValidity: 'pending',
                buyerNumberValidity: 'pending',
                buyerMeterValidity: 'pending',
                buyerMeterTypeValidity: 'pending',
                discos: '',              
            }   
        },
    computed: {
        // isDisabled () {
        //     return this.$store.state.elecProvider.filter( disco => disco.status == 'enabled')
        // },
        elecProvider: {
            get() {
                return this.$store.state.elecProvider
            },
            set(value) {
                this.$store.commit('addElecProvider', value)
            }
        },
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
    },
    methods: {
        onSubmit() {
            const message = document.querySelector ('.msg2')
            const prob = this.$store.state.buyerMeter.length
            const telephone = this.$store.state.buyerNumber.length;

             if (this.$store.state.buyerState === "State" || this.$store.state.buyerNumber === "" || telephone > 0 && telephone < 11 || telephone > 11 || this.$store.state.buyerMeter === "" || prob > 0 && prob < 11 || prob === 12 || prob > 13 || this.$store.state.buyerMeterType === "Meter Type" || this.$store.state.elecProvider === 'Distribution Company' ) {    
                    message.style.visibility = 'visible';
                    message.style.opacity = '1';
                    message.style.height = '25px'
                    message.style.padding = '.5em'
                    message.style.marginBottom = '.5em'
                    message.style.fontSize = '14px'
                    console.log("This is for disco " + this.$store.state.buyerState)
                    console.log("This is for store " + this.$store.state.elecProvider)
                } else {
                    message.style.display = 'none';
                    this.$router.push('/buyElectricity')
                }
        },
        emailRegister() {
            const success = document.querySelector ('.success')

            if(this.register !== '') {
               if(success.classList.contains('showw') === false) {
                    success.classList.add('showw')
               }
                this.register = '';
            }
        },
        onClose() {
            const success = document.querySelector ('.success')

             if(success.classList.contains('showw') === true) {
                    success.classList.remove('showw')
               }
        },
        onClose2() {
            const message = document.querySelector ('.msg2')

             if(message.style.visibility == 'visible') {
                    message.style.visibity = 'hidden'
                    message.style.opacity = '0'
                    message.style.height = '0px'
                    message.style.padding = '0'
                    message.style.marginBottom = '0'
                    message.style.fontSize = '0'
               }
        },
        fetchApi() {
            var axios = require('axios');
            var phoneNumber = this.$store.state.buyerNumber
            const API = 'https://beta.powerplug.ng/api/class.php'
            var config = {
                method: 'get',
                url: API + '?key=Autofill&PP_API_KEY=P_P_Auth_API_Master_key--><--(...)&phone=' + phoneNumber,
                headers: { }
            };

            axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                var result = JSON.stringify(response.data)                
                var result = JSON.parse(result)
                var state = result.state
                var res = result.res
                var meterNo = result.meter_no
                var meterName = result.meter_name
                var type = result.meter_type
                var email = result.email
                var fullname = result.fullname
                var disco = result.disco
                console.log(res)
                if(res == null) {
                   this.$store.state.buyerName 
                   this.$store.state.buyerEmail 
                   this.$store.state.buyerMeter
                   this.$store.state.buyerState 
                   this.$store.state.buyerMeterType
                   this.$store.state.elecProvider 
                   this.$store.state.meterName 
                } else {
                    this.$store.state.buyerEmail = email
                    this.$store.state.buyerName = fullname
                    this.$store.state.buyerMeter = meterNo
                    this.$store.state.buyerState = state
                    this.$store.state.buyerMeterType = type
                    this.$store.state.elecProvider = disco
                    this.$store.state.meterName = meterName
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        fetchApi2() {
            var axios = require('axios');

            var config = {
            method: 'get',
            url: 'https://beta.powerplug.ng/api/class.php?key=Discos&PP_API_KEY=P_P_Auth_API_Master_key--><--(...)',
            headers: { }
            };

            axios(config)
            .then((response) => {
                this.discos = response.data

                console.log(JSON.stringify(this.discos))
            })
            .catch(function (error) {
            console.log(error);
            });
        },
        validateInput4() {
            const telephone = this.$store.state.buyerNumber.toString().length;
            const wrongNo = document.querySelector ('.msg1')
            if(this.$store.state.buyerNumber === '') {
                this.buyerNumberValidity = 'invalid';
            } else {
                this.buyerNumberValidity = 'valid'
            }

            if (telephone > 0 && telephone < 11 || telephone > 11) {
                wrongNo.style.display = 'block'
            } else {
                wrongNo.style.display = 'none'
            }
            this.fetchApi()
        },
        validateInput3() {
            if(this.$store.state.buyerState === 'State') {
                this.buyerStateValidity = 'invalid';
            } else {
                this.buyerStateValidity = 'valid'
            }
        },
        validateInput7() {
            if(this.$store.state.elecProvider === 'Distribution Company') {
                this.elecProviderValidity = 'invalid';
            } else {
                this.elecProviderValidity = 'valid'
            }
        },
        validateInput2() {
            if(this.$store.state.buyerMeterType === '--Select your meter type--') {
                this.buyerMeterTypeValidity = 'invalid';
            } else {
                this.buyerMeterTypeValidity = 'valid'
            }
        },
        validateInput1() {
            const prob = this.$store.state.buyerMeter.length;
            const wrongN = document.querySelector ('.msg3')

            if(this.$store.state.buyerMeter === '') {
                this.buyerMeterValidity = 'invalid';
            } else {
                this.buyerMeterValidity = 'valid'
            }
            if (prob > 0 && prob < 11 || prob === 12 || prob > 13) {
                wrongN.style.display = 'block';
            }
            else {
                wrongN.style.display = 'none'
            }
        },
    },
}
</script>

<style scoped>
 @media only screen and (min-width: 280px) {
    .mainS {
       color: #2D2D2D; 
       font-size: 20px;
    }
    .alignL {
        font-size: 20px;
        text-align: left;
    }
    .l-loop {
        text-align: center;
    }
    .backgroundDiv {
        background-image: url('../assets/mainImage.png');
        background-repeat: no-repeat;
        background-position: center top;
        padding: 8em .5em 1em .5em;
    }
    .i-container {
        margin-top: 4em;
    }
    .headerDiv {
        margin-top: 0em;
        text-align: center;
    }
}
    .agent a {
        color: white;
        font-size: 12px;
    }
    .agent p {
        width: 60%;
        margin: 0 auto;
    }
    .agent i {
        position: absolute;
        font-size: 24px;
        width: 50%;
        height: 50%;
        overflow: auto;
        margin: auto;
        top: 0; left: 0; bottom: 0; right: -120px;
    }
    .section-about {
        margin-top: 80px;
        margin-bottom: 100px;
    }
    .m-reason p {
        font-weight: 500;
        font-size: 14.9932px;
        line-height: 140%;
        width: 80%;
        margin: 0 auto;
    }
    .m-reason i {
        margin-top: 1em;
        font-size: 50px;
        color: #D91821;
    }
    .aboutP {
        display: flex;
        justify-content: space-between;
        gap: .5em;
        width: 85%;
        margin: 0 auto;
    }
    .about {
        display: flex;
        text-align: center;
        flex-grow: 1;
        flex-basis: 0;
    }
    .showw {
        right: 0;
    }
    .aState, .cus{
        font-size: 12px;
        margin-top: 0em;
        text-align: left;
    }
    .disabledd {
        color: grey;
    }
    .postS {
        text-align: left;
        font-size: 12px;
    }
    .fill {
        margin-top: .5em;
        margin-right: .2em;
    }
    .about i {
        background: linear-gradient(90.05deg, #D91821 -5.66%, #FB0F1A 115.63%);
        border-radius: 50%;
        padding: .5em;
        color: white;
    }
    .headerDiv button {
        padding: 1.5em 2.5em;
        margin-top: 3em;
    }
    /* .down {
        margin-left: 5px;
        vertical-align: middle;
    } */
    .headerDiv a {
        color: white;
    }
    .fade-enter-from {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 3s ease;
    }
    .fade-leave-to {
        opacity: 0;
    }
    .fade-leave-active {
        transition: opacity 3s ease;
    }
    .slide-in-enter-active,
    .slide-in1-enter-active,
    .slide-in2-enter-active,
    .slide-in3-enter-active,
    .slide-in4-enter-active,
    .slide-in5-enter-active {
        transition: all 1s ease;
    }
    .slide-in-enter-from,
    .slide-in1-enter-from,
    .slide-in2-enter-from,
    .slide-in3-enter-from,
    .slide-in4-enter-from,
    .slide-in5-enter-from {
        opacity: 0;
    }
    .slide-in-enter-from {
        transform: translateX(-10px);

    }
    .slide-in1-enter-from {
        transform: translateX(-20px);
    }
    .slide-in2-enter-from {
        transform: translateX(-30px);
    }
    .slide-in3-enter-from {
        transform: translateX(-40px);
    }
    .slide-in4-enter-from {
        transform: translateX(-50px);
    }
    .slide-in5-enter-from {
        transform: translateX(20px);
    }
    @media only screen and (min-width: 768px) {

        .myForm {
            margin-top: 0em;
        }
        .l-loop {
            text-align: left;
        }
        .backgroundDiv {
            background-image: none;
            padding: 0em;
        }
        .mainS {
            font-weight: 700;
            font-size: 38.9825px;
            line-height: 37px;
        }
        .about {
            justify-content: center;
    }
        .aboutP {
            display: flex;
            justify-content: space-between;
            gap: 1em;
            width: 50%;
            margin: 0 auto;
        }
        .fill {
            margin-top: 1em;
        }
        .alignL {
            font-weight: 600;
            font-size: 30px;
            line-height: 140%;
            text-align: center;
        }
    }
    @media only screen and (min-width: 1024px) {
        .m-reason i {
            font-size: 90px;
            margin-top: 0em;
        }
        
        .alignL {
            font-weight: 600;
            font-size: 45.7012px;
            line-height: 140%;
            text-align: center;
        }
        .headerDiv {
            margin-top: 3em;
            text-align: center;
        }
        .agent a {
            color: white;
            font-size: 16px;
        }
        .agent i {
            position: absolute;
            font-size: 24px;
            width: 50%;
            height: 50%;
            overflow: auto;
            margin: auto;
            top: 0; left: 0; bottom: 0; right: -140px;
        }
    }
</style>
