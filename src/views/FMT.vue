<template>
    <div>
        <Navbar/>
        <div class="FMT">
            <div class="fm-container">
                <p class="reg">Need to find your token for a previous transaction? please use the search form below</p>
                <p class="incorrect">Something appears to be wrong</p>
                <form @submit.prevent="onSubmit" action="" id="MyForm">
                    <div class="form-control">
                        <p class="error">Meter Number <span class="errorMsg"> Cannot be Empty!</span><span class="wrongN">The Meter Number appears to be wrong</span></p>
                        <transition appear name="slide-fade2">
                            <input type="text" class="i-size" v-model ="mNumber" @blur="checkError">
                        </transition>
                    </div>
                    <div class="form-control">
                        <p class="error1">Phone Number <span class="errorMsg1"> Cannot be Empty!</span><span class="wrongNo">The Meter Number appears to be wrong</span></p>
                        <transition appear name="slide-fade2">
                            <input type="tel" v-model="bNumber" @blur="validateNumber">
                        </transition>
                    </div>
                    <div class="center">
                        <button>Search</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

    export default {
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                bNumber: '',
                mNumber: '',
            }
        },
        methods: {
            onSubmit() {
                const errorMsg = document.querySelector ('.errorMsg');
                const errorMsg1 = document.querySelector ('.errorMsg1');  
                const wrongN = document.querySelector ('.wrongN');
                const prob = this.mNumber.length;
                const telephone = this.bNumber.length;
                const wrongNo = document.querySelector ('.wrongNo')

                if(this.bNumber === '') {
                    errorMsg1.style.display = 'inline-block';
                }
                if (telephone > 0 && telephone < 11 || telephone > 11) {
                    wrongNo.style.display = 'inline-block'
                } else {
                    wrongNo.style.display = 'none'
                }
                if(this.mNumber === '') {
                    errorMsg.style.display = 'inline-block';
                }  
                if (prob > 0 && prob < 11 || prob === 12 || prob > 13) {
                    wrongN.style.display = 'inline-block';
                }
                else {
                    wrongN.style.display = 'none'
                }
                if(this.bNumber === '' || this.mNumber === '' || prob > 0 && prob < 11 || prob === 12 || prob > 13 || telephone > 0 && telephone < 11 || telephone > 11) {
                    
                } else {
                    this.bNumber = ''
                    this.mNumber = ''
                }
            },
            checkError() {
                const errorMsg = document.querySelector ('.errorMsg');
                const prob = this.mNumber.length;
                const wrongN = document.querySelector ('.wrongN')
                
                if(this.mNumber !== ''){
                    errorMsg.style.display = 'none'
                }
                if (prob > 0 && prob < 11 || prob === 12 || prob > 13) {
                    wrongN.style.display = 'inline-block';
                }
                else {
                    wrongN.style.display = 'none'
                }
            },
            validateNumber() {
                const errorMsg = document.querySelector ('.errorMsg1');
                const telephone = this.bNumber.length;
                const wrongNo = document.querySelector ('.wrongNo')
                
                if(this.bNumber !== ''){
                    errorMsg.style.display = 'none'
                }
                if (telephone > 0 && telephone < 11 || telephone > 11) {
                    wrongNo.style.display = 'inline-block'
                } else {
                    wrongNo.style.display = 'none'
                }
            },
        }
    }
</script>

<style scoped>
    .errorMsg, .errorMsg1, .wrongN, .wrongNo, .incorrect {
        color: #D91821;
        display: none;
        font-size: 12px;
    }
    .FMT {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .reg {
        text-align: center;
        margin-bottom: 5em;
        color: #6F6F6F;
    }
    .center {
    text-align: center;
    }
    .center button {
        width: 100%;
        padding: 1em;
    }
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
</style>