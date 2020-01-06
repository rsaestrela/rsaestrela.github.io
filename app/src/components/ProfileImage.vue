<template>
  <div class="container">
    <img class="profile-image" :class="{ 'minified' : minify }" @click="home" src="@/assets/profile_image.png"/>
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
  border: 3px solid black;
  border-radius: 50%;
  width: 14rem;
}

.minified {
  border: 2px solid black;
  width: 6rem;
  cursor: pointer;
}

</style>
