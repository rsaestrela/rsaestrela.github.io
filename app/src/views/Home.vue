<template>
  <div class="profile-container">
    <div class="wrapper">
      <div class="container">
        <img class="profile-image" src="@/assets/profile_image.png"/>
      </div>
      <div class="container">
      <h1 class="name"> {{ name }}</h1>
      <span class="title">{{ currentPosition }} @ {{ currentCompany }}</span>
      <div class="social-container">
        <span class="link" v-for="socialLink in socialLinks" v-bind:key="socialLink.service">
          <a class="text" :href="socialLink.url" target="_blank">{{ socialLink.service }}</a>
        </span>
      </div>
      <p>Born in 1989</p>
      <p>From: Porto 🇵🇹</p>
      <p>Living in: {{ currentCity }} 🇪🇸</p>
      <p>Mother tongue: Portuguese</p>
      <p>E-mail: <a href="mailto:rsaestrela@gmail.com" class="email"><code>rsaestrela@gmail.com</code></a></p>
    </div>
    <Feed :github-url="socialLinks[1].url"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Feed from '@/components/Feed.vue'

export default {
  name: 'Home',
  components: {
    Feed
  },
  data() {
    return {
      name: 'Raul Estrela',
      currentPosition: 'Backend Developer',
      currentCompany: 'Netcentric',
      socialLinks: [
        { 
          service: 'LinkedIn',
          url: 'https://www.linkedin.com/in/raulsilvaestrela/'
        },
        { 
          service: 'GitHub',
          url: 'https://github.com/rsaestrela'
        }
      ],
      currentCity: 'Barcelona',
    }
  },
}
</script>

<style scoped lang="scss">

p {
  margin: 0;
  padding-bottom: .5rem;
  font-size: 0.9rem;
}

.profile-container {
  align-items: center;
  border-radius: 5px;
  margin: 0 auto;
  width: 750px;
}

.container {
  float: left;
  margin-left: .8rem;
  margin-right: .8rem;
}

.profile-image {
  border: 3px solid black;
  border-radius: 50%;
  float: left;
  width: 18rem;
}

.name {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0;
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
  .profile-container {
    max-width: 100%;
  }
  .wrapper {
    align-items: flex-start;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .container {
    width: 100%;
  }
  .profile-image {
    width: 14rem;
  }
  .title {
    font-size: 0.8rem;
  }
}

</style>
