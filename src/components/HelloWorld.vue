<template>
  <div class="greetings">
    <h3 class="text-sm">A place for like minded people to learn about all things coding.</h3>
    <h3 class="mt-8 text-lg">
      Interested? Send us an
      <span class="text-blue-800 text-lg">
        <a href="mailto:brockers@wigan-coders.uk">Email</a></span
      >
    </h3>
  </div>
  <div class="social mt-4">
    <div class="flex justify-center items-center space-x-2">
    <h3 class="text-lg">Find us on Social</h3>
      <div>
        <a href="https://mobile.twitter.com/coders_wigan" target="blank">
        <img src="../assets/twitter.png" alt="" width="40" height="40" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
