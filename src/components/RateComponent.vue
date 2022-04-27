<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container position-relative">
        <div class="row justify-content-between position-absolute w-100">
          <div class="lp-card py-5 font-size c-grey">
            <circle-progress
              :percentage="95"
              :stroke-width="15"
              :r="100"
              stroke-color="#13b900"
              stroke-bg-color="#ffffff"
            >
            </circle-progress>
            <h3 class="c-grey text-center my-4">PASS RATE</h3>
          </div>
          <div class="lp-card py-5 font-size c-grey">
            <circle-progress
              :percentage="100"
              :stroke-width="15"
              :r="100"
              stroke-color="#13b900"
              stroke-bg-color="#ffffff"
            >
            </circle-progress>
            <h3 class="c-grey text-center my-4">REFERRAL RATE</h3>
          </div>
          <div class="lp-card py-5 font-size c-grey">
            <circle-progress
              :percentage="0"
              :stroke-width="15"
              :r="100"
              stroke-color="#13b900"
              stroke-bg-color="#e2e6e2"
            >
            </circle-progress>
            <h3 class="c-grey text-center my-4">ACCIDENT RATE</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 hModed"></div>
  </div>
</template>

<script>
import CircleProgress from "vue-pithy-progress/lib/circle-progress.umd.min.js";
import "vue-pithy-progress/lib/semi-circle-progress.css";
export default {
  name: "RateComponent",
  data() {
    return {
      percentage: 95,
    };
  },
  components: {
    CircleProgress,
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