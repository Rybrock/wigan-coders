<template>
        <footer>
            <div class="flex flex-col md:flex-row justify-between p-8 space-y-10 md:space-y-0">
                <div class="px-2 text-lg md:text-sm flex flex-col md:flex-row md:space-x-4">
                    <router-link to="/">
                        <span>Home</span>
                    </router-link>
                    <router-link to="/about">
                        <span>About</span>
                    </router-link>
                    <router-link to="/contact">
                        <span>Contact</span>
                    </router-link>
                    <router-link to="/privacy-policy">
                        <span>Privacy Policy</span>
                    </router-link>
                    <router-link to="/terms">
                        <span>Terms & Conditions</span>
                    </router-link>
                </div>
                <div>
                    <div class="flex items-center justify-center text-lg space-x-2">
                        <a href="https://www.facebook.com/profile.php?id=100088226045193" target="_blank">
                            <span><img src="../assets/facebook.png" alt="facebook footer icon" width="30" height="30"></span>
                        </a>
                        <a href="https://instagram.com/wigan.coders?igshid=YmMyMTA2M2Y=" target="_blank">
                            <span><img src="../assets/instagram.png" alt="instagram footer icon" width="30" height="30"></span>
                        </a>
                        <a href="https://twitter.com/coders_wigan" target="_blank">
                            <span><img src="../assets/twitter.png" alt="twitter footer icon" width="30" height="30"></span>
                        </a>
                    <a href="https://github.com/Wigan-Coders-Git" target="_blank">
                        <span><img src="../assets/github.png" alt="github footer icon" width="30" height="30"></span>
                    </a>
                </div>
                </div>
                <div class="px-5">
                <span class="text-lg py-6">© wigan coders 2022</span>
            </div>
            </div>
          
        </footer>
</template>

<script>
export default {

    }

</script>