<template>
    <div>
        <nav class="p-5">
            <div class="nav-wrapper place-items-center space-x-6 w-full flex">
                <div class="px-0 md:px-5 flex justify-around items-center space-x-10">
                    <div class="w-full">
                        <span class="text-2xl lg:text-4xl font-semibold"><span class="text-red-500">&lt; </span>wigan
                            coders<span class="text-red-500"> /></span></span>
                    </div>
                    <div class="md:hidden" @click.prevent="openCloseNav()">
                        <img src="../assets/menu_FILL0_wght400_GRAD0_opsz48.svg" width="30" height="30" alt="" class="ml-10" />
                    </div>
                <div class="font-bold space-x-8 hidden md:flex">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
            </div>
            <div v-if="navIsOpen" class="nav-modal shadow-lg absolute top-5 left-0 bg-white p-4 w-10/12">
                <div class="top-0 right-5">
                    <img @click.prevent="openCloseNav()" src="../assets/close_FILL0_wght400_GRAD0_opsz48.svg" width="20"
                        height="20" alt="" class="font-bold">
                </div>
                <div class="text-xl p-4 font-bold">
                    <ul class="space-y-6">
                        <li>
                            <router-link to="/"> Home </router-link>
                        </li>
                        <li>
                            <router-link to="/about"> About </router-link>
                        </li>
                        <li>
                            <router-link to="/contact"> Contact </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navIsOpen: false,
        };
    },
    methods: {
        openCloseNav() {
            this.navIsOpen = !this.navIsOpen;
        },
    },
};
</script>

<style scoped>

</style>