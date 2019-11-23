import Vue from 'vue';
import { getCommits } from '../service/gh/getCommits';

const defaultState = {
  commits: [],
};

const moduleState = Object.assign({}, defaultState);

const mutations = {
  addCommits(state, persist) {
    const updated = [...state.commits];
    const repositoryCommits = persist.response.map(payload => { 
        return {
            repository: persist.repo,
            sha: payload.commit.tree.sha.substr(payload.commit.tree.sha - 5),
            url: payload.html_url,
            date: payload.commit.author.date,
            message: payload.commit.message
        }
    }).filter(commit => !commit.message.startsWith("Merge")).slice(0,3)
    updated.push(...repositoryCommits)
    Vue.set(state, 'commits', updated);
  },
};

const actions = {
  async getCommits({ commit, state }, repo) {
    try {
      const response = await getCommits(repo);
      commit('addCommits', { response, repo });
    } catch (ex) {
      //Vue.$log.warn(ex);
    }
  },
};

const getters = {
    commits: ({ commits }) => commits,
};

export default {
  namespaced: true,
  state: moduleState,
  mutations,
  actions,
  getters,
};
