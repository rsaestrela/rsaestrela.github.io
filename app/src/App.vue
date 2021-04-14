<template>
  <div class="site">
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

.site {
  height: 70vh;
  box-sizing: border-box;
  display:-webkit-flex;
  display: flex;
  -webkit-flex-wrap :wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-align-content: center;
  align-content: center;
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
  margin-left: .4rem;
  margin-right: .4rem;
}

@media (max-width: 600px) {
  .site {
    height: 40vh;
  }
  .container {
    width: 90%;
  }
}

</style>
