import Vue from 'vue';
import Vuex from 'vuex';
import GitHubFeedModule from './GitHubFeedModule'
import SocialLinksModule from './SocialLinksModule'
import BlogRssModule from './BlogRssModule'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    GitHubFeedModule,
    SocialLinksModule,
    BlogRssModule
  }
})

export default store;