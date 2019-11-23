<template>
  <div class="profile-container">
    <div class="wrapper">
      <div class="container photo">
        <img class="image" src="../assets/profile_image.png"/>
      </div>
      <div class="container info">
      <h1 class="name"> {{ name }} <span class="profile-user">@rsaestrela</span> </h1>
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
    <div class="container updates">
      <span class="updates-title">feed</span>
      <a class="update-clickable" v-for="commit in commits" v-bind:key="commit.message" :href="commit.url">
        <div class="update">
          <img class="update-logo" src="../assets/github_logo.png"/>
          <span class="update-header">{{ commit.date.substr(0, 10) }} - {{ commit.repository }} @ {{ commit.sha.substr(commit.sha.length - 5) }} </span>
          <span class="update-description">* {{ commit.message }}</span>
        </div>
      </a>
      <span class="link"><a class="text" :href="socialLinks[1].url" target="_blank">more</a></span>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Profile',
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
  computed: {
    ...mapGetters({
      commits: 'GitHubFeedModule/commits',
    }),
  },
  methods: {
    ...mapActions('GitHubFeedModule', ['getCommits']),
  },
  async created() {
    //TODO get from more repositories
    await this.getCommits('contentx')
  }
}
</script>

<style scoped lang="scss">

p {
  margin: 0;
  padding-bottom: 6px;
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
  margin: 10px;
  .photo {
    align-content: center;
    width: 330px;
  }
  .info {
    margin-bottom: 0;
    width: 380px;
  }
}

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

.link {
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 3px 4px 0px black;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;
  padding-left: .2rem;
  padding-right: .2rem;
  .text {
    color: black;
    font-size: .9rem;
    text-decoration: none;
  } 
}

.image {
  border: 3px solid black;
  border-radius: 50%;
  float: left;
  width: 18rem;
}

.name {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.profile-user {
  font-size: 1rem;
  text-transform: none;
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
    .photo {
      order: 1;
    }
    .info {
      order: 2;
    }
    .updates {
      order: 3;
    }
  }
  .update {
    width: 300px;
  }
}

</style>
