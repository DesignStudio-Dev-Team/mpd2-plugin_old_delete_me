<template>
<div v-if="has_loaded && key_status == 'empty'" class="dsw-my-5 dsw-container dsw-mx-auto dsw-max-w-2xl dsw-bg-white dsw-p-5 dsw-rounded">

    <div class="dsw-text-center dsw-text-3xl dsw-mb-8">Welcome to Waves<br />by DesignStudio (v2.0)</div>
    <div class="dsw-text-lg dsw-text-center">Unlock your plugin by activating your <a @click="clickLicenseKeyLink" class="dsw-text-blue-500 dsw-cursor-pointer dsw-font-bold">License Key</a>. If you don’t have one yet you can request one after you have chosen the brands you wish to syndicate.</div>

</div>

<div v-if="has_loaded && key_status == 'allow_enter'" class="dsw-my-5 dsw-container">

    <div class="dsw-font-bold dsw-text-lg dsw-mb-3">Plugin License</div>
    <div class="dsw-text-md dsw-mb-3">To activate your license of <b>WAVES by DesignStudio</b> enter your unique key below and click 'Activate License'.</div>
    <div class="dsw-flex">
        <form @submit.prevent="submitLicenseKeyForm">
            <input v-model="key" type="text" class="dsw-rounded-sm dsw-border-2 dsw-border-gray-200 dsw-text-md dsw-w-72" placeholder="License Key Here" />
            <button v-if="!loading_checking_key_valid" type="submit" class="dsw-bg-blue-500 dsw-text-white dsw-p-2 dsw-text-xs dsw-mx-2 dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400">ACTIVATE LICENSE</button>
        </form>
        <div v-if="loading_checking_key_valid" class="dsw-ml-2">
            <svg class="dsw-opacity-50 dsw-animate-spin dsw-h-8 dsw-w-8 dsw-text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="dsw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="dsw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    </div>
    <div v-if="checkKeyValidMessage" v-html="checkKeyValidMessage"></div>
</div>

<div v-if="has_loaded && key_status == 'valid'" class="dsw-my-5 dsw-container">

    <div class="dsw-font-bold dsw-text-lg dsw-mb-3">Plugin License</div>
    <div class="dsw-text-md dsw-mb-3"><button @click="deactivateLicenseKey" type="button" class="dsw-bg-gray-300 dsw-text-gray-800 dsw-p-2 dsw-text-xs dsw-px-3 dsw-rounded-sm dsw-border dsw-border-gray-400">DEACTIVE LICENSE</button></div>
    <div class="dsw-text-green-700">Plugin license currently active.</div>
</div>

<div v-if="!has_loaded" class="dsw-h-60 dsw-relative">
    <div class="dsw-text-black dsw-absolute dsw-h-full dsw-w-full dsw-top-0 dsw-left-0 dsw-flex dsw-flex-col dsw-items-center dsw-justify-center">
        <div><svg class="dsw-opacity-50 dsw-animate-spin dsw-h-10 dsw-w-10 dsw-text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="dsw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="dsw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
        <div class="dsw-mt-2 dsw-opacity-75 dsw-text-lg">Loading...</div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            key_status: null,
            has_loaded: false,
            key: null,
            checkKeyValidMessage: null,
            loading_checking_key_valid: false
        }
    },
    mounted() {
        axios({
                method: 'get',
                url: '/wp-json/dswaves/v1/check_plugin_key_valid'
            }).then(response => {

                this.key_status = null;

                if (response.data == 'good') {
                    this.key_status = 'valid';
                } else {
                    this.key_status = 'empty';
                }

                this.has_loaded = true;
            })
            .catch(error => {
                console.log(error);
            });
    },
    watch: {
        key: function () {
           this.checkKeyValidMessage = null;
        },
    },
    methods: {
        clickLicenseKeyLink() {
            this.key_status = 'allow_enter';
        },
        submitLicenseKeyForm() {
            this.loading_checking_key_valid = true;

            axios({
                    method: 'post',
                    url: '/wp-json/dswaves/v1/save_plugin_key',
                    data: {
                        key: this.key,
                    }
                }).then(response => {

                    this.loading_checking_key_valid = false;

                    if (response.data.valid) {
                        this.checkKeyValidMessage = '<span class="dsw-text-green-700">Plugin successfully activated.</span>';

                        var app = this;
                        setTimeout (function () {
                            app.key_status = 'valid';
                            app.checkKeyValidMessage = null;
                        }, 3000);
                    } else {
                        this.checkKeyValidMessage = '<span class="dsw-text-red-700">' + response.data.message + '</span>';
                    }
                })
                .catch(error => {
                    this.loading_checking_key_valid = false;
                    console.log(error);
                });
        },
        deactivateLicenseKey () {
           
            axios({
                    method: 'get',
                    url: '/wp-json/dswaves/v1/deactivate_plugin'
                }).then(response => {

                    this.key = response.data;
                    this.key_status = 'allow_enter';
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    components: {}

};
</script>

<style lang="css" scoped>
</style>
