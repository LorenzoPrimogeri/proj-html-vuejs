<template>
  <div class="car-card text-center d-flex flex-column justify-content-between">
    <div>
      <img
        class="py-2 my-2 w-100"
        :src="require(`../assets/img/${obj.img}`)"
        alt="PassPlus"
      />
    </div>
    <div>
      <h3 class="c-grey">{{ obj.intestazione }}</h3>
    </div>
    <div>
      <a href="" class="lp-btn2">LEARN MORE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    obj: Object,
  },
};
</script>

<style scoped>
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
</style>