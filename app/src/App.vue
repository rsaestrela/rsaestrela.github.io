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
  box-shadow: 2px 3px 0px black;
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

.container {
  float: left;
  margin-left: .8rem;
  margin-right: .8rem;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}

</style>
