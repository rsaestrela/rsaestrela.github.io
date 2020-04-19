<template>
  <div class="container">
    <div class="profile-image" :class="{ 'minified' : minify }" @click="home"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProfileInfo',
  props: {
    minify: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  methods: {
    home() {
      this.$router.push({ name: 'home' }) 
    }
  }
}
</script>

<style scoped lang="scss">

.profile-image {
  background: url("../assets/profile_image.png") no-repeat;
  background-size: 100% 100%;
  border: 3px solid #24292e;
  border-radius: 50%;
  height: 14rem;
  width: 14rem;
}

.minified {
  border: 2px solid #24292e;
  height: 6rem;
  width: 6rem;
  cursor: pointer;
}

</style>
