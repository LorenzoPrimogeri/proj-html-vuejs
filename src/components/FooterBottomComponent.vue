<template>
  <div class="container-fluid footterBottom">
    <div class="container py-5">
      <div class="row">
        <div class="col-10 c-grey">
          <p>
            Copyright 2012-2020 | Avada Theme by
            <span class="c-green">ThemeFusion</span> | All Rights Reserved |
            Powered by <span class="c-green">WordPress</span>
          </p>
        </div>
        <div class="col-2 c-white">
          <font-awesome-icon icon="fab fa-facebook-f" />
          <font-awesome-icon icon="fab fa-twitter " class="px-4" />
          <font-awesome-icon icon="fab fa-youtube" />
          <font-awesome-icon icon="fab fa-instagram" class="px-4" />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBottomComponent",
};
</script>

<style scoped>
.footterBottom {
  background-image: none !important ;
  background-color: hsl(210deg 3% 11%) !important;
}
</style>