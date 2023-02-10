<template>
  <h3>Create task</h3>
  <form @submit.prevent="createTask">
    <!-- la page ne se rafraichit pas avec prevent -->
    <input type="text" v-model="name" placeholder="task name" ref="txtName" />
    <br />
    <textarea
      cols="30"
      rows="10"
      v-model="description"
      placeholder="Task description"
    >
    </textarea>
    <br />
    <select v-model="temporality">
      <option
        v-for="tempo in temporalityTypes"
        :value="tempo.value"
        :key="tempo.id"
      >
        {{ tempo.name }}
      </option>
    </select>
    <br />
    <button :disabled="!isFormValid">Create</button>
  </form>
</template>

<script>
import { ref, onMounted, computed } from "vue"; // onMounted va jouer sur le focus
export default {
  name: "Form",
  emits: ["createtask"],
  setup(props, context) {
    const name = ref("");
    const description = ref("");
    const temporalityTypes = ref([
      {
        id: 1,
        name: "short term",
        value: "short-term",
      },
      {
        id: 2,
        name: "medium term",
        value: "medium-term",
      },

      {
        id: 3,
        name: "long term",
        value: "long-term",
      },
    ]);
    const temporality = ref("");
    let txtName = ref(null);
    function createTask() {
      const task = {
        id: Date.now(),
        name: name.value,
        description: description.value,
        temporality: temporality.value,
      };
      //   console.log(task);
      context.emit("createtask", task); // task est ici un payload
      resetForm();
    }

    function resetForm() {
      name.value = "";
      description.value = "";
      temporality.value = "";
      txtName.value.focus();
    }
    onMounted(() => {
      txtName.value.focus();
    });

    const isFormValid = computed(() => { // computed permet ici de calculer une nouvelle valeur en fonction de d'autres valeurs
      if(name.value !== "" && description.value !== "" & temporality.value !=="") {
        return true;
      } else {
        return false;
      }

    });
  
    return {
      name,
      description,
      temporalityTypes,
      temporality,
      createTask,
      txtName,
      isFormValid,
    };
  },
};
</script>

<style scoped>
input,
textarea,
select,
button {
  width: 90%;
  margin: 5px 10px;
}
</style>
