<template>
  <div class = "user-profile">
      <div class="user-profile__sidebar">
        <div class="user-profile__user-panel">
          <h1 class="user-profile__user-panel"> @{{ state.user.username }} </h1>
          <!-- <h2> ID user = {{ userId }} </h2> --> <!-- Renvoi le 1 avec comme exemple /1 -->
          <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
              Admin
          </div>
          <div class="user-profile__admin-badge" v-if="!state.user.isAdmin"> <!-- v-if"!" different of -->
              User non admin
          </div>

          <div class="user-profile__follower-count">
              <strong>Followers: </strong> {{ state.followers }}
          </div>
        </div>
        <CreateTwootPanel @add-twoot="addTwoot"/>
      </div>  
      <div class="user-profile__twoots-wrapper">
          <TwootItem 
          v-for="twoot in state.user.twoots"  
          :key="twoot.id"
          :username="state.user.username" 
          :test2="state.user.test2"
          :twoot="twoot" 
          @favourite="toggleFavourite" 
          />  <!--will call username and twoot in TwootItem -->
      </div>   
       
         <!-- Code above put in another component (TwootItem.vue)
          <div class="user-profile___twoot" v-for="twoot in user.twoots" :key="twoot.id">
              {{ twoot.content }}
          </div>
          -->
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { users } from "../assets/users";
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from "../components/CreateTwootPanel";
//import config from "../const/config";

export default {
  name: 'user-profile',
  components: { CreateTwootPanel, TwootItem },
  setup () {
    const route  = useRoute();
    const userId = computed(() => route.params.userId);


    // in real app if (userId) fetchUserFromApi(userId)
    const state = reactive({
      followers: 3,
      /*user: {
        id: 1,
        username: "RomB",
        firstName: "Romain",
        lastName: "Bodec",
        test2: config.PERSON,
        email: "romain.bodec@hotmail.fr",
        isAdmin: true,
        twoots: [ 
            { id: 1, content: "Amazing tool"},
            { id: 2, content: "Really amazing isn't it ?"}
        ]
      }
      */
      user: users[userId.value - 1] || users[4]
    })

    function addTwoot(twoot) {
      state.user.twoots.unshift({id: state.user.twoots.length+1, content: twoot});
    }
    return {
      state,
      addTwoot,
      userId,
    }
  }
};

  /*watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  */

 /*
  computed: {
      newTwootCharacterCount() {
        return this.newTwootContent.length;
      }
  },
  
  methods: {
      addTwoot(twoot) {
        this.user.twoots.unshift(
          {id: this.user.twoots.length+1, content: twoot});
      }
  },
  */


</script>

<style lang="scss" scoped>

.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;

    .user-profile__user-panel {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      padding: 20px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #DFE3E8;
      h1 {
        margin: 0;
      } 
      .user-profile__admin-badge {
          background: purple;
          color: white;
          border-radius: 5px;
          margin-right: auto;
          padding: 0 10px;
          font-weight: bold;
      }
      .user-profile__create-twoot {
        display: flex;
        grid-gap: 10px;
        border-top: 1px solid #DFE3E8;
        flex-direction: column;
        padding-top: 10px;
      }
    }
}

.user-profile__follower-count {
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}


</style>
