<template>
  <div class="container">
    <div class="profile-image"/>
  </div>
</template>

<script>

export default {
  name: 'ProfileImage'
}
</script>

<style scoped lang="scss">

.profile-image {
  background: url("../assets/profile_image.png") no-repeat;
  background-size: 100% 100%;
  border: $border-regular solid $grayish;
  border-radius: $border-radius-regular;
  cursor: pointer;
  height: 11rem;
  width: 11em;
}

@media (max-width: 600px) {
  .profile-image {
    height: 8rem;
    width: 8em;
  }
}

</style>
