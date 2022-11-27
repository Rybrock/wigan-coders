<template>
  <div class="home p-4 bg-stone-50">
    <section>
      <div
      class="
        text-left
        px-0
        lg:px-5
        flex flex-col
        lg:flex-row
        justify-center
        lg:justify-start
        items-center
        lg:space-x-4
        text-stone-800
        lg:pb-28
      "
    >
      <div class="text-left mt-10 w-full lg:w-7/12">
        <span class="font-bold text-4xl lg:text-4xl mb-8">Learn how to code with us</span>
        <p class="w-full lg:w-9/12 mt-8 text-xl">
          Come to our meet-up event at Wigan Library every Saturday morning.
          Where we discuss and learn about all things coding. We build exciting
          real world projects with HTML, CSS and JAVASCRIPT.
        </p>
        <div class="mt-10">
      <app-countdown :date="end" @onFinish="finish()"></app-countdown>
    </div>
    <div class="mt-2 mr-14 text-left lg:text-right">
      <span class="mt-4">see where we are <a href="https://goo.gl/maps/BfCne5e6i4SWBMZC7" target="_blank" class="text-blue-400">located</a></span>
    </div>
      </div>
   
      <div class="w-full lg:w-6/12">
        <img
          src="../assets/HP-IMG.jpg"
          alt="image of a person coding"
          class="w-full mt-8 lg-mt-0"
          width="800"
          height="533"
        />
      </div>
    
    </div>
    </section>
    
    <section>
      <div class="mt-10">
        <app-code-meet/>
      </div>
    </section>

  </div>

  <section>
    <div>
      <app-expect/>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import AppCountdown from "@/components/AppCountdown.vue";
import AppCodeMeet from "@/components/layouts/AppCodeMeet.vue";
import AppExpect from "@/components/layouts/AppExpect.vue";
export default {
  name: "HomeView",
  components: {
    AppCountdown,
    AppCodeMeet,
    AppExpect
  },
  data() {
    return {
      end: new Date("2022-12-03T10:00:00"),
    };
  },
  methods: {
    finish() {
      console.log("finish");
    },
  },
};
</script>
 <style>
</style>