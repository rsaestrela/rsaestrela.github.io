<template>
  <div class="container">
    <div class="posts-title">blog</div>
    <a class="post-clickable" v-for="entry in rssEntries" v-bind:key="entry.title" :href="entry.link" target="_blank">
      <div class="post">
        <span class="post-header"> {{ formattedPostDate(entry.date) }} </span>
        <span class="post-description">{{ entry.title }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Blog',
  computed: {
    ...mapGetters({
      rssEntries: 'BlogRssModule/rssEntries',
    }),
  },
  methods: {
    ...mapActions('BlogRssModule', ['getRss']),
    formattedPostDate(date) {
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    }
  },
  async created() {
    await this.getRss()
  }
}
</script>

<style scoped lang="scss">

.posts-title {
  border-radius: 5px;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.post {
  background-color: $white;
  border: $border-regular solid $grayish;
  border-radius: $border-radius-small;
  box-sizing: border-box;
  box-shadow: 2px 2px 0px $grayish;
  margin-bottom: 1rem;
  width: 280px;
}

.post-clickable {
  color: $grayish;
  text-decoration: none;
}

.post-header {
  color: $grayish;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: .5rem;
}

.post-description {
  display: block;
  font-size: 0.9rem;
  padding-left: .5rem;
  padding-bottom: 0.4rem;
}


@media (max-width: 600px) {
  .container {
    width: 100%;
    .posts {
      order: 3;
    }
  }
  .post {
    width: 95%;
  }
}

</style>
