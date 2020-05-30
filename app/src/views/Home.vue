<template>
  <div class="home-container">
    <ProfileImage/>
    <ProfileInfo/>
    <Feed/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import Feed from '@/components/Feed.vue'

export default {
  name: 'Home',
  components: {
    Feed,
    ProfileInfo,
    ProfileImage
  },
}
</script>

<style scoped lang="scss">

.home-container {
  align-items: center;
  border-radius: 5px;
  margin: 0 auto;
  width: 700px;
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
