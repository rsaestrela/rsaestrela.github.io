<template>
  <div class="content">
    <ProfileImage/>
    <ProfileInfo/>
  </div>
</template>

<script>
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileImage from '@/components/ProfileImage.vue'

export default {
  name: 'Home',
  components: {
    ProfileInfo,
    ProfileImage
  },
}
</script>

<style scoped lang="scss">

.content {
  border-radius: $border-radius-big;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

</style>
