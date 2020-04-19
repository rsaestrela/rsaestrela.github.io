import Vue from 'vue';
import { getCommits } from '../service/gh/getCommits';
import { reposIndex } from '../config/reposIndex';

const defaultState = {
  commits: [],
};

const moduleState = Object.assign({}, defaultState);

const mutations = {
  addCommits(state, persist) {
    const repositoryCommits = persist.response.map(payload => { 
        return {
            repository: persist.repo,
            url: payload.html_url,
            date: payload.commit.author.date,
            message: payload.commit.message
        }
    }).filter(commit => !commit.message.startsWith("Merge") && commit.message != "automated deployment")
    const updated = [...state.commits];
    updated.push(...repositoryCommits)
    updated.sort(function(a, b){
      return new Date(b.date) - new Date(a.date);
    });
    Vue.set(state, 'commits', updated.slice(0, 3));
  },
};

const actions = {
  async getCommits({ commit, state }) {
    try {
      for (var repo of reposIndex) {
        const response = await getCommits(repo);
        commit('addCommits', { response, repo });
      }
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
