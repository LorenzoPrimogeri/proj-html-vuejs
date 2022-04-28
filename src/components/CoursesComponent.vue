<template>
  <div>
    <div class="container-fluid py-3">
      <div class="container position-relative">
        <div class="row flex-nowrap">
          <div class="col-5 position-absolute">
            <div class="lp-card text-center px-5 py-5 position-relative">
              <div class="position-absolute new c-white">
                <div class="">
                  <h3 class="newTesto position-absolute">NEW</h3>
                </div>
              </div>
              <div>
                <h1 class="py-5">Courses</h1>
              </div>
              <div>
                <p class="c-grey py-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  aut delectus, deserunt error quos accusantium dolorem illo
                  velit a ipsum soluta quis ad saepe praesentium id et!
                  Temporibus, minima animi.
                </p>
              </div>
              <div class="my-5">
                <a href="" class="lp-btn">COURSE INFOMATION</a>
              </div>
            </div>
          </div>
          <div class="col-5"></div>
          <div class="card-section d-flex my-5 d-flex justify-content-between">
            <div
              class="
                car-card
                text-center
                d-flex
                flex-column
                justify-content-between
              "
            >
              <div>
                <img
                  class="py-2 my-2 w-100"
                  src="../assets/img/courses-passplus-200x200.jpg"
                  alt="PassPlus"
                />
              </div>
              <div>
                <h3 class="c-grey">Pass PLus</h3>
              </div>
              <div>
                <a href="" class="lp-btn2">LEARN MORE</a>
              </div>
            </div>
            <div
              class="
                text-center
                car-card
                d-flex
                flex-column
                justify-content-between
              "
            >
              <div>
                <img
                  class="py-2 my-2 w-100"
                  src="../assets/img/course-intensive-200x200.jpg"
                  alt="PassPlus"
                />
              </div>
              <div>
                <h3 class="c-grey">Intensive Course</h3>
              </div>
              <div>
                <a href="" class="lp-btn2">LEARN MORE</a>
              </div>
            </div>
            <div
              class="
                text-center
                car-card
                d-flex
                flex-column
                justify-content-between
              "
            >
              <div>
                <img
                  class="py-2 my-2 w-100"
                  src="../assets/img/courses-instructor-200x200.jpg"
                  alt="PassPlus"
                />
              </div>
              <div>
                <h3 class="c-grey">Instructors</h3>
              </div>
              <div>
                <a href="" class="lp-btn2">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RateComponent />
  </div>
</template>

<script>
import RateComponent from "./RateComponent.vue";
export default {
  name: "CoursesComponent",
  components: {
    RateComponent,
  },
};
</script>

<style scoped>
.container-fluid {
  background: url("../assets/img/promise-background.jpg");
  background-position: center;
  background-size: cover;
}
.lp-card {
  background-color: white;
  box-shadow: 5px 5px 15px 5px #636262;
}
.card-section {
  width: calc(100% - 41.66666667%);
}
.car-card {
  width: calc(100% / 4);
  height: 400px;
}
.col-5.position-absolute {
  top: -40px;
}
.lp-btn {
  color: white;
  background-color: hsl(105deg 40% 56%);
  border-radius: 30px;
  padding: 12px 30px;
}
.lp-btn2:hover {
  border: 5px solid rgb(1, 199, 1);
  color: rgb(1, 199, 1) !important;
}
.lp-btn2 {
  color: grey;
  border: 5px solid rgb(161, 161, 161);
  border-radius: 30px;
  padding: 12px 30px;
}
.new {
  top: -50px;
  left: 0;
  width: 0;
  height: 0;
  margin: 50px auto;
  background: none;
  border-width: 100px 100px 0 0;
  border-style: solid;
  border-color: rgb(1, 199, 1) transparent transparent transparent;
}
.newTesto {
  color: white;
  top: -80px;
  transform: rotate(-40deg);
}
</style>