<template>
    <div>
        <Navbar4 />
        <div class="bankTransfer">
            <div class="p-container">
                <div class="popUpEx" id="pop" ref="bankTransfer">
                    <p class="p-header">Bank Transfer</p>
                    <p class="p-text">Hi <span id="color">{{ buyerName }}</span>, make <span id="color">&#8358;{{ results }}</span> payment into the account below and upload proof of
                        payment (Teller or receipt)
                    </p>
                    <div class="left">
                        <p>Account Number</p>
                        <p>{{ account_no }}</p>
                    </div>
                    <div class="left">
                        <p>Account Name</p>
                        <p>{{ account_name }}</p>
                    </div>
                    <div class="left">
                        <p>Bank Name</p>
                        <p>{{ bank }}</p>
                    </div>
                    <div class="f-upload">
                        <div class="u-container">
                            <form @submit.prevent="onSubmit1" action="" id="fileForm">
                                <div class="custom-file-upload">
                                    <input id="file-upload" type="file" ref="imageUploader"  @change="onFileChange"  class="input-file">
                                        <p v-if="!files || !files.length"> 
                                            <i class="ri-upload-cloud-2-line l-icon"></i><br>
                                            Upload file<br>
                                            Drag and drop file here
                                        </p>
                                        <div v-else>
                                            <p v-for="file in files" :key="file.name">
                                                <i class="ri-cloud-line l-icon"></i><br>
                                                File Uploaded Successfully<br>
                                                Drag and drop file here<br>
                                                <span  class="image-name_color"> {{ file.name }} </span> 
                                            </p>
                                        </div>
                                    <div class="errorMsg">A screenshot of the payment must be chosen!</div>
                                </div>
                                    <div class="p-button2">
                                        <button id="proceed">Upload</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
</template>

<script>
import Navbar4 from '@/components/Navbar4.vue'; 

    export default {
        components: {
            Navbar4,
        },
        data() {
            return {
                files: null,
            }
        },
        computed: {
            buyerName: {
                get() {
                    return this.$store.state.buyerName
                },
                set(value) {
                    this.$store.commit('addBuyerName', value)
                }
            },
            amount: {
                get() {
                    return this.$store.state.amount
                },
                set(value) {
                    this.$store.commit('addAmount', value)
                }
            },
            bank: {
                get() {
                    return this.$store.state.bank
                },
                set(value) {
                    this.$store.commit('addBank', value)
                }
            },
            account_no: {
                get() {
                    return this.$store.state.account_no
                },
                set(value) {
                    this.$store.commit('addAccount_no', value)
                }
            },
            account_name: {
                get() {
                    return this.$store.state.account_name
                },
                set(value) {
                    this.$store.commit('addAccount_name', value)
                }
            },
            result() {
                return parseInt(this.$store.state.charges) + parseInt(this.amount)
            },
            results() {
                return this.result.toLocaleString()
            }
        },
        methods: {
            onFileChange(e) {
                const error = document.querySelector ('.errorMsg');

                this.files = e.target.files

                if(this.files) {
                    error.style.display = 'none';
                } 
            },
            onSubmit1() {
                const error = document.querySelector ('.errorMsg');


                if(!this.files) {
                 error.style.display = 'block';

                } else {
                    this.$router.push('/completeOrder')
                    this.$refs.imageUploader.value = '';
                    this.files = null;
                }
            },
        }
    }
</script>

<style scoped>
    .bankTransfer {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }
    .popUpEx {
        margin-bottom: 0;
    }
    .left {
        padding-bottom: 1em;
    }
    .p-header {
        font-weight: 500;
        font-size: 26px;
        line-height: 46px;
        color: #D91821;
        margin-bottom: 1em;
    }
    #color {
        color: #D91821;
    }
</style>