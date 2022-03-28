<template>
<div class="dsw-pr-5">
    <Header />
    <Navigation />
    <router-view />
</div>
</template>

<script>
import Navigation from './components/Menu.vue';
import Header from './components/Header.vue';
import axios from 'axios'
export default {
    components: {
        Header,
        Navigation
    },
    created() {

        document.body.className = document.body.className.replace("wp-core-ui", ""); // remove wp-admin CSS

    }
};
</script>

<style lang="css" scoped>
</style>
