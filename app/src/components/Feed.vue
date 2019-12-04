<template>
  <div class="container updates">
    <span class="updates-title">feed</span>
    <a class="update-clickable" v-for="commit in commits" v-bind:key="commit.message" :href="commit.url">
      <div class="update">
        <img class="update-logo" src="../assets/github_logo.png"/>
        <span class="update-header">{{ commit.date.substr(0, 10) }} - {{ commit.repository }} </span>
        <span class="update-description">* {{ commit.message }}</span>
      </div>
    </a>
    <span class="link"><a class="text" :href="githubUrl" target="_blank">more</a></span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Feed',
  props: {
    githubUrl: {
      type: String,
      required: true
    },
  },
  computed: {
    ...mapGetters({
      commits: 'GitHubFeedModule/commits',
    }),
  },
  methods: {
    ...mapActions('GitHubFeedModule', ['getCommits']),
  },
  async created() {
    await this.getCommits(['contentx', 'rsaestrela.github.io', 'message-to-the-world'])
  }
}
</script>

<style scoped lang="scss">

.update {
  border: 1px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 2px 3px 0px black;
  margin-bottom: 1rem;
  width: 380px;
}

.update-clickable {
  color: black;
  text-decoration: none;
}

.updates-title {
  display: block;
  font-weight: bold;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
}

.update-logo {
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  max-width: 1.2rem;
}

.update-header {
  font-size: 0.8rem;
  margin-left: .5rem;
  margin-top: -0.5rem;
}

.update-description {
  display: block;
  font-size: 0.8rem;
  margin-left: .5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
    .updates {
      order: 3;
    }
  }
  .update {
    width: 100%;
  }
}

</style>
