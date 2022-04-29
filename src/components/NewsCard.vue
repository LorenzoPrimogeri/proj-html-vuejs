<template>
  <div class="col-5">
    <div>
      <img
        class="w-100 my-3"
        :src="require(`../assets/img/${obj.img}`)"
        alt="audi"
      />
    </div>
    <div>
      <h3 class="c-green">What Car to Start With?</h3>
      <p>February 7th, 2019 | <span class="c-green"> 0 Comments</span></p>
    </div>
    <div>
      <p class="c-grey py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    obj: Object,
  },
};
</script>

<style>
</style>