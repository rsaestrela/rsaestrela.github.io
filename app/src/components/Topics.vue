<template>
  <div v-if="topics.length" class="container topics">
      <h4 class="topics-title">TOPICS</h4>
      <a class="topic-clickable" v-for="topic in topics" v-bind:key="topic.id" :href="` topic/${topic.id}`">
      <div class="topic">
        <span class="topic-header">{{ topic.date }} {{ topic.id }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Topics',
  computed: {
    ...mapGetters({
      topics: 'TopicsModule/topics',
    }),
  },
  methods: {
    ...mapActions('TopicsModule', ['loadTopics']),
  },
  created() {
    this.loadTopics()
  }
}
</script>

<style scoped lang="scss">

.topics {
  width: 200px;
  border-radius: 3px;
}

.topic {
  border-radius: 3px;
  box-sizing: border-box;
  margin-bottom: .2rem;
  text-decoration: underline;
}

.topics-title {
  font-size: 0.9rem;
  display: block;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0.5rem;
  border-radius: 3px;
}

.topic-clickable {
  color: #24292e;
  text-decoration: none;
}

.topic-header {
  font-size: 0.8rem;
  margin-left: .5rem;
  margin-top: -0.5rem;
}

.topic-description {
  display: block;
  font-size: 0.8rem;
  margin-left: .5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
    .topics {
      order: 3;
    }
  }
}

</style>
