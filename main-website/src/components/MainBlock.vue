<template>
  <div>
    <div class="top">
      <div class="flex center">
        <div class="content mt">
          <Nav class="animate__animated animate__fadeInDown" />
          <Title />
        </div>
      </div>
      <svg data-name="Layer 2" viewBox="0 0 1920 398" class="curve">
        <path class="cls-1" d="M2242.67,329.33" transform="translate(-1 -335)" />
        <path
          class="cls-1"
          d="M1,687C184.93,586.82,336.78,563.19,438,559c321.92-13.32,459,156.46,857,162,3.08.11,8,.27,14,.37C1504.2,724.54,1785.71,648,1887,440c10.85-22.28,25.13-57.35,33-105q.49,199,1,398H1Z"
          transform="translate(-1 -335)"
        />
      </svg>
    </div>

    <div class="flex center">
      <div class="content mt">
        <Explore />
      </div>
    </div>
    <Carousel :projects="projects" />
    <div class="empty-space" id="end-of-slider" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "./Nav.vue";
import Title from "./Title.vue";
import Explore from "./Explore.vue";
import Slider from "./Slider.vue";
import Carousel from "./Carousel.vue";
import { projects } from "../assets/Projects";
import { IProject } from "../interfaces/IProject";

@Component({
  components: {
    Nav,
    Title,
    Explore,
    Carousel,
    Slider
  }
})
export default class MainBlock extends Vue {
  projects: IProject[] = projects;
}
</script>

<style>
.empty-space {
  height: 100px;
}

.top {
  background-color: var(--background-color-1);
}

.curve {
  background-color: var(--background-color-1);
  width: 100%;
  position: absolute;
}

.curve path {
  fill: var(--background-color-2);
}

.content {
  width: 1336px;
}
</style>
