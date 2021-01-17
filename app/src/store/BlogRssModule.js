import Vue from 'vue';
import { getRss } from '../service/blog/getRss';

const defaultState = {
  rssEntries: [],
};

const moduleState = Object.assign({}, defaultState);

const mutations = {
  addRss(state, rssEntries) {
    Vue.set(state, 'rssEntries', rssEntries);
  },
};

const actions = {
  async getRss({ commit, state }) {
    try {
        const response = await getRss();
        const parsed = new window.DOMParser().parseFromString(response, "text/xml");
        const items = [...parsed.querySelectorAll("item")].map(item => {
          const entry = {};
          entry.title = [...item.childNodes][1].innerHTML;
          entry.date = new Date([...item.childNodes][5].innerHTML);
          entry.link = [...item.childNodes][7].innerHTML;
          return entry;
        });
        commit('addRss', items);
    } catch (ex) {
      //Vue.$log.warn(ex);
    }
  },
};

const getters = {
  rssEntries: ({ rssEntries }) => rssEntries,
};

export default {
  namespaced: true,
  state: moduleState,
  mutations,
  actions,
  getters,
};
