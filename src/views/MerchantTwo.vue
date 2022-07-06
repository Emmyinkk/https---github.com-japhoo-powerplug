<template>
    <div class="freeze">
        <Navbar/>
        <div class="merchantTwo">
            <div class="mt-container">
                <h2 class="reg">Register to be a Merchant</h2>
                <form @submit.prevent="onSubmit" action="">
                    <div class="form-flex">
                        <div class="form-control equal">
                            <p>Full Name<span class="asterisk"> *</span></p>
                            <transition appear name="slide-fade2">
                                <input type="text" v-model="fullName" @blur="errorCheck" class="input">
                            </transition>
                        </div>
                        <div class="form-control equal">
                            <p>Phone Number<span class="asterisk1"> *</span></p>
                            <transition appear name="slide-fade">
                                <input type="tel" v-model="phoneNumber" @blur="errorCheck1" class="input1">
                            </transition>
                        </div>
                    </div>
                    <div class="form-flex">
                        <div class="form-control equal">
                            <p>WhatsApp Number<span class="asterisk2"> *</span></p>
                            <transition appear name="slide-fade2">
                                <input type="tel" v-model="wPhoneNumber" @blur="errorCheck2" class="input2">
                            </transition>
                        </div>
                        <div class="form-control equal">
                            <p>Email Address<span class="asterisk3"> *</span></p>
                            <transition appear name="slide-fade">
                                <input type="email" v-model="EmailAddress" @blur="errorCheck3" class="input3">
                            </transition>
                        </div>
                    </div>
                    <div class="form-flex">
                        <div class="form-control equal">
                            <p>Select State<span class="asterisk4"> *</span></p>
                            <transition appear name="slide-fade2">
                                <select name="State" v-model = "mState" @blur="errorCheck4" class="input4">
                                    <option>State</option>
                                    <option value="Delta">Delta</option>
                                    <option value="Edo">Edo</option>
                                    <option value="Ekiti">Ekiti</option>
                                    <option value="Ondo">Ondo</option>
                                </select>
                            </transition>
                        </div>
                        <div class="form-control equal">
                            <p>City<span class="asterisk5"> *</span></p>
                            <transition appear name="slide-fade">
                                <input type="text" v-model = "mCity" @blur="errorCheck5" class="input5">
                            </transition>                        
                        </div>
                    </div>
                    <div class="form-flex">
                        <div class="form-control equal">
                            <p>Address<span class="asterisk6"> *</span></p>
                            <transition appear name="slide-fade2">
                                <input type="text" v-model = "mAddress" @blur="errorCheck6" class="input6">
                            </transition>
                        </div>
                        <div class="form-control equal">
                            <p>Business Name<span class="asterisk7"> *</span></p>
                            <transition appear name="slide-fade">
                                <input type="text" v-model = "mbName" @blur="errorCheck7" class="input7">
                            </transition>                         
                        </div>
                    </div>
                    <div class="form-flex">
                        <div class="form-control equal">
                            <p>Merchant Type<span class="asterisk8"> *</span></p>
                            <transition appear name="slide-fade2">
                                <select name="State" v-model = "merchantType"  @blur="errorCheck8" class="input8">
                                    <option>Merchant Type</option>
                                    <option value="POS">POS</option>
                                    <option value="Individual">Individual</option>
                                    <option value="SBO">Store/ Business owner</option>
                                </select>
                            </transition>
                        </div>
                        <div class="form-control equal">
                            <p>Password<span class="asterisk9"> *</span></p>
                            <transition appear name="slide-fade">
                                <div class="password">
                                    <input v-if="showPassword" type="text" class="input9" v-model="mPassword" @blur="errorCheck9" @click="remove()"/>
                                    <input v-else type="password" class="input9" v-model="mPassword" @blur="errorCheck9" @click="remove()"/> 
                                    <div class="control">
                                        <div class="button" @click="toggleShow">
                                            <span class="icon is-small is-right">
                                                <i :class="{ 'ri-eye-off-line': showPassword, 'ri-eye-line': !showPassword }"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="strength" :class="'level_' + strengthLevel"></div>
                                </div>
                            </transition>                       
                            <p class="warning">Password must have at least 8 characters including capital letters and digits</p>
                        </div>
                    </div>
                    <div class="form-flex">
                        <div class="form-control equal">
                            <p>Confirm Password<span class="asterisk10"> *</span></p>
                            <transition appear name="slide-fade2">
                                <div class="password">
                                    <input v-if="cShowPassword" type="text" class="input10" v-model="mcPassword" @blur="errorCheck10"/>
                                    <input v-else type="password" class="input10" v-model="mcPassword" @blur="errorCheck10"/> 
                                    <div class="control">
                                        <div class="button" @click="cToggleShow">
                                            <span class="icon is-small is-right">
                                                <i :class="{ 'ri-eye-off-line': cShowPassword, 'ri-eye-line': !cShowPassword }"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                            <p class="match">Password does not match!</p>
                        </div>
                        <div class="form-control equal">
                            <p>How did you hear about us <span class="optional">(Optional)</span></p>
                            <transition appear name="slide-fade">
                                <input type="text">
                            </transition>                         
                        </div>
                    </div>
                    <div class="msg2">
                        <p>Something seems wrong!</p> 
                        <i @click="onClose2()" class="ri-close-line"></i>
                    </div>
                    <div class="center">
                        <button>Register</button>
                    </div>
                </form>
                <div class="signIn">
                    <p>Already have an account?<router-link to="/merchant"> Sign in instead</router-link></p>
                </div>
            </div>
            <div class="blurr" @click="onClose()">
                <div class="success2" id="hideMe">
                    <p>Thank you! Thanks for signing up. Welcome to our community. We are happy to have you on board. 
                        Why don’t you follow us on social media as well?<br><span class="redD">@PowerPlug</span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

    export default {
        name: "MerchantTwo",
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                fullName: '',
                phoneNumber: '',
                wPhoneNumber: '',
                EmailAddress: '',
                mState: 'State',
                mCity: '',
                mAddress: '',
                mbName: '',
                merchantType: 'Merchant Type',
                mPassword: '',
                mcPassword: '',
                showPassword: false,
                cShowPassword: false,
                password: null,
            }
        },
        computed: {
            buttonLabel() {
                return (this.showPassword) ? "Hide" : "Show";
            },
            scorePassword() {
                let score = 0;
                if(this.mPassword === '') return score;

                let letters = {}
                for(let i = 0; i < this.mPassword.length; i++) {
                    letters[this.mPassword[i]] = (letters[this.mPassword[i]] || 0) + 1;
                    score += 5.0 / letters[this.mPassword[i]];
                }

                let variations = {
                    digits: /\d/.test(this.mPassword),
                    lower: /[a-z]/.test(this.mPassword),
                    upper: /[A-Z]/.test(this.mPassword),
                };

                let variationsCount = 0;
                for (let check in variations) {
                    variationsCount += (variations[check] === true) ? 1 : 0
                }

                score += (variationsCount - 1) * 10;

                return parseInt(score);
            },
            strengthLevel() {
                let pass = this.scorePassword;
                if(pass === 0) return 0;
                if(pass < 25) return 1;
                if(pass < 50) return 2;
                if(pass < 75) return 3;
                if(pass >= 75) return 4;
            }
        },
        methods: {
            toggleShow() {
                this.showPassword = !this.showPassword;
            },
            cToggleShow() {
                this.cShowPassword = !this.cShowPassword;
            },
            onSubmit() {
                const input = document.querySelector('.input')                
                const input1 = document.querySelector('.input1')                
                const input2 = document.querySelector('.input2')                
                const input3 = document.querySelector('.input3')                
                const input4 = document.querySelector('.input4')                
                const input5 = document.querySelector('.input5')                
                const input6 = document.querySelector('.input6')                
                const input7 = document.querySelector('.input7')                
                const input8 = document.querySelector('.input8')                
                const input9 = document.querySelector('.input9')                
                const input10 = document.querySelector('.input10')  
                const telephone = this.phoneNumber.toString().length;   
                const wTelephone = this.wPhoneNumber.toString().length;   
                const pass = this.mPassword.toString().length;   
                const message = document.querySelector ('.msg2')

                if(this.fullName === '') {
                    input.classList.add('inputBorder')
                } 
                if(this.phoneNumber === '' || telephone > 0 && telephone < 11 || telephone > 11) {
                    input1.classList.add('inputBorder')
                }
                if(this.wPhoneNumber === '' || wTelephone > 0 && wTelephone < 11 || wTelephone > 11) {
                   input2.classList.add('inputBorder')
                } 
                if(this.EmailAddress === '') {
                    input3.classList.add('inputBorder')
                } 
                if(this.mState === 'State') {
                    input4.classList.add('inputBorder')
                } 
                if(this.mCity === '') {
                    input5.classList.add('inputBorder')
                } 
                if(this.mAddress === '') {
                    input6.classList.add('inputBorder')
                }
                if(this.mbName === '') {
                    input7.classList.add('inputBorder')
                } 
                if(this.merchantType === 'Merchant Type') {
                    input8.classList.add('inputBorder')
                } 
                if(this.mPassword === '') {
                    input9.classList.add('inputBorder')
                }
                if(this.mcPassword === '') {
                    input10.classList.add('inputBorder')
                }
                if(this.fullName === '' || this.phoneNumber === '' || telephone > 0 && telephone < 11 || telephone > 11  || this.wPhoneNumber === '' || wTelephone > 0 && wTelephone < 11 || wTelephone > 11 || this.EmailAddress === '' || this.mState === 'State' || this.mCity === '' || this.mAddress === '' || this.mbName === '' || this.merchantType === 'Merchant Type' || this.mPassword === '' || pass < 8 || this.mcPassword === '' && this.mcPassword !== this.mPassword){
                    message.style.visibility = 'visible';
                    message.style.opacity = '1';
                    message.style.height = '20px'
                    message.style.padding = '.5em'
                    message.style.marginBottom = '.5em'
                    message.style.fontSize = '14px'
                } else {
                    const modal = document.querySelector('.success2')
                    const blur = document.querySelector ('.blurr')
                    const fixed = document.querySelector ('.freeze')

                    blur.style.display = 'block'
                    modal.style.display = 'block'
                    if(fixed.classList.contains('fixed') === false) {
                        fixed.classList.add('fixed')
                    } else {
                        fixed.classList.remove('fixed')
                    }
                }
            },
            onClose() {
                const modal = document.querySelector('.success2')
                const blur = document.querySelector ('.blurr')
                const fixed = document.querySelector ('.freeze')

                blur.style.display = 'none'
                 modal.style.display = 'none'
                fixed.classList.remove('fixed')
            },
            errorCheck() {
                const asterisk = document.querySelector ('.asterisk'); 
                const input = document.querySelector('.input') 


                if(this.fullName !== '') {
                    asterisk.style.color = 'green';
                    input.classList.add('inputBorder1')
                } else {
                    asterisk.style.color = 'red';
                    input.classList.add('inputBorder')
                }
                
            },
            errorCheck1() { 
                const asterisk1 = document.querySelector ('.asterisk1');
                const input = document.querySelector('.input1') 

                if(this.phoneNumber !== '') {
                    asterisk1.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk1.style.color = 'red';
                    input.classList.add('inputBorder')
                }
            },
            errorCheck2() { 
                const asterisk2 = document.querySelector ('.asterisk2');
                const input = document.querySelector('.input2')

                if(this.wPhoneNumber !== '') {
                    asterisk2.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk2.style.color = 'red';
                    input.classList.add('inputBorder')
                }
            },
            errorCheck3() { 
                 const asterisk3 = document.querySelector ('.asterisk3');
                const input = document.querySelector('.input3')

                if(this.EmailAddress !== '') {
                    asterisk3.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk3.style.color = 'red';
                    input.classList.add('inputBorder')
                }
            },
            errorCheck4() { 
                const asterisk4 = document.querySelector ('.asterisk4');
                const input = document.querySelector('.input4')

                if(this.mState !== '--Select State--') {
                    asterisk4.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk4.style.color = 'red';
                    input.classList.add('inputBorder')
                }
            },
            errorCheck5() { 
                const asterisk5 = document.querySelector ('.asterisk5');
                const input = document.querySelector('.input5')

                if(this.mCity !== '') {
                    asterisk5.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk5.style.color = 'red';
                    input.classList.add('inputBorder')
                }
            },
            errorCheck6() { 
                const asterisk6 = document.querySelector ('.asterisk6');
                const input = document.querySelector('.input6')

                if(this.mAddress !== '') {
                    asterisk6.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk6.style.color = 'red';
                    input.classList.add('inputBorder')
                }
            },
            errorCheck7() { 
                const asterisk7 = document.querySelector ('.asterisk7');
                const input = document.querySelector('.input7')

                if(this.mbName !== '') {
                    asterisk7.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk7.style.color = 'red';
                    input.classList.add('inputBorder')
                }
            },
            errorCheck8() { 
                const asterisk8 = document.querySelector ('.asterisk8');
                const input = document.querySelector('.input8');
                const warning = document.querySelector('.warning');

                if(this.merchantType !== 'Merchant Type') {
                    asterisk8.style.color = 'green';
                    input.classList.add('inputBorder1')
                }  else {
                    asterisk8.style.color = 'red';
                    input.classList.add('inputBorder')
                    warning.style.display = 'block'
                }
            },
            errorCheck9() {
                const asterisk9 = document.querySelector ('.asterisk9');
                const input = document.querySelector('.input9');

                if(this.mPassword !== '' ) {
                    asterisk9.style.color = 'green';
                    input.classList.add('inputBorder1')
                } else {
                    input.classList.add('inputBorder')
                }
            },
            remove() {
                const warning = document.querySelector('.warning');

                warning.style.display = 'none'
            },
            errorCheck10() { 
                const asterisk10 = document.querySelector ('.asterisk10');
                const input = document.querySelector('.input10');
                const match = document.querySelector ('.match')

                if(this.mcPassword !== this.mPassword || this.mPassword === '') {
                    match.style.display = 'block';
                    asterisk10.style.color = 'red';
                    input.classList.add('inputBorder')
                } else {
                    match.style.display = 'none'
                    asterisk10.style.color = 'green';
                    input.classList.add('inputBorder1')
                }

                // if(this.mcPassword !== '') {
                //     asterisk10.style.color = 'green';
                //     input.classList.add('inputBorder1')
                // }  else {
                //     asterisk10.style.color = 'red';
                //     input.classList.add('inputBorder')
                // }
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
        },
    }
</script>

<style scoped>
    .showw {
        top: 0;
    }
    .fixed {
        position: fixed;
        width: 100%;
       overflow: hidden
    }
    .optional {
        font-size: 12px;
    }
    .password {
        position: relative;
        z-index: 10;
    }
    .strength {
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        display: block;
        width: 25%;
        height: 100%;
        background-color: #a5df41;
        overflow: hidden;
        z-index: -1;
        transition: all .5s linear;
    }
.level_0 {
    bottom: 0;
    width: 25%;
    background-color: #BB4440;
}
.level_1 {
    bottom: -10px;
    width: 25%;
    background-color: #BB4440;
}
.level_2 {
    bottom: -5px;
    width: 50%;
    background-color: #E17D30;
}
.level_3 {
    bottom: -5px;
    width: 75%;
    background-color: #F0B03F;
}
.level_4 {
    bottom: -5px;
    width: 100%;
    background-color: #a5df41;
}
.button {
    position: absolute;
    background: none;
    color: black;
    box-shadow: none;
    font-size: 24px;
    top: 15px;
    right: 10px;
}
.inputBorder {
    border-color: #D91821;
}
.inputBorder1 {
    border-color: green;
}
 .slide-fade-enter-active,
    .slide-fade2-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active,
    .slide-fade2-leave-active {
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
    .merchantTwo {
        background: white;
        margin-top: 7em;
    }
    .center {
        text-align: center;
        margin-top: 1em;
    }
    button {
        width: 100%;
        padding: 1em;
    }
    .signIn {
        margin-top: 1em;
        text-align: center;
    }
    .signIn a {
        color: #D91821;
    }
    .bottom {
        margin-top: 6em;
        text-align: center;
    }
    .asterisk, .asterisk1, .asterisk2
    , .asterisk3, .asterisk4, .asterisk5
    , .asterisk6, .asterisk7, .asterisk8
    , .asterisk9, .asterisk10, .weak, .reg {
        color: #D91821;
    }
    .reg {
        text-align: center;
        margin-bottom: 1em;
    }
    .match {
        display: none;
        color: #D91821;
    }
    .warning {
        color: #D91821;
        font-size: 12px;
    }
    .character1 {
        font-size: 13px;
    }
    .med {
        display: none;
    }
    .str {
        display: none;
    }
    .character2 {
        display: none;
        font-size: 13px;
    }
    @media only screen and (min-width: 320px) {
        .mt-container {
            width: 85%;
            margin:  auto;
        }
    }
    @media only screen and (min-width: 768px) {
        .mt-container {
            width: 80%;
            max-width: 800px;
            margin: 0 auto;
        }
    }
</style>