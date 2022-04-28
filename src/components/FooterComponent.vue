<template>
  <div>
    <NewsLetterComponent />
    <div class="container-fluid">
      <div class="container pt-5">
        <div class="row justify-content-between">
          <div class="col-3">
            <div>
              <img
                src="../assets/img/avada-drivers-logo-1x.png"
                alt="AvadaLogo"
              />
            </div>
            <div>
              <p class="c-grey">
                Avada Driving School is the right choice for experienced drivers
                looking for a refresher course , or the brand new driver wanting
                to pass first time .
              </p>
            </div>
          </div>
          <div class="col-3">
            <h5 class="c-white">CONTACT DETAILS</h5>
            <ul>
              <li
                v-for="(data, index) in data1"
                :key="index"
                class="c-grey d-flex"
              >
                <div class="pe-3"><font-awesome-icon :icon="data.icona" /></div>
                <div>{{ data.name }}</div>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h5 class="c-white">COURSES</h5>
            <ul>
              <li
                v-for="(data, index) in data2"
                :key="index"
                class="c-green d-flex"
              >
                <div class="pe-3">
                  <font-awesome-icon icon="far fa-arrow-alt-circle-right" />
                </div>

                <div>{{ data.name }}</div>
              </li>
            </ul>
          </div>
          <div class="col-3 text-center">
            <div>
              <img
                class="w-75"
                src="../assets/img/footer-grid.png"
                alt="footeGrid"
              />
            </div>
            <div class="py-5 text-center">
              <a href="" class="lp-btn c-white py-2 px-3">BOOK NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBottomComponent />
  </div>
</template>

<script>
import NewsLetterComponent from "./NewsLetterComponent.vue";
import data1 from "../assets/data/footerData1.js";
import data2 from "../assets/data/footerData2.js";
import FooterBottomComponent from "./FooterBottomComponent.vue";
export default {
  name: "FooterComponent",
  components: {
    NewsLetterComponent,
    FooterBottomComponent,
  },
  data() {
    return {
      data1,
      data2,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/img/footer-background-color.jpg");
  background-size: cover;
}
.lp-btn {
  background: rgb(1, 199, 1);
  border-radius: 30px;
}
li {
  font-size: 18px;
}
li:before {
  margin-left: -20px !important;
  width: 1.6em !important;
}
</style>
