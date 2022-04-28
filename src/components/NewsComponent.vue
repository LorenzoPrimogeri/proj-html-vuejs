<template>
  <div>
    <div class="container-fluid">
      <div class="container position-relative">
        <div class="position-absolute">
          <div class="row justify-content-around text-center lp-card">
            <h1 class="text-center py-5">Latest News</h1>
            <div class="col-5">
              <div>
                <img
                  class="w-100 my-3"
                  src="../assets/img/blog-choosecar-700x441.jpg"
                  alt="audi"
                />
              </div>
              <div>
                <h3 class="c-green">What Car to Start With?</h3>
                <p>
                  February 7th, 2019 | <span class="c-green"> 0 Comments</span>
                </p>
              </div>
              <div>
                <p class="c-grey py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <div class="col-5">
              <div>
                <img
                  class="w-100 my-3"
                  src="../assets/img/blogpost-10and2-700x441.jpg"
                  alt="audi"
                />
              </div>
              <div>
                <h3 class="c-green">What Car to Start With?</h3>
                <p>
                  February 7th, 2019 | <span class="c-green"> 0 Comments</span>
                </p>
              </div>
              <div>
                <p class="c-grey py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <div class="py-5 my-5">
              <a href="" class="lp-btn c-white px-2 py-3">MORE FROM THE BLOG</a>
            </div>
          </div>
          <div class="container text-center triangle">
            <img
              class="w-100"
              src="../assets/img/driving-triangle -white.svg"
              alt="Triangle"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsComponent",
};
</script>

<style scoped>
.triangle {
  margin: 0 !important;
  padding: 0 !important;
}
img[alt="Triangle"] {
  height: 150px;
  fill: white;
}
.container-fluid {
  background-image: url("../assets/img/latestnews-background.jpg");
  background-size: cover;
  height: 1000px;
}
.position-absolute {
  top: -70px;
}
.lp-card {
  box-shadow: 5px 5px 15px 5px #636262;
  border-top: 10px solid #636262;
  background: white;
  border-radius: 10px;
}
.lp-btn {
  background: rgb(1, 199, 1);
  border-radius: 30px;
}
</style>