<template>
  <div class="home-container">
    <div class="wrapper">
      <ProfileImage/>
      <ProfileInfo/>
      <Topics/>
      <Feed/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import Feed from '@/components/Feed.vue'
import Topics from '@/components/Topics.vue'

export default {
  name: 'Home',
  components: {
    Feed,
    Topics,
    ProfileInfo,
    ProfileImage
  },
}
</script>

<style scoped lang="scss">

.wrapper {
  margin-bottom: 1rem;
}

.home-container {
  align-items: center;
  border-radius: 5px;
  margin: 0 auto;
  width: 600px;
}

@media (max-width: 600px) {
  .wrapper {
    align-items: flex-start;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .home-container {
    max-width: 100%;
  }
}

</style>
