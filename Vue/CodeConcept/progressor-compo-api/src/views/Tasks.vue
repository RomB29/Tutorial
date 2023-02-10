<template>
  <Modal
    v-if="isInEditMode"
    :task="taskToEdit"
    @updateTask="updateTask($event)"
    @cancel="cancelEdit"
  />
  <input type="text" placeholder="filter" v-model="letters" @keyup="filter" />
  <div class="radio-filters">
    <label for="all">
      <input type="radio" id="all" value="" v-model="selectedTemporality" /> all
    </label>
    <label for="short-term">
      <input
        type="radio"
        id="short-term"
        value="short-term"
        v-model="selectedTemporality"
      />
      short term
    </label>
    <label for="medium-term">
      <input
        type="radio"
        id="medium-term"
        value="medium-term"
        v-model="selectedTemporality"
      />
      medium term
    </label>
    <label for="long-term">
      <input
        type="radio"
        id="long-term"
        value="long-term"
        v-model="selectedTemporality"
      />
      long term
    </label>
  </div>
  <div v-show="tasksFiltered.length > 0">
    <div class="task" v-for="task in tasksFiltered" :key="task.id">
      <h3>{{ task.name }}</h3>
      <p>{{ task.description }}</p>
      <p>Time: {{ convert_case(task.temporality) }}</p>
      <div>
        <button class="small" @click="() => deleteTask(task.id)">delete</button>
        <button class="small" @click="() => toggle(task)">Modify</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */

import { ref, watch } from "vue"; // NB: .value quand on utilise ref coté script, .value inutile côté front
import tasksService from "@/services/tasks.js";
import Modal from "../components/Modal.vue";
export default {
  name: "Tasks",
  components: {
    Modal,
  },
  setup() {
    const tasks = ref([]);
    const letters = ref("");
    const selectedTemporality = ref("");
    tasks.value = tasksService.read();
    let tasksFiltered = ref([]);
    let taskToEdit = ref(null);
    let isInEditMode = ref(false);
    filter(); // l'appel à filter ici permet d'entrer dans la condition if, qui permettra d'afficher dès le départ l'ensemble de nos tâches crées

    function convert_case(temporality) {
      return tasksService.convert_case(temporality);
    }
    function filter() {
      if (letters.value.length === 0) {
        tasksFiltered.value = tasks.value;
      } else {
        tasksFiltered.value = tasks.value.filter((t) =>
          t.name.toLocaleLowerCase().includes(letters.value.toLocaleLowerCase())
        );
      }
      if (selectedTemporality.value !== "") {
        tasksFiltered.value = tasks.value.filter(
          (t) => t.temporality === selectedTemporality.value
        );
        console.log("taskFiltered", tasksFiltered);
        console.log("selectedTemporality.value", selectedTemporality.value);
      }
    }

    function toggle(task) {
      console.log("toggle", task);
      isInEditMode.value = true;
      taskToEdit.value = task;
    }

    function updateTask(task) {
      console.log("updateTask", task);
      tasksService.update_task(task);
      cancelEdit();
      tasks.value = tasksService.read();
    }

    function cancelEdit() {
      isInEditMode.value = false;
      taskToEdit.value = null;
    }

    function deleteTask(id) {
      //debugger;
      tasksService.delete_task(id);
      tasks.value = tasksService.read();
      filter();
    }
    watch(selectedTemporality, (newValue, oldValue) => {
      // watch permet ici de selectionner une nouvelle valeur updater ou même de prendre une ancienne valeur d'une variable spécifique
      console.log("newValue: ", newValue, " oldValue: ", oldValue);
      if (newValue !== "") {
        filter();
      } else {
        tasksFiltered.value = tasks.value;
        filter();
      }
    });
    return {
      tasks,
      tasksFiltered,
      convert_case,
      letters,
      filter,
      deleteTask,
      selectedTemporality,
      isInEditMode,
      toggle,
      updateTask,
      taskToEdit,
      cancelEdit,
    };
  },
};
</script>

<style scoped>
.task {
  margin: 10px 15px;
  border: 3px solid #42b983;
  border-radius: 5px;
}
.radio-filters {
  display: flex;
  justify-content: center;
}
.small {
  width: 55px;
}
</style>
