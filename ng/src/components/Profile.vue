<template>
  <div class="container">
      <div class="image-container">
          <img class="image" src="../assets/profile_image.png"/>
      </div>
      <div class="info">
          <span class="name">Raul Estrela</span>
          <span class="title">Backend Developer @ Netcentric</span>
          <div class="social-container">
              <a class="social-link" href="https://www.linkedin.com/in/raulsilvaestrela/" target="_blank">LinkedIn</a>
              <a class="social-link" href="https://github.com/rsaestrela" target="_blank">GitHub</a>
          </div>
          <p>Born in 1989</p>
          <p>From: Porto 🇵🇹</p>
          <p>Living in: Barcelona 🇪🇸</p>
          <p>Mother tongue: Portuguese</p>
          <p>E-mail: <a href="mailto:rsaestrela@gmail.com" class="email"><code>rsaestrela@gmail.com</code></a></p>
          <p>Phone: +34 675 789 291</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style scoped lang="scss">

p {
  margin: 0;
  padding-bottom: 6px;
}

.container {
  position: absolute;
  width: auto;
}

.name {
  text-transform: uppercase;
  font-size: 1.5rem;
}

.title {
  display: block;
  font-size: 1.2rem;
}

.social-container {
  margin-top: .5rem;
  margin-bottom: 1rem;
}

.social-link {
  background-color: black;
  color: white;
  padding-left: .5rem;
  padding-right: .5rem;
}

.email {
  background-color: black;
  color: white;
  cursor: pointer;
  text-decoration: underline;
  padding-left: .5rem;
  padding-right: .5rem;
}

.image {
  border-radius: 50%;
  float: left;
  width: 20rem;
}

.image-container {
  float: left;
  width: auto;
}

.info {
  float: left;
  height: auto;
  width: auto;
  margin-left: 1rem;
  margin-top: 1rem;
}

@media only screen and (max-width: 400px) {
  .container {
    margin-left: 2%;
    margin-top: 2%;
  }
}

@media only screen and (min-width: 401px) and (max-width: 960px) {
  .container {
    margin-left: 3%;
    margin-top: 15%;
  }
}

@media only screen and (min-width: 961px) {
  .container {
    margin-left: 25%;
    margin-top: 10%;
  }
}

</style>
