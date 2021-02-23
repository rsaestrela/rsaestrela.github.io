<template>
  <div class="container">
    <div class="updates-header-container">
      <span class="github-logo"/>
      <div v-if="commitsAvailable" class="updates-title">feed</div>
    </div>
    <a class="update-clickable" v-for="commit in commits" v-bind:key="commit.message" :href="commit.url" target="_blank">
      <div class="update">
        <span class="update-header">{{ commit.date.substr(0, 10) }} - {{ commit.repository }} </span>
        <span class="update-description">* {{ commit.message }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Feed',
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
    await this.getCommits();
  }
}
</script>

<style scoped lang="scss">

.updates-title {
  border-radius: $border-radius-small;
  display: inline-block;
  line-height: 2.4rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.updates-header-container {
  display: block;
  height: 45px;
}

.github-logo {
  display: block;
  background: url("../assets/github_logo.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 2%;
  float: left;
  height: 1.6rem;
  margin: 5px;
  width: 1.6rem;
}

.update {
  background-color: $white;
  border: $border-regular solid $grayish;
  border-radius: $border-radius-small;
  box-sizing: border-box;
  box-shadow: 2px 2px 0px $grayish;
  margin-bottom: 1rem;
  width: 300px;
}

.update-clickable {
  color: $grayish;
  text-decoration: none;
}
§
.update-logo {
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  max-width: 3rem;
}

.update-header {
  color: $grayish;
  font-weight: bold;
  font-size: 0.8rem;
  padding-left: .5rem;
}

.update-description {
  display: block;
  font-size: 0.9rem;
  padding-left: .5rem;
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
    width: 95%;
  }
}

</style>
