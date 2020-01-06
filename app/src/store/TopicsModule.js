import Vue from 'vue';
import { topicsIndex } from '../config/topicsIndex';
import { getRawFile } from '../service/gh/getRawFile';

const defaultState = {
  topics: [],
};

const moduleState = Object.assign({}, defaultState);

const mutations = {
  setTopics(state, topics) {
    Vue.set(state, 'topics', topics);
  },
};

const actions = {
  async loadTopics({ commit }) {
    const topics = topicsIndex;
    commit('setTopics', topics);
  },
  async getFileContent(state, file) {
    return getRawFile(file);
  },
};

const getters = {
  topics: ({ topics }) => topics.filter(topic => topic.enabled),
  topic: ({ topics }) => (id) => {
    return topics.find(topic => topic.id === id && topic.enabled)
  }
};

export default {
  namespaced: true,
  state: moduleState,
  mutations,
  actions,
  getters,
};
