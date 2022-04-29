<template>
  <div class="container position-relative py-3 my-5">
    <div class="row">
      <div class="col-6">
        <h1 class="my-3">Get Behind The Wheel</h1>
        <h4 class="my-5 c-grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe
          perspiciatis id modi aperiam dicta ullam, minus quia! Hic tempora amet
          labore deserunt
        </h4>
        <p class="c-grey">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          aspernatur, laboriosam necessitatibus earum, facilis sequi quisquam
          qui est. Consequatur, sequi.vero esse ex quas veritatis accusamus?
          Deleniti magnam quasi expedita et pariatur similique esse cumque
          reprehenderit repudiandae! quatur, sequi.vero esse ex quas veritatis
          accusamus? Deleniti magnam quasi expedita e
        </p>
      </div>
      <div class="col-6 text-center lp-card position-absolute py-5">
        <div class="c-green">
          <h1 class="my-3">First Lesson Free!</h1>
        </div>
        <div class="text-center">
          <p class="c-grey specialPad text-center">
            When you make a black booking with us your first lesson is included
            free.
          </p>
        </div>
        <div>
          <input type="text" placeholder="Your Name*" class="w-75 my-4 p-2" />
          <input type="text" placeholder="Email*" class="w-75 my-4 p-2" />
          <input type="text" placeholder="Telephone*" class="w-75 my-4 p-2" />
          <input type="text" placeholder="Location*" class="w-75 my-4 p-2" />
        </div>
        <div class="my-3">
          <a class="lp-btn c-white py-2 px-3">REQUEST A CALLBACK</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WheelComponent",
};
</script>

<style scoped>
.container {
  height: 700px;
}
.lp-card {
  box-shadow: 5px 5px 15px 5px #636262;
  background-color: white;
  right: 0;
  top: -95px;
  border-radius: 5%;
}
.specialPad {
  padding: 10px 70px;
}
input {
  border: 2px solid rgb(206, 201, 201);
  border-radius: 2%;
  outline: none !important;
}
input[placeholder="Your Name*"] {
  background: url(../assets/img/image.png) no-repeat;
  background-position: 95% 50%;
}
</style>