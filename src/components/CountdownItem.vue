<template>
  <div v-if="loaded" class="mt-4 mb-6">
    <section class="
        text-3xl
        flex
        justify-center
        items-center
        flex-col
        mx-auto
        text-center
      ">
    </section>
    <!-- <h2 v-if="!loaded">Loading...</h2> -->
    <h2 v-if="!expired" class="text-center text-3xl">
      The next meet-up is in
    </h2>
    <h2 v-else class="text-center text-3xl">Expired!</h2>
    <section class="flex justify-center content-center mx-auto text-5xl sm:text6xl mb-6">
      <div class="days mr-1 mt-1 relative">
        {{ displayDays }}
        <div class="label text-sm absolute bottom-0 left-4">days</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours mx-2 mt-1 relative">
        {{ displayHours }}
        <div class="label text-sm absolute bottom-0 left-4">hours</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="minutes mx-2 mt-1 relative">
        {{ displayMinutes }}
        <div class="label text-sm absolute bottom-0 left-4">mins</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="seconds mt-1 relative">
        {{ displaySeconds }}
        <div class="label text-sm absolute bottom-0 left-4">sec</div>
      </div>
    </section>
    <div class="w-full flex justify-center items-center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37939.65447101346!2d-2.6365718281355974!3d53.53583588479713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0f7a87e9050f%3A0x37fbc44593c758a9!2sWigan%20Library!5e0!3m2!1sen!2suk!4v1657920778354!5m2!1sen!2suk" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "countdown-item",
  props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
    expired: false
  }),

  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),

    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        // const end = new Date(2022, 17, 7, 10, 10, 10, 10);
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          this.loaded = true;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 500);
    },
  },
};
</script>

<style>
.seconds {
  max-width: 60px;
}
</style>