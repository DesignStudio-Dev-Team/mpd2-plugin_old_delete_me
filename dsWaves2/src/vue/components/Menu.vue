<template>
    <div>
        <div class="sm:dsw-hidden">
            <label for="tabs" class="dsw-sr-only">Select a tab</label>
            <select id="tabs" name="tabs"
                class="dsw-block dsw-w-full dsw-pl-3 dsw-pr-10 dsw-py-2 dsw-text-base dsw-border-gray-300 focus:dsw-outline-none focus:dsw-ring-indigo-500 focus:dsw-border-indigo-500 sm:dsw-text-sm dsw-rounded-md">
                <option selected>Brands</option>

                <option>Approval</option>

                <option>Support</option>

                <option>Settings</option>

                <option>About</option>
            </select>
        </div>
        <div class="dsw-hidden sm:dsw-block">
            <div class="dsw-border-b-2 dsw-border-dark-gray">
                <nav class="dsw--mb-px dsw-flex dsw-space-x-8" aria-label="Tabs">
                    <router-link to="/about"
                        class="dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium">
                        About</router-link>
                    <router-link to="/"
                        class="dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium"
                        aria-current="page">Brands</router-link>
                    <!--<router-link to="/approvals"
                        class="dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium">
                        Approvals</router-link>
                    <router-link to="/request"
                        class="dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium">
                        Request a Brand</router-link>
                    <router-link to="/support"
                        class="dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium">
                        Support</router-link>-->
                    <router-link to="/settings"
                        class="dsw-text-base dsw-border-transparent dsw-text-dark-gray hover:dsw-text-black hover:dsw-border-black dsw-whitespace-nowrap dsw-py-4 dsw-px-1 dsw-border-b-4 dsw-font-medium">
                        License</router-link>
                    
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
</style>