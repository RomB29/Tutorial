<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Progressor app" />
    <Form @createtask="addTask" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Form from "@/components/Form.vue";
import tasksService from "@/services/tasks.js";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Form,
  },
  setup() {
    function addTask(data) {
      console.log('Home.vue | addTask()', data);
      tasksService.create(data)
    }
    return { addTask };
  },
};
</script>
