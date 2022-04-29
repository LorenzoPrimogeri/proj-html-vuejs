<template>
  <div>
    <div class="container-fluid">
      <div class="container position-relative">
        <div class="position-absolute">
          <div class="row justify-content-around text-center lp-card">
            <h1 class="text-center py-5">Latest News</h1>
            <NewsCard :obj="obj1"/>
            <NewsCard :obj="obj2"/>
            <div class="py-5 my-5">
              <a href="" class="lp-btn c-white px-4 py-2">MORE FROM THE BLOG</a>
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
import NewsCard from "./NewsCard.vue";
export default {
  name: "NewsComponent",
  data() {
    return {
      obj1: {
        img: "blog-choosecar-700x441.jpg",
      },
      obj2: {
        img: "blogpost-10and2-700x441.jpg",
      },
    };
  },
  components: {
    NewsCard,
  },
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
</style>