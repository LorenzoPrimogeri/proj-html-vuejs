<template>
  <div class="container-fluid">
    <div class="container position-relative">
      <div class="row">
        <div class="col-5">
          <div class="lp-card text-center px-5 py-4">
            <div>
              <h1 class="py-3">Courses</h1>
            </div>
            <div>
              <p class="c-grey py-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                aut delectus, deserunt error quos accusantium dolorem illo velit
                a ipsum soluta quis ad saepe praesentium id et! Temporibus,
                minima animi.
              </p>
            </div>
            <div class="my-4">
              <a href="" class="lp-btn p-2">COURSE INFOMATION</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesComponent",
};
</script>

<style scoped>
.jumbotron {
  background: url("../assets/img/promise-background.jpg");
  background-size: cover;
}
.lp-card {
  border: 1px dashed red;
}
.lp-btn {
  color: white;
  background-color: hsl(105deg 40% 56%);
  border-radius: 30%;
}
</style>