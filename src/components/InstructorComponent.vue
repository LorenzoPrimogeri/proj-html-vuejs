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
          <InstructorCard :obj="obj1" />
        </div>
        <div class="lp-card w-40">
          <InstructorCard :obj="obj2" />
        </div>
        <div class="lp-card w-30">
          <InstructorCard :obj="obj3" />
        </div>
      </div>
    </div>
    <div class="spaceMode"></div>
    <TestimonialComponent />
  </div>
</template>

<script>
import InstructorCard from "./InstructorCard.vue";
import TestimonialComponent from "./TestimonialComponent.vue";
export default {
  name: "InstructorComponent",
  components: {
    TestimonialComponent,
    InstructorCard,
  },
  data() {
    return {
      obj1: {
        name: "Mike Hart",
        img: "instructor-mikehart-200x127.jpg",
      },
      obj2: {
        name: "John Smith",
        img: "instructor-johnsmith-200x127.jpg",
      },
      obj3: { name: "Angela Hart", img: "instructor-angelahart-200x127.jpg" },
    };
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
.row.justify-content-between.text-center.position-absolute {
  top: 200px;
}
</style>