<template>
  <div v-if="loaded">
    <section class="
        text-3xl
        flex
        justify-center
        content-center
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
    <section class="flex justify-center content-center text-6xl">
      <div class="days mr-1 mt-2 relative">
        {{ displayDays }}
        <div class="label text-sm absolute bottom-0 left-4">days</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours mx-2 mt-2 relative">
        {{ displayHours }}
        <div class="label text-sm absolute bottom-0 left-4">hours</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="minutes mx-2 mt-2 relative">
        {{ displayMinutes }}
        <div class="label text-sm absolute bottom-0 left-4">minutes</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="seconds mt-2 relative">
        {{ displaySeconds }}
        <div class="label text-sm absolute bottom-0 left-4">seconds</div>
      </div>
    </section>
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