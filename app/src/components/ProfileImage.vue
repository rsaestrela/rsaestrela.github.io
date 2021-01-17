<template>
  <div class="container">
    <div class="profile-image" @click="home"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProfileInfo',
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
  border: $border-regular solid $grayish;
  border-radius: $border-radius-regular;
  cursor: pointer;
  height: 10rem;
  width: 10rem;
}

</style>
