<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
p {
  margin: 0 !important;
}
.c-grey {
  color: grey !important;
}
.c-white {
  color: white !important;
}
ul {
  list-style-type: none;
  padding: 0 !important;
  margin: 0 !important;
}
a {
  text-decoration: none !important;
}
a:hover {
  color: currentColor !important;
}
.c-green {
  color: lightgreen !important;
}
a {
  font-weight: 700 !important;
}
.w-30 {
  width: 28% !important;
}
.w-40 {
  width: 38% !important;
}
.w-80 {
  width: 80% !important;
}
.lp-btn {
  background: rgb(1, 199, 1) !important;
  border-radius: 30px !important;
}
.lp-btn:hover {
  color: red !important;
  border: 2px solid red !important;
}
</style>
