<template>
  <div>
    <div class="top-header container-fluid position-relative">
      <div class="container">
        <div class="row justify-content-between c-grey">
          <div class="col-6">
            <p class="py-3">We have a 95% Successful Pass Rate!</p>
          </div>
          <div class="col-6 py-3">
            <p class="text-end">
              <font-awesome-icon icon="fas fa-phone-alt" />
              Give us a call to book your tuiton! 1-800-555-555
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="header container-fluid position-absolute">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <div>
                  <img
                    class="my-4"
                    src="../assets/img/avada-drivers-logo-1x.png"
                    alt="logoImg"
                  />
                </div>
              </div>
              <div class="col-7 d-flex align-items-center">
                <ul>
                  <li
                    v-for="(item, index) in data"
                    :key="index"
                    class="c-white d-inline mx-4"
                  >
                    {{ item.name }}
                    <span
                      v-if="(item.boolean = true)"
                      :class="item.tip ? 'newClass' : ''"
                      >{{ item.label }}</span
                    >
                  </li>
                </ul>
              </div>
              <div class="col-2 d-flex align-items-center">
                <a href="" class="lp-btn py-3 px-5">BOOK NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpecialDiv />
    </div>
  </div>
</template>

<script>
import data from "../assets/data/headerData.js";
import SpecialDiv from "./SpecialDiv.vue";
export default {
  name: "headerComponent",
  components: {
    SpecialDiv,
  },
  data() {
    return {
      data,
    };
  },
};
</script>

<style scoped>
.top-header {
  background-color: hsl(210deg 2% 21%);
}
.header {
  background-color: rgba(0, 0, 0, 0.3);
}
li {
  font-weight: 700;
}
li:hover {
  color: lightgreen;
  border-bottom: 4px solid lightgreen;
}
.lp-btn {
  color: white;
  background-color: hsl(105deg 40% 56%);
  border-radius: 30px;
}
.newClass {
  background-color: lightgreen;
  border-radius: 25%;
  padding: 4px;
}
</style>