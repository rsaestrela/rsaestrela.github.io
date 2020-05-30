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
  border: 2px solid #24292e;
  border-radius: 2%;
  height: 16rem;
  width: 16rem;
  cursor: pointer;
}

</style>
