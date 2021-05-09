import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facts: []
  },
  mutations: {
    async getFacts() {
      try {
        const res = await fetch("https://cat-fact.herokuapp.com/facts");
        const data = await res.json();
        this.state.facts = data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  actions: {
    getFactsFetch({
      commit
    }) {
      commit('getFacts');
    }
  }
})