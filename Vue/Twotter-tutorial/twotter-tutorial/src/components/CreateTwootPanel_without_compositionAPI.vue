 <template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount > 180}">
        <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount}}/180) </label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>
    
        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
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
        </div>
    </form>
</template>

<script>
export default {
    name: "CreateTwootPanel",
    data() {
        return {
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes: [
                { value: 'draft', name: 'Draft'},
                { value: 'instant', name: 'Instant Twoot'}
            ],

        }
    },
  
  computed: {
      newTwootCharacterCount() {
        return this.newTwootContent.length;
      }
  },

  methods: {
      createNewTwoot() {
         if (this.selectedTwootType !== 'draft' && this.newTwootContent !== '') {
            /*
            Does not work since the id is handle away
            *this.user.twoots.unshift({
            id: this.user.twoots.length+1,
            content: this.newTwootContent
            })
            */
            this.$emit('add-twoot', this.newTwootContent)
            this.newTwootContent = ''
        }
      }
  }

};

</script>

<style lang="scss" scoped>
.create-twoot-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }
    .create-twoot-panel__submit {
        display: flex;
        justify-content: space-between;

        .create-twoot-type {
            padding: 10px 0;
        }

        button {
        padding: 5px 20px;
        margin: auto 0;
        border-radius: 5px;
        border: none;
        background-color: deepskyblue;
        color: white;
        font-weight: bold;
        &:hover {
            transform: scale(1.1, 1.1);
        }
    }
  }
  &.--exceeded {
    color: red;
    border-color: red;
    .create-twoot-panel__submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>