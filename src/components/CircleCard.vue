<template>
  <div class="lp-card py-5 font-size c-grey">
    <circle-progress
      :percentage="obj.percentage"
      :stroke-width="15"
      :r="100"
      stroke-color="#13b900"
      :stroke-bg-color="obj.strokebgcolor"
    >
    </circle-progress>
    <h3 class="c-grey text-center my-4">{{ obj.text }}</h3>
  </div>
</template>

<script>
import CircleProgress from "vue-pithy-progress/lib/circle-progress.umd.min.js";
import "vue-pithy-progress/lib/semi-circle-progress.css";
export default {
  name: "CircleCard",
  props: {
    obj: Object,
  },
  components: {
    CircleProgress,
  },
};
</script>

<style scoped>
</style>