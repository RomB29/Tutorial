import { createStore } from 'vuex'

export default createStore({
  state: {
    currentCountValue
  },
  mutations: {
    incrementCount(state) {
      currentCountValue++;
    }
  },
  actions: {
  },
  modules: {
  }
})
