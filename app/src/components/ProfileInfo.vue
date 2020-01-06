<template>
  <div class="container">
    <h1 class="name"> {{ name }}</h1>
    <div class="title">
      <span>{{ currentPosition }}</span>
      <span v-if="currentCompany"> @ {{ currentCompany }}</span>
    </div>
    <div class="social-container">
      <span class="link" v-for="socialLink in socialLinks" v-bind:key="socialLink.service">
        <a class="text" :href="socialLink.url" target="_blank">{{ socialLink.service }}</a>
      </span>
    </div>
    <div v-if="extendedInfo">
      <p>Born in 1989</p>
      <p>From: Porto 🇵🇹</p>
      <p>Living in: {{ currentCity }} 🇪🇸</p>
      <p>Mother tongue: Portuguese</p>
      <p>E-mail: <a href="mailto:rsaestrela@gmail.com" class="email">rsaestrela@gmail.com</a></p>
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
      currentPosition: 'Java Developer',
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
  },
  async created() {
    await this.loadSocialLinks();
  }
}
</script>

<style scoped lang="scss">

p {
  margin: 0;
  padding-bottom: .5rem;
  font-size: 0.8rem;
}

.name {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: 0;
}

.title {
  display: block;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.social-container {
  margin-bottom: .8rem;
  margin-top: .5rem;
}

.email {
  text-decoration: underline;
}

@media (max-width: 600px) {
  p {
    font-size: 0.8rem;
  }
  .title {
    font-size: 0.8rem;
  }
}

</style>
