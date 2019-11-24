<template>
  <div id="site">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        name: 'Raul Estrela',
        siteDescription: '@rsaestrela personal website',
        profileImage: `${location.host}/img/profile_image.png`
      }
    },
    metaInfo() {
      return {
        title: 'Raul Estrela',
        meta: [
          {
            'http-equiv': 'Content-Type', 
            content: 'text/html; charset=utf-8'
          },
          {
            name: 'viewport', 
            content: 'width=device-width, initial-scale=1'
          },
          {
            name: 'description', 
            content: this.siteDescription
          },
          {
            property: 'og:title', 
            content: this.name
          },
          {
            property: 'og:site_name', 
            content: this.name
          },
          {
            property: 'og:type', 
            content: 'website'
          },
          {
            property: 'og:url', 
            content: location.host
          },
          {
            property: 'og:image', 
            content:  this.profileImage
          },
          {
            property: 'og:description', 
            content: this.siteDescription
          },
          {
            itemprop: 'name', 
            content: this.name
          },
          {
            itemprop: 'description', 
            content: this.siteDescription
          },
          {
            itemprop: 'image', 
            content: this.profileImage
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Space+Mono');

#site {
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
  color: black;
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

</style>
