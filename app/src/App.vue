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
  color: #24292e;
  margin: 0;
}

#site {
  height: 100vh;
  box-sizing: border-box;
  margin-top: 1rem;
}

.link {
  border: 2px solid #24292e;
  border-radius: 2px;
  box-shadow: 2px 3px 0px #24292e;
  text-transform: uppercase;
  margin-right: 10px;
  padding-left: .3rem;
  padding-right: .3rem;
  border-radius: 3px;
  .text {
    font-size: 1.2rem;
    color: #24292e;
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
