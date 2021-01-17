<template>
  <div class="site-container">
    <div class="top-container">
      <ProfileImage/>
      <ProfileInfo/>
    </div>
    <div>
      <Blog/>
      <Feed/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import Feed from '@/components/Feed.vue'
import Blog from '@/components/Blog.vue'

export default {
  name: 'Home',
  components: {
    Feed,
    Blog,
    ProfileInfo,
    ProfileImage
  },
}
</script>

<style scoped lang="scss">

.top-container {
  display: block;
  height: 170px;
}

.site-container {
  align-items: center;
  border-radius: $border-radius-big;
  margin: 0 auto;
  width: 700px;
  margin-top: 1rem;
}

@media (max-width: 600px) {
  .wrapper {
    align-items: flex-start;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .site-container {
    max-width: 100%;
  }
}

</style>
