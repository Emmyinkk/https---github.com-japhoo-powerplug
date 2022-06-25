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
                    <button><router-link to="/merchant"><i class="ri-arrow-left-line"></i>Go back</router-link></button>
                    <button id="proceed">Next</button>
                </div>
            </form>
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
        data() {
            return {
                email: '',
            }
        },
        methods: {
            onSubmit() {
                const error = document.querySelector ('.errorMsg');

                if(this.email === '') {
                    error.style.display = 'inline-block'
                } else {
                    error.style.display = 'none'
                    this.$notify({ 
                        type: "success", 
                        text: "An email will be sent to you shortly!" 
                    });
                }
                this.email = ''
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
</style>