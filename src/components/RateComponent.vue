<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container position-relative">
        <div class="row justify-content-between position-absolute w-100">
          <CircleCard :obj="obj1" />
          <CircleCard :obj="obj2" />
          <CircleCard :obj="obj3" />
        </div>
      </div>
    </div>
    <div class="w-100 hModed"></div>
  </div>
</template>

<script>

import CircleCard from "./CircleCard.vue";
export default {
  name: "RateComponent",
  data() {
    return {
      percentage: 95,
      obj1: {
        text: "PASS RATE",
        percentage: 95,
        strokebgcolor: "#ffffff",
      },
      obj2: {
        text: "REFERRAL RATE",
        percentage: 100,
        strokebgcolor: "#ffffff",
      },
      obj3: {
        text: "ACCIDENT RATE",
        percentage: 0,
        strokebgcolor: "#e2e6e2",
      },
    };
  },
  components: {
    CircleCard,
  },
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/img/driving-triangle.svg") !important;
  background-size: cover;
  height: 200px;
}
.hModed {
  height: 350px;
}
.font-size {
  font-size: 60px;
}
.lp-card {
  width: calc(100% / 3 - 15px);
  box-shadow: 5px 5px 15px 5px #636262;
  border-top: 10px solid rgb(1, 199, 1);
  background: white;
  border-radius: 10px;
}
</style>