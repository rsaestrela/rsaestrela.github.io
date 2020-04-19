<template>
  <div class="container updates">
    <h4 v-if="commitsAvailable" class="updates-title">feed</h4>
    <a class="update-clickable" v-for="commit in commits" v-bind:key="commit.message" :href="commit.url">
      <div class="update">
        <span class="update-header">{{ commit.date.substr(0, 10) }} - {{ commit.repository }} </span>
        <span class="update-description">* {{ commit.message }}</span>
      </div>
    </a>
    <span v-if="commitsAvailable" class="link"><a class="text" :href="ghLink" target="_blank">more</a></span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Feed',
  data() {
    return {
      ghLink: null,
    }
  },
  computed: {
    ...mapGetters({
      commits: 'GitHubFeedModule/commits',
      socialLink: 'SocialLinksModule/socialLink',
    }),
    commitsAvailable() {
      return this.commits.length;
    }
  },
  methods: {
    ...mapActions('GitHubFeedModule', ['getCommits']),
  },
  async created() {
    await this.getCommits()
    this.ghLink = await this.socialLink('GitHub').url
  }
}
</script>

<style scoped lang="scss">

.update {
  border: 2px solid #24292e;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 2px 3px 0px #24292e;
  margin-bottom: 1rem;
  width: 325px;
}

.update-clickable {
  color: #24292e;
  text-decoration: none;
}

.updates {
  float: right;
}

.updates-title {
  font-size: 0.9rem;
  display: block;
  text-transform: uppercase;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
}

.update-logo {
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  max-width: 3rem;
}

.update-header {
  font-size: 0.8rem;
  margin-left: .5rem;
}

.update-description {
  display: block;
  font-size: 0.85rem;
  margin-left: .5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
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
