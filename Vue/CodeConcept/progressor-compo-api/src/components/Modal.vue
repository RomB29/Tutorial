<template>

  <div class="modal-background">
    <div class="modal">
      <div>
        <h3>Modify task</h3>
        <form @submit.prevent="saveTask">
          <input
            type="text"
            v-model="taskToEdit.name"
            placeholder="Task name"
          />
          <br />
          <textarea cols="30" rows="10" v-model="taskToEdit.description">
          </textarea>
          <br />
          <select v-model="taskToEdit.temporality">
            <option
              v-for="tempo in temporalityTypes"
              :value="tempo.value"
              :key="tempo.id"
              :selected="tempo.value === taskToEdit.temporality"
            >
              {{ tempo.name }}
            </option>
          </select>

          <button :disabled="!isFormValid">Save</button>
          <button @click="cancel">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Modal",
  props: {
    task: {
      required: true,
    },
  },
  setup(props, context) {
    /* eslint-disable prettier/prettier */
    let taskToEdit = ref({ ...props.task });
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
    let temporality = ref("");
    function saveTask() {
      const taskUpdated = {
        id: taskToEdit.value.id,
        name: taskToEdit.value.name,
        description: taskToEdit.value.description,
        temporality: taskToEdit.value.temporality,
      };
      console.log("taskUpdated", taskUpdated);
      context.emit("updateTask", taskUpdated);
    }
    function cancel() {
      context.emit("cancel");
      // eslint-disable-next-line prettier/prettier
    }
    const isFormValid = computed(() => {
      // computed permet ici de calculer une nouvelle valeur en fonction de d'autres valeurs
      if (
        taskToEdit.value.name !== "" &&
        taskToEdit.value.description !== "" &&
        taskToEdit.value.temporality !== ""
      ) {
        return true;
      } else {
        return false;
      }
    });
    return {
      temporalityTypes,
      temporality,
      taskToEdit,
      saveTask,
      cancel,
      isFormValid,
    };
  },
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.3s ease;
}
.modal {
  border: 4px solid #42b983;
  background-color: #fff;
  padding-bottom: 22px;
  margin: 30px;
}
</style>
