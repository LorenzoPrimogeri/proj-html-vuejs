<template>
  <div class="specialDiv d-flex flex-column position-absolute mx-3 rounded-3">
    <div class="">
      <div class="card">
        <font-awesome-icon
          icon="fa-solid fa-person-chalkboard"
          class="display-6"
        />
        <p class="d-inline">Demos</p>
      </div>
    </div>
    <div>
      <div class="my-2">
        <div class="card p-2">
          <div class="d-flex">
            <p class="w-25 d-inline c-green">$</p>
            <p class="w-75 lp-font c-green">39</p>
          </div>
          <p class="w-100">On sale</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialDiv",
};
</script>

<style scoped>
.lp-font {
  font-size: 30px;
}
div.d-flex .c-green {
  font-weight: 800;
}
.card {
  background-color: white;
  padding: 10px;
  border-radius: 15%;
}
.specialDiv {
  right: 0;
  top: 93px;
}
</style>