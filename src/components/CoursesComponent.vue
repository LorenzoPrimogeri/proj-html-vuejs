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
                <a href="" class="lp-btn c-white py-2 px-3"
                  >COURSE INFOMATION</a
                >
              </div>
            </div>
          </div>
          <div class="col-5"></div>
          <div class="card-section d-flex my-5 d-flex justify-content-between">
            <CourseCard :obj="obj" />
            <CourseCard :obj="obj1" />
            <CourseCard :obj="obj2" />
          </div>
        </div>
      </div>
    </div>
    <RateComponent />
  </div>
</template>

<script>
import RateComponent from "./RateComponent.vue";
import CourseCard from "./CourseCard.vue";
export default {
  name: "CoursesComponent",
  components: {
    RateComponent,
    CourseCard,
  },
  data() {
    return {
      obj: {
        intestazione: "Pass Plus",
        img: "courses-passplus-200x200.jpg",
      },
      obj1: {
        intestazione: "Intensive Course",
        img: "course-intensive-200x200.jpg",
      },
      obj2: {
        intestazione: "Instructors",
        img: "courses-instructor-200x200.jpg",
      },
    };
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