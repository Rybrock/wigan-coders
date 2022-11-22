<template>
    <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
        <div class="flex justify-center p-4 rounded-full space-x-6 lg:w-5/12 hidden lg:flex">
        <span class="text-grey font-bold text-xl">Join us on the next event ></span>
    </div>
    <div class="lg:hidden mb-4">
        <span class="ext-grey font-bold text-2xl text-left">Our next event is</span>
    </div>
    <div class="countdown flex justify-center p-3 md:p-4 rounded-full space-x-4 bg-blue-400 hover:bg-blue-300 w-11/12 md:w-6/12">
      <div v-if="days" class="countdown__block text-sm md:text-xl font-bold text-white flex space-x-2">
        <div class="countdown__digit">{{ days | twoDigits }}</div>
        <div class="countdown__text">Days</div>
      </div>
      <div class="countdown__block text-sm md:text-xl font-bold text-white flex space-x-2">
        <div class="countdown__digit">{{ hours | twoDigits }}</div>
        <div class="countdown__text">Hrs</div>
      </div>
      <div class="countdown__block text-sm md:text-xl font-bold text-white flex space-x-2">
        <div class="countdown__digit">{{ minutes | twoDigits }}</div>
        <div class="countdown__text">Min</div>
      </div>
      <div class="countdown__block text-sm md:text-xl font-bold text-white flex space-x-2">
        <div class="countdown__digit">{{ seconds | twoDigits }}</div>
        <div class="countdown__text">Sec</div>
      </div>
    </div>
    </div>
    
  </template>
  <script>
  export default {
    props: {
      date: null
    },
    data () {
      return {
        now: Math.trunc((new Date()).getTime() / 1000),
        event: this.date,
        finish: false,
        twoDigits: ''
      }
    },
    mounted () {
      const _self = this
      window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
        if (!this.finish && this.calculatedDate - this.now <= 0) {
          _self.finish = true
          _self.$emit('onFinish')
        }
      }, 1000)
    },
    computed: {
      secondCount () {
        return this.calculatedDate - this.now
      },
      calculatedDate () {
        return Math.trunc(Date.parse(this.event) / 1000)
      },
      seconds () {
        if (this.secondCount < 0) return 0
        return this.secondCount % 60
      },
      minutes () {
        if (this.secondCount < 0) return 0
        return Math.trunc(this.secondCount / 60) % 60
      },
      hours () {
        if (this.secondCount < 0) return 0
        return Math.trunc(this.secondCount / 60 / 60) % 24
      },
      days () {
        if (this.secondCount < 0) return 0
        return Math.trunc(this.secondCount / 60 / 60 / 24)
      }
    },
    filters: {
      twoDigits (value) {
        if (value.toString().length <= 1) {
          return '0' + value.toString()
        }
        return value.toString()
      }
    }
  }
  </script>
  <style scoped>
 
  </style>
  