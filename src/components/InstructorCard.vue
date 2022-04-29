<template>
  <div class="d-flex justify-content-between flex-column h-100">
    <div>
      <img
        class="my-5 w-80"
        :src="require(`../assets/img/${obj.img}`)"
        alt="mikehart"
      />
    </div>
    <div>
      <h2>{{ obj.name }}</h2>
    </div>
    <div class="c-grey">
      <font-awesome-icon icon="fab fa-facebook-f" />
      <font-awesome-icon icon="fab fa-instagram" class="px-4" />
      <font-awesome-icon icon="fab fa-twitter" />
    </div>
    <div class="w-100">
      <p class="c-grey my-2 mb-5">
        Lorem ipsum dolor sit amet elit. Similique distinctio tempore at lostem.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstructorCard",
  props: {
    obj: Object,
  },
};
</script>

<style scoped>
img:hover {
  transform: scale(1.1);
}
</style>