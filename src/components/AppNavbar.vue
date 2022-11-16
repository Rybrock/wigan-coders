<template>
  <div>
    <nav class="p-5">
      <div class="nav-wrapper flex place-items-center justify-start space-x-6">
        <div class="px-0 md:px-5">
          <span class="text-4xl font-semibold"><span class="text-red-500">&lt; </span>wigan coders<span class="text-red-500"> /></span></span>
        </div>
        <div class="font-bold space-x-8 hidden md:flex">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <font-awesome-icon icon="fa-solid fa-bars" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>