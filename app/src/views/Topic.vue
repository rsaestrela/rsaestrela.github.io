<template>
  <div class="topic-container">
    <ProfileImage :minify="true"/>
    <ProfileInfo :extended-info="false"/>
    <div class="container metadata">
      <span class="meta">📎 {{ currentTopic.id }}</span>
      <span class="meta">📆 {{ currentTopic.date }}</span>
      <span class="meta">📝 <a :href="currentTopic.source" target="_blank">source</a></span>
    </div>
    <div class="content markdown-body" v-html="content"/>
  </div>
</template>
<script>

import showdown from 'showdown'
import { mapActions, mapGetters } from 'vuex';
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileImage from '@/components/ProfileImage.vue'

export default {
  name: 'Topic',
  components: {
    ProfileInfo,
    ProfileImage
  },
  data() {
    return {
      currentTopic: null,
      content: null,
    }
  },
  computed: {
    ...mapGetters({
      topic: 'TopicsModule/topic',
    }),
  },
  methods: {
    ...mapActions('TopicsModule', ['loadTopics', 'getFileContent']),
  },
  async beforeMount() {
    this.loadTopics()
    const id = this.$route.params['id'];
    this.currentTopic = this.topic(id)
    if (!this.currentTopic) {
      this.$router.push({ name: 'home' }) 
      return;
    }
    const fileContent = await this.getFileContent(this.currentTopic.content);
    this.content = new showdown.Converter().makeHtml(fileContent);
  }
}
</script>

<style lang="scss">

.topic-details {
  width: 100%;
  margin-top: .5rem;
}

.metadata {
  margin-top: .5rem;
}

.meta {
  margin-right: 1rem;
}

.content {
  display: inline-block;
  width: 100%;
}

.topic-container {
  border-radius: 5px;
  margin: 0 auto;
  width: 750px;
}

pre {
  padding: .5rem;
  line-height: 1.25;
  overflow-x: scroll;
  background-color: #333;
  color: white;
  width: 100%;
}

@media (max-width: 600px) {
  .topic-container {
    border-radius: 5px;
    width: 300px;
    margin: 0;
  }
  .meta {
    font-size: 0.8rem;
    display: block;
  }
}

</style>
