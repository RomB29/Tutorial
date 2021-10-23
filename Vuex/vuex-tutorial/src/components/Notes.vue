<template>
  <ul>
    <li v-for="(note, index) in notes" :key="index">
      {{ note }}
    </li>
  </ul>
  <!-- <input type="text" v-model="title" @keypress.enter="save" /> -->
  <!-- <p>total notes: {{ totalNotes }} </p>  -->
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Notes",
  setup() {
    const store = useStore();
    const notes = computed(() => store.state.notes);
    // const totalNotes = computed(() => store.getters.totalNotes);
    // console.log("totalNotes", totalNotes);
    return {
      notes,
    };
  },
};
</script>

<style>
</style>