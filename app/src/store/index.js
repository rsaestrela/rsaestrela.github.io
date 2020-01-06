import Vue from 'vue';
import Vuex from 'vuex';
import GitHubFeedModule from './GitHubFeedModule'
import TopicsModule from './TopicsModule'
import SocialLinksModule from './SocialLinksModule'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    GitHubFeedModule,
    TopicsModule,
    SocialLinksModule
  }
})

export default store;