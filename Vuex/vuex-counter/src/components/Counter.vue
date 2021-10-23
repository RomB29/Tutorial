<template>
  <h2> {{ currentCountValue }} </h2>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>

</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let currentCountValue = ref("0");
    function increment() {
      currentCountValue.value++;
    }

    function decrement() {
      currentCountValue.value--;
    }

    return {increment, decrement, currentCountValue,
        };
  },

}

</script>

<style lang="scss" scoped>

</style>