import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

 
  const app = createApp(App);
  app
    .use(router, axios)
    .mount("#dswaves-plugin");

  
    app.config.globalProperties.redirectIfKeyInvalid = function () {
        // check key
        if (window.location.hash != '#/settings' && window.location.hash != '#/about') {
            
            axios({
                    method: 'get',
                    url: '/wp-json/dswaves/v1/check_plugin_key_valid'
                }).then(response => {
                    if (response.data != 'good')
                    {
                        this.$router.push("/settings");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }