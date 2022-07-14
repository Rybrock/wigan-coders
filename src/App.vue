<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>
<template>
  <header class="flex flex-col md:flex-row items-center">
    <div class="p-8 sm:p-4 mb-2 md:mb-10">
      <img alt="Laptop logo" class="logo pr-4 mb-10 " src="@/assets/laptop.svg" width="200" height="200" />
    </div>

    <div class="wrapper text-center">
      <h1 class="text-center text-3xl mb-4"><span class="text-blue-800 text-4xl">Wigan Coders</span> meet-up</h1>

      <HelloWorld />

      <nav class="p-3">
        <RouterLink class="p-2 rounded text-xl text-blue-800 hover:bg-blue-200" to="/">Home</RouterLink> |
        <RouterLink class="p-2 rounded text-xl text-blue-800 hover:bg-blue-200" to="/our-meets">Our Meets</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
