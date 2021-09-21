<template>
  <div class = "user-profile">
      <div class="user-profile__user-panel">
          <h1 class="user-profile__username"> @{{ user.username }} </h1>
          <div class="user-profile__admin-badge" v-if="user.isAdmin">
              Admin
          </div>

          <div class="user-profile__follower-count">
              <strong>Followers: </strong> {{ followers }}
          </div>
          <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount > 180}">
            <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180) </label>
            <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>
            
            <div class="user-profile__create-twoot-type">
              <label for="newTwootType"><strong>Type: </strong></label>
              <select id=newTwootType v-model="selectedTwootType">
                <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
                 {{ option.name }}
                </option>
              </select>
            </div>

            <button>
              Twoot!
            </button>
          </form>
      </div>
      
      <div class="user-profile__twoots-wrapper">
          <TwootItem 
          v-for="twoot in user.twoots" 
          :key="twoot.id" 
          :username="user.username" 
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
import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel";
export default {
  name: 'user-profile',
  components: { CreateTwootPanel, TwootItem },
  data () {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "RomB",
        firstName: "Romain",
        lastName: "Bodec",
        email: "romain.bodec@hotmail.fr",
        isAdmin: true,
        twoots: [ 
            { id: 1, content: "Amazing tool"},
            { id: 2, content: "Really amazing isn't it ?"}
        ],
      }
    }
  },

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
  */

  methods: {
      addTwoot(twoot) {
        this.user.twoots.unshift(
          {id: this.user.twoots.length+1, content: twoot});
      }
  }
};

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
      
        &.--exceeded {
          color: red;
          border-color: red;
          button {
            background-color: red;
            border: none;
            color: white;

          }
        }
      }
    }
}

.user-profile__follower-count {
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}


</style>
