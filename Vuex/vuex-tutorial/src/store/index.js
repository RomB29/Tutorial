import { createStore } from "vuex";

const store = createStore({
    state: {
        title: "VueX Store",
        notes: [],
    },
    getters: {
        totalNotes(state) {
            return state.notes.length;
        }
    },
    actions: {
        saveNote({commit}, title) {
            commit('SAVE_NOTE',title);
        }
    },
    mutations: {
        SAVE_NOTE(state, title) {
            state.notes.push(title);
        }
    },
});

export default store;