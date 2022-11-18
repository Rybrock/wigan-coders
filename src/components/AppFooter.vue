<template>
        <footer>
            <div class="flex flex-col md:flex-row justify-between p-8 space-y-4 md:space-y-0">
                <div class="px-5 text-lg flex flex-col md:flex-row md:space-x-4">
                    <router-link to="/about">
                        <span>About</span>
                    </router-link>
                    <router-link to="/contact">
                        <span>Contact</span>
                    </router-link>
                </div>
                <div>
                    <span>Find us on Social</span>
                    <div class="flex items-center justify-center text-lg md:space-x-2">
                    <span><img src="../assets/icons8-facebook.svg" alt=""></span>
                    <span><img src="../assets/icons8-instagram.svg" alt=""></span>
                    <span><img src="../assets/icons8-twitter.svg" alt=""></span>
                    <span><img src="../assets/icons8-github.svg" alt=""></span>
                </div>
                </div>
                <div class="px-5">
                <span class="text-lg font-bold py-6">© wigan coders 2022</span>
            </div>
            </div>
          
        </footer>
</template>