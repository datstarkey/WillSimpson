<template>
  <div class="slider-box" id="slider" v-observe-visibility="visibilityChanged">
    <img :src="projectPrev.imageLocation" class="project-image" :class="isVisible ? 'animate__animated animate__fadeInLeft' : ''" />
    <img :src="selectedProject.imageLocation" class="project-image" :class="isVisible ? 'animate__animated animate__fadeInUp' : ''" />
    <div class="project-image">
      <div class="current-project" :class="isVisible ? 'animate__animated animate__fadeIn animate__slower' : ''">
        <h3>RECENT WORK</h3>
        <h1>{{ selectedProject.title }}</h1>
        <p>{{ selectedProject.description }}</p>
        <div class="button-group">
          <button class="case-study-button">CASE STUDY</button>
          <button class="arrow-button">
            <img src="../assets/icons/arrow.svg" class="arrow-icon" />
          </button>
        </div>
      </div>
      <button class="arrow-button move-right">
        <img src="../assets/icons/arrow.svg" class="arrow-icon" />
      </button>
    </div>

    <img :src="projectNext.imageLocation" class="project-image" :class="isVisible ? 'animate__animated animate__fadeInRight' : ''" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { projects } from "../assets/Projects";
import { IProject } from "../interfaces/IProject";

@Component
export default class Slider extends Vue {
  selectedProject: IProject = projects[0];
  projectPrev: IProject = projects[projects.length - 1];
  projectNext: IProject = projects[1];
  isVisible: boolean;

  constructor() {
    super();
    this.isVisible = false;
  }

  visibilityChanged(isVisible: boolean) {
    this.isVisible = isVisible;
  }
}
</script>

<style>
.current-project {
  height: 90%;
  padding: 2rem 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.button-group {
  display: flex;
}

.move-right {
  height: 50px;
  margin-bottom: 10px;
  display: none;
}

.arrow-button {
  background-color: var(--alt-color);
  border: none;
  opacity: 0.8;
  width: 50px;
}

.case-study-button {
  background-color: var(--alt-color);
  color: white;
  border: none;
  width: 200px;
  height: 50px;
}

.case-study-button:hover {
  opacity: 0.9;
}

.slider-box {
  display: flex;
  width: 140%;
  overflow: hidden;
  margin-left: -20%;
  justify-content: space-evenly;
  margin-top: 50px;
}

.project-image {
  padding: 10px;
  width: 25%;
  height: auto;
}
</style>
