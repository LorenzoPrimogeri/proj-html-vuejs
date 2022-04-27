<template>
  <div class="container-fluid">
    <div class="container pt-5 text-center">
      <div class="text-center pt-5">
        <div
          v-for="(testimonial, testimonialIndex) in testimonialData"
          :key="testimonialIndex"
        ></div>
        <h1>Testimonials</h1>
        <h4 class="c-grey">
          Here's what our happy drivers had to say about our services
        </h4>
      </div>
      <div>
        <img
          class="my-5"
          :src="testimonialData[testimonialIndex].img"
          :alt="testimonialData[testimonialIndex].name"
        />
      </div>
      <div>
        <p class="c-grey">{{ testimonialData[testimonialIndex].overview }}</p>
      </div>
      <div class="c-grey py-3">
        <h4>{{ testimonialData[testimonialIndex].name }}</h4>
      </div>
      <div class="row justify-content-center pb-5 gap-4">
        <div
          v-for="(item, index) in 5"
          :key="index"
          :class="['slideBtn', testimonialData[index].tip ? 'bg-pinned' : '']"
          @click="(testimonialIndex = index), pinnedOrNot(testimonialIndex)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import testimonialData from "../assets/data/testimonialData.js";
export default {
  name: "TestimonialComponent",
  data() {
    return {
      testimonialData,
      testimonialIndex: 0,
    };
  },
  methods: {
    pinnedOrNot(index) {
      //this.testimonialData[index].tip = !this.testimonialData[index].tip;
      for (let i = 0; i < 5; i++) {
        this.testimonialData[i].tip = false;
        console.log(this.testimonialData[index].tip);
        if (i == index) {
          this.testimonialData[i].tip = true;
          console.log(this.testimonialData[index].tip);
        }
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/img/testimonial-background.jpg");
  background-size: cover;
}
p {
  font-size: 25px;
}
.slideBtn {
  border: 1px solid grey;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.bg-pinned {
  background-color: aqua;
}
</style>