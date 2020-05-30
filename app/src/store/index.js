import Vue from 'vue';
import Vuex from 'vuex';
import GitHubFeedModule from './GitHubFeedModule'
import SocialLinksModule from './SocialLinksModule'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    GitHubFeedModule,
    SocialLinksModule
  }
})

export default store;