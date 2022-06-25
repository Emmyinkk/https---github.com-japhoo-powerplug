<template>
<Navbar></Navbar>
    <div class="contact">
        <div class="contact2">
            <div class="cc-cont">
                <transition appear name="fade">
                    <p class="c-header">Let’s Get in Touch</p>
                </transition>
                <form @submit.prevent="onSubmit" action="" id="myForm">
                    <div class="form-flex">
                        <div class="form-control equal">
                            <p class="error">Full Name <span class="errorMsg"> Cannot be Empty!</span></p>
                            <transition appear name="slide-fade2">
                                <input type="text" v-model="bName" @blur="checkError">
                            </transition>
                        </div>
                        <div class="form-control equal">
                            <p class="error1">Email Address <span class="errorMsg1"> Cannot be Empty!</span></p>
                            <transition appear name="slide-fade">
                                <input type="email" v-model="bEmail" @blur="checkError1">
                            </transition>
                        </div>
                    </div>
                    <div class="form-control">
                        <p class="textss error2">Message <span class="errorMsg2"> There has to me a message ;)</span></p>
                        <transition appear name="slide-fade3">
                            <textarea name="Message" id="message" cols="30" rows="10" v-model="bText" @blur="checkError2"></textarea>
                        </transition>
                    </div>
                    <div class="form-control cc-align">
                        <button>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

 export default {
        name: 'Contact',
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                bName: '',
                bEmail: '',
                bText: '',
            }
        },
        methods: {
            onSubmit() {
                const errorMsg = document.querySelector ('.errorMsg');
                const errorMsg1 = document.querySelector ('.errorMsg1');
                const errorMsg2 = document.querySelector ('.errorMsg2');

                if(this.bName === '') {
                    errorMsg.style.display = 'inline-block';
                }
                if (this.bEmail === '') {
                    errorMsg1.style.display = 'inline-block';
                }
                if (this.bText === '') {
                    errorMsg2.style.display = 'inline-block';
                }
                if (this.bName !== '' && this.bEmail !== '' && this.bText !== '') {
                    this.$notify({ type: "success", text: "Thanks for your feedback!" });   
                    this.bName = '';
                    this.bEmail = '';
                    this.bText = '';
                }
            },
            checkError() {
                const errorMsg = document.querySelector ('.errorMsg');

                if(this.bName != '') {
                    errorMsg.style.display = 'none';
                } 
            },
            checkError1() {
                const errorMsg1 = document.querySelector ('.errorMsg1');

                if(this.bEmail != '') {
                    errorMsg1.style.display = 'none';
                }
            },
            checkError2() {
                const errorMsg2 = document.querySelector ('.errorMsg2');

                if(this.bText != '') {
                    errorMsg2.style.display = 'none';
                } 
            },
        },
    }
</script>

<style scoped>
    .contact {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    .slide-fade-enter-active,
    .slide-fade2-enter-active,
    .slide-fade3-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active,
    .slide-fade2-leave-active,
    .slide-fade3-leave-active {
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
    .slide-fade3-enter-from,
    .slide-fade3-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
    button {
        /* width: 30%; */
        font-style: normal;
        font-weight: 400;
        line-height: 150.3%;
    }
    .s-info {
        padding: 2em;
    }
    .s-head {
        margin-top: 0em;
    }
    .s-container {
        height: auto;
    }
    .blur2 {
        background: rgba(0, 0, 0, 0.5);
    }
    .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .errorMsg, .errorMsg1, .errorMsg2 {
        display: none;
        color: red;
        font-size: 10px;
    }
</style>