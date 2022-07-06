<template>
    <div>
        <Navbar/>
        <div class="merchant">
            <div class="m-container">
                <h2 class="reg">Login as a Merchant</h2>
                <form @submit.prevent="onSubmit" action="" id="MyForm">
                    <div class="form-control">
                        <p class="error">Phone Number <span class="errorMsg"> Cannot be Empty!</span><span class="errorM"> Number looks wrong!</span></p>
                        <transition appear name="slide-fade2">
                            <input type="tel" class="i-size" v-model ="bNumber" @blur="checkError"/>
                        </transition>
                    </div>
                    <div class="form-control">
                        <p class="error1">Password <span class="errorMsg1"> Cannot be Empty!</span></p>
                        <transition appear name="slide-fade2">
                            <!-- @blur="checkError1"  @blur="checkError"-->
                            <div class="password">
                                <input v-if="showPassword" type="text" class="input" v-model="bPassword" @blur="checkError1"/>
                                <input v-else type="password" class="input" v-model="bPassword" @blur="checkError1"/> 
                                <div class="control">
                                    <div class="button" @click="toggleShow">
                                        <span class="icon is-small is-right">
                                            <i :class="{ 'ri-eye-off-line': showPassword, 'ri-eye-line': !showPassword }"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="center">
                        <button>Login</button>
                    </div>
                </form>
                <div class="m-register">
                    <p><router-link to="/forgotPassword">Forgot Password?</router-link></p>
                    <p><router-link to="/merchantTwo">Register as a new Merchant</router-link></p>
                </div>
            </div>
        </div>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

    export default {
        name: 'Merchant',
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                bNumber: '',
                bPassword: '',
                showPassword: false,
            }
        },
        computed: {
            buttonLabel() {
            return (this.showPassword) ? "Hide" : "Show";
            },
        },
        methods: {
            toggleShow() {
                this.showPassword = !this.showPassword;
            },
            onSubmit() {
                const errorMsg = document.querySelector ('.errorMsg');
                const errorMsg1 = document.querySelector ('.errorMsg1');

                if(this.bNumber === '') {
                    errorMsg.style.display = 'inline-block';
                } 
                if (this.bPassword === '') {
                    errorMsg1.style.display = 'inline-block';
                }
                if (this.bNumber !== '' || this.bPassword !== '') {
                    this.bNumber = ''
                    this.bPassword = ''
                }
            },
            checkError() {
                const errorMsg = document.querySelector ('.errorMsg');
                const error = document.querySelector ('.errorM');
                const tel = this.bNumber.length

                if(this.bNumber != '') {
                    errorMsg.style.display = 'none';
                } else {
                    errorMsg.style.display = 'inline-block';
                }
                if(tel == 11) {
                    error.style.display = 'none';
                } else {
                    error.style.display = 'inline-block'
                }
            },
            checkError1() {
                const errorMsg1 = document.querySelector ('.errorMsg1');

                if(this.bPassword != '') {
                    errorMsg1.style.display = 'none';
                } else {
                    errorMsg1.style.display = 'inline-block';
                }
            },
        },
    }
</script>

<style scoped>
    .slide-fade2-enter-active {
        transition: all 1s ease;
    }
    .slide-fade2-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)
    }
    .slide-fade2-enter-from,
    .slide-fade2-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
.merchant {
    background: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.password {
    position: relative;
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
.reg {
    text-align: center;
    margin-bottom: 1em;
    color: #D91821;
}
.center {
    text-align: center;
}
.center button {
    width: 100%;
    padding: 1em;
}
.m-register {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
}
.m-register a {
    color: #D91821;
}
.errorMsg, .errorMsg1, .errorM {
        display: none;
        color: #D91821;
        font-size: 10px
    }
/* .errorMsg1 {
        display: none;
        color: red;
    } */
@media only screen and (min-width: 320px) {
    .m-container {
        width: 85%;
        margin:  auto;
    }
    .m-register p {
        color: #D91821;
        font-size: 13px;
    }
}
@media only screen and (min-width: 768px) {
    .m-container {
        width: 40%;
        margin: 0 auto;
    }
}
</style>