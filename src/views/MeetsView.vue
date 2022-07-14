<template>
  <div class="meets">
    <CountdownItem  
    :year="2022"
    :month="6"
    :date="16"
    :hour="9"
    :minute="59"
    :second="59"
    :millisecond="1"
    />
  </div>
</template>

<script>
import CountdownItem from '../components/CountdownItem.vue'
export default {
  components: {
    CountdownItem
  }
}
</script>

<style>

</style>
