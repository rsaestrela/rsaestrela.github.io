import Vue from 'vue';
import Vuex from 'vuex';
import SocialLinksModule from './SocialLinksModule'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    SocialLinksModule
  }
})

export default store;