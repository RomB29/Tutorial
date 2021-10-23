<template>
    <input type="text" v-model="title" @keypress.enter="save" />
    <p>total notes: {{ totalNotes }} </p>

</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Notes",
  setup() {
    const store = useStore();
    const title = ref("");

    const totalNotes = computed(() => store.getters.totalNotes);
    console.log("totalNotes", totalNotes);
    
    function save() {
      // notes.value.push(title.value);
      // title.value = "";
      // store.commit("SAVE_NOTE", title.value) // mutations
      store.dispatch('saveNote', title.value);
    }
    return {
      totalNotes,
      title,
      save,
    };
  },
};
</script>

<style>
</style>