<template>
  <div class="block">
    <div class="content">
      <Nav class="animate__animated animate__fadeInDown" />
      <Title />
      <Explore />
    </div>
    <Slider />
    <div class="empty-space" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Nav from "./Nav.vue";
import Title from "./Title.vue";
import Explore from "./Explore.vue";
import Slider from "./Slider.vue";

@Component({
  components: {
    Nav,
    Title,
    Explore,
    Slider,
  },
})
export default class MainBlock extends Vue {}
</script>

<style>
.empty-space {
  height: 200px;
}

.block {
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
}
.content {
  padding: 5% 12% 0;
}
</style>
