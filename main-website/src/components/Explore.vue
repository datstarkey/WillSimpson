<template>
  <div class="explore">
    <div class="explore-button animate__animated animate__fadeInUp animate__delay-2s">
      <img
        src="../assets/explore-button.svg"
        class="icon explore-icon"
        v-on:click="moveToProjects()"
      />
    </div>

    <div>
      <div class="line animate__animated animate__fadeInUp animate__delay-2s" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Explore extends Vue {
  moveToProjects() {
    const options: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "end",
      inline: "end"
    };
    const element = document.getElementById("end-of-slider");
    if (element) {
      element.scrollIntoView(options);
    }
  }
}
</script>

<style>
.explore-icon {
  width: auto;
  height: 50px;
}

.button-text {
  margin-left: 5px;
  color: white;
}

.explore {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 40px;
}

.explore-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.line {
  height: 50vh;
  width: 1px;
  background-color: white;
  margin-right: 10px;
}
</style>
