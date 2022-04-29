<template>
  <div class="">
    <div class="container position-relative">
      <div class="row">
        <div class="col-8">
          <h1>Your Instructors</h1>
          <p class="c-grey my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            aspernatur, sapiente quod recusandae saepe commodi a rerum hic velit
            dolorum et! Maxime accusantium quisquam amet nulla.
          </p>
        </div>
        <div class="col-4 d-flex flex-column justify-content-center">
          <a href="" class="c-white lp-btn text-center py-3">MORE ABOUT US</a>
        </div>
      </div>
      <div
        class="
          row
          justify-content-between
          text-center
          position-absolute
          container
        "
      >
        <div class="lp-card w-30">
          <div>
            <img
              class="my-5 w-80"
              src="../assets/img/instructor-mikehart-200x127.jpg"
              alt="mikehart"
            />
          </div>
          <div>
            <h2>Mike Hart</h2>
          </div>
          <div class="c-grey">
            <font-awesome-icon icon="fab fa-facebook-f" />
            <font-awesome-icon icon="fab fa-instagram" class="px-4" />
            <font-awesome-icon icon="fab fa-twitter" />
          </div>
          <div class="w-100">
            <p class="c-grey my-2 mb-5">
              Lorem ipsum dolor sit amet elit. Similique distinctio tempore at
              lostem.
            </p>
          </div>
        </div>
        <div class="lp-card w-40">
          <div>
            <img
              class="my-5 w-75"
              src="../assets/img/instructor-johnsmith-200x127.jpg"
              alt="johnsmith"
            />
          </div>
          <div>
            <h2>John Smith</h2>
          </div>
          <div class="c-grey">
            <font-awesome-icon icon="fab fa-facebook-f" />
            <font-awesome-icon icon="fab fa-instagram" class="px-4" />
            <font-awesome-icon icon="fab fa-twitter" />
          </div>
          <div class="w-100">
            <p class="c-grey my-2 mb-5">
              Lorem ipsum dolor sit amet elit. Similique distinctio tempore at
              lostem.
            </p>
          </div>
        </div>
        <div class="lp-card w-30">
          <div>
            <img
              class="my-5 w-80"
              src="../assets/img/instructor-angelahart-200x127.jpg"
              alt="angelahart"
            />
          </div>
          <div>
            <h2>Angela Hart</h2>
          </div>
          <div class="c-grey">
            <font-awesome-icon icon="fab fa-facebook-f" />
            <font-awesome-icon icon="fab fa-instagram" class="px-4" />
            <font-awesome-icon icon="fab fa-twitter" />
          </div>
          <div class="w-100">
            <p class="c-grey my-2 mb-5">
              Lorem ipsum dolor sit amet elit. Similique distinctio tempore at
              lostem.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="spaceMode"></div>
    <TestimonialComponent />
  </div>
</template>

<script>
import TestimonialComponent from "./TestimonialComponent.vue";
export default {
  name: "InstructorComponent",
  components: {
    TestimonialComponent,
  },
};
</script>

<style scoped>
.spaceMode {
  height: 500px;
}
.lp-card {
  box-shadow: 5px 5px 15px 5px #636262;
  border-top: 10px solid rgb(1, 199, 1);
  background: white;
  border-radius: 10px;
}
img:hover {
  transform: scale(1.1);
}
.row.justify-content-between.text-center.position-absolute {
  top: 200px;
}
</style>