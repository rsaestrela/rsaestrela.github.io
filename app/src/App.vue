<template>
  <div id="site">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Space+Mono');

body {
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $grayish;
  margin: 0;
}

#site {
  height: 100vh;
  box-sizing: border-box;
  margin-top: 1rem;

}

.link {
  background-color: $white;
  border: $border-regular solid $grayish;
  box-shadow: 2px 2px 0px $grayish;
  text-transform: uppercase;
  margin-right: 0.65rem;
  padding-left: .3rem;
  padding-right: .3rem;
  border-radius: $border-radius-small;
  .text {
    font-size: 1.2rem;
    color: $grayish;
    text-decoration: none;
  } 
}

.container {
  float: left;
  margin-left: .4rem;
  margin-right: .4rem;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}

</style>
