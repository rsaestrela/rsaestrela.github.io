import Vue from 'vue';
import { socialLinks } from '../config/socialLinks';

const defaultState = {
  socialLinks: [],
};

const moduleState = Object.assign({}, defaultState);

const mutations = {
  setSocialLinks(state, socialLinks) {
    Vue.set(state, 'socialLinks', socialLinks);
  },
};

const actions = {
  async loadSocialLinks({ commit }) {
    commit('setSocialLinks', socialLinks);
  },
};

const getters = {
  socialLinks: ({ socialLinks }) => socialLinks.filter(socialLink => socialLink.enabled),
  socialLink: ({ socialLinks }) => (service) => {
    return socialLinks.find(socialLink => socialLink.service === service && socialLink.enabled)
  }
};

export default {
  namespaced: true,
  state: moduleState,
  mutations,
  actions,
  getters,
};
