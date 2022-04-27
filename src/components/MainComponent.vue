<template>
  <div>
    <div class="jumbotron d-flex align-items-center">
      <div class="container c-white">
        <h1>Drive with Avada</h1>
        <p>We offer the finest driving tuition money can buy</p>
      </div>
    </div>
    <WheelComponent />
    <LearningComponent />
    <CoursesComponent />
  </div>
</template>

<script>
import WheelComponent from "./WheelComponent.vue";
import LearningComponent from "./LearningComponent.vue";
import CoursesComponent from "./CoursesComponent.vue";
export default {
  name: "MainComponent",
  components: {
    WheelComponent,
    LearningComponent,
    CoursesComponent,
  },
};
</script>

<style scoped>
.jumbotron {
  background: url("../assets/img/homepage-hero-background.jpg");
  min-height: 800px;
  background-size: cover;
}
</style>