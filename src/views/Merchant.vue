<template>
<Navbar></Navbar>
    <div class="merchant">
        <div class="m-container">
            <h2 class="reg">Login as a Merchant</h2>
            <form @submit.prevent="onSubmit" action="" id="MyForm">
                <div class="form-control">
                    <p class="error">Phone Number <span class="errorMsg"> Cannot be Empty!</span></p>
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
                                        <i :class="{ 'ri-eye-line': showPassword, 'ri-eye-off-line': !showPassword }"></i>
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
                // const mForm = document.getElementById ('MyForm')
                // const error = document.querySelector ('.error');
                // const error1 = document.querySelector ('.error1');
                const errorMsg = document.querySelector ('.errorMsg');
                const errorMsg1 = document.querySelector ('.errorMsg1');

                if(this.bNumber === '') {
                    // error.style.color = 'red';
                    errorMsg.style.display = 'inline-block';
                } 
                if (this.bPassword === '') {
                    // error1.style.color = 'red';
                    errorMsg1.style.display = 'inline-block';
                }
                if (this.bNumber !== '' || this.bPassword !== '') {
                    this.bNumber === ''
                    this.bPassword === ''
                }
            },
            checkError() {
                // const error = document.querySelector ('.error');
                const errorMsg = document.querySelector ('.errorMsg');

                if(this.bNumber != '') {
                    // error.style.color = 'black';
                    errorMsg.style.display = 'none';
                } else {
                    // error.style.color = 'red';
                    errorMsg.style.display = 'inline-block';
                }
            },
            checkError1() {
                const error1 = document.querySelector ('.error1');
                const errorMsg1 = document.querySelector ('.errorMsg1');

                if(this.bPassword != '') {
                    // error1.style.color = 'black';
                    errorMsg1.style.display = 'none';
                } else {
                    // error1.style.color = 'red';
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
    /* padding-top: 5em; */
    /* padding-bottom: 2em; */
}
.password {
    position: relative;
}
.button {
    position: absolute;
    background: none;
    /* padding: 1em;
    border-radius: 0; */
    color: black;
    box-shadow: none;
    font-size: 20px;
    top: 11px;
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
.errorMsg, .errorMsg1 {
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