<script setup>

</script>

<template>
  <div class="greetings">
    <h3>
      A place for like minded people to learn about all things coding.
    </h3>
    <h3 class="mt-8">
      Interested? Send us an <span class="text-blue-800"> <a href="mailto:ry.brock@ymail.com">Email</a></span>
    </h3>
  </div>
</template>

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
