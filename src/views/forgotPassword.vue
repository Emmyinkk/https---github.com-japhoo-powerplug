<template>
    <Navbar4 />
    <div class="cardPayment">
        <div class='card-container'>
            <div class="headd">
                <h2>Forgot Password?</h2>
                <p class="details">Enter the email address associated with your account.</p>
            </div>
            <form @submit.prevent="onSubmit" action="" id="myForm">
                <div class="form-control equal">
                    <p class="error">Email Address <span class="errorMsg"> Enter a valid Email Address!</span></p>
                    <transition appear name="slide-fade2">
                        <input type="email" v-model="email"  @blur="checkError">
                    </transition>
                </div>
                <div class="p-button2">
                    <div class="link-layout btn-align">
                        <router-link to="/merchant"><i class="ri-arrow-left-line"></i>Go back</router-link>
                    </div>
                    <button class="btn-align" id="proceed">Next</button>
                </div>
            </form>
        </div>
    </div>
    <div class="success" id="hideMe">
        <p>You will recieve an email shortly!</p>
        <i @click="onClose()" class="ri-close-line"></i>
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
        data() {
            return {
                email: '',
            }
        },
        methods: {
            onSubmit() {
                const error = document.querySelector ('.errorMsg');
                const success = document.querySelector ('.success')

                if(this.email === '') {
                    error.style.display = 'inline-block'
                } else {
                    error.style.display = 'none'
                    if(success.classList.contains('showw') === false) {
                        success.classList.add('showw')
                    }
                }
                this.email = ''
            },
            onClose() {
                const success = document.querySelector ('.success')

                if(success.classList.contains('showw') === true) {
                        success.classList.remove('showw')
                }
            },
        }
    }
</script>

<style scoped>
    .p-button2 {
        display: flex;
        justify-content: space-between;
        gap: 1em;
    }
    .link-layout {
        background: linear-gradient(90.05deg, #D91821 -5.66%, #FB0F1A 115.63%);
        padding: 10px;
        text-align: center;
    }
    a {
        /* padding-left: 25px; */
        font-size: 14px;
    }
    .btn-align {
        flex-grow: 1;
        flex-basis: 0;
    }
    .p-button2 i {
        vertical-align: middle;
        color: white;
        margin-right: .5em;
    }
    .p-button2 a {
        color: white;
    }
    .cardPayment {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .headd {
        text-align: left;
        margin-bottom: 4em;
    }
    h2 {
        color: #D91821;
    }
    .details {
        color: #1A1A1A;
    }
    .errorMsg {
        display: none;
        color: #D91821;
        font-size: 10px;
    }
    .showw {
        right: 0;
    }
</style>