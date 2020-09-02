<template>
  <div class="container">
    <h1 class="name"> {{ name }}</h1>
    <div class="title">
      <span class="position">{{ currentPosition }}</span>
      <span v-if="currentCompany"> @ {{ currentCompany }}</span>
    </div>
    <div class="social-container">
      <span class="link blog">
        <a class="text" href="/blog" target="_blank">blog</a>
      </span>
      <span class="link" v-for="socialLink in socialLinks" v-bind:key="socialLink.service" @click="raiseSocialLinkEvent(socialLink.service)">
        <a class="text" :href="socialLink.url" target="_blank">{{ socialLink.service }}</a>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProfileInfo',
  props: {
    extendedInfo: {
      type: Boolean,
      required: false,
      default: true
    },
  },
  data() {
    return {
      name: 'Raul Estrela',
      currentPosition: 'Software Engineer',
      currentCompany: '',
      currentCity: 'Barcelona',
    }
  },
  computed: {
    ...mapGetters({
      socialLinks: 'SocialLinksModule/socialLinks',
    }),
  },
  methods: {
    ...mapActions('SocialLinksModule', ['loadSocialLinks']),
    raiseSocialLinkEvent(service) {
      this.$ga.event('link', 'click', 'label', service);
    }
  },
  async created() {
    await this.loadSocialLinks();
  }
}
</script>

<style scoped lang="scss">

.name {
  font-size: 1.7rem;
  line-height: 2rem;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: 0;
  user-select: none;
}

.title {
  display: block;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.position {
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: 0;
  user-select: none;
}

.social-container {
  margin-bottom: .8rem;
  margin-top: .5rem;
}

.blog {
  border-color: rgb(133, 255, 189);
}

@media (max-width: 600px) {
  p {
    font-size: 0.8rem;
  }
  .name {
    margin-top: 0.5rem;
  }
  .title {
    font-size: 0.8rem;
  }
  .position {
    font-size: 1.3rem;
  }
}

</style>
