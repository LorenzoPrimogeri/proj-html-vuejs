<template>
  <div class="container-fluid">
    <div class="container text-center">
      <h1 class="py-5">Sign up to our NewsLetter</h1>
      <div class="my-4">
        <input class="w-50 py-2" type="text" />
      </div>
      <div class="lp-btn my-5 py-2 w-50 mx-auto">
        <a href="" class="c-white"> SUBSCRIBE</a>
      </div>
      <p class="c-grey pb-5">
        (We do not share your data with anybody, and only uyse it for its
        intended purpose)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsLetterComponent",
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/img/newsletter_background.jpg") !important;
  background-size: cover;
}
</style>