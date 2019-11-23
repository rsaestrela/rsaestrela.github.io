import Vue from 'vue';
import Vuex from 'vuex';
import GitHubFeedModule from './GitHubFeedModule'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    GitHubFeedModule,
  }
})

export default store;