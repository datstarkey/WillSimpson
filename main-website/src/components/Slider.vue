<template>
  <div>
    <div class="slider-box" id="slider" v-observe-visibility="visibilityChanged">
      <img
        id="previous-project"
        :src="projectPrev.imageLocation"
        class="project-image animate__animated"
        :class="isVisible ?'animate__fadeInLeft':'' "
      />
      <img
        id="current-project-image"
        :src="selectedProject.imageLocation"
        class="project-image animate__animated"
      />
      <div class="project-image">
        <div
          id="current-project"
          class="current-project animate__animated"
          :class="isVisible ?'animate__fadeIn':'' "
        >
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
      </div>
      <img
        id="next-project"
        :src="projectNext.imageLocation"
        class="project-image animate__animated"
        :class="isVisible ?'animate__fadeInRight':'' "
      />
    </div>

    <div class="flex center">
      <button class="left-arrow-button slider-action-button" v-on:click="prevProject()">
        <img src="../assets/icons/arrow.svg" class="arrow-icon rotate-arrow" />
      </button>

      <button class="arrow-button slider-action-button" v-on:click="nextProject()">
        <img src="../assets/icons/arrow.svg" class="arrow-icon" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { projects } from "../assets/Projects";
import { IProject } from "../interfaces/IProject";

@Component
export default class Slider extends Vue {
  currentIndex: number;
  selectedProject: IProject;
  projectPrev: IProject;
  projectNext: IProject;
  isVisible: boolean;

  constructor() {
    super();
    this.isVisible = false;
    this.currentIndex = 0;
    this.selectedProject = projects[0];
    this.projectPrev = projects[projects.length - 1];
    this.projectNext = projects[1];
  }

  moveRight(element: HTMLElement) {
    element.classList.remove("animate__fadeInLeft", "animate__fadeInRight");
    element.classList.add("animate__fadeOutRight");
    setTimeout(() => {
      element.classList.remove("animate__fadeOutRight");
      element.classList.add("animate__fadeIn");
    }, 2000);
  }

  moveRightInLeft(element: HTMLElement) {
    element.classList.remove("animate__fadeInLeft", "animate__fadeInRight");
    element.classList.add("animate__fadeOutRight");
    setTimeout(() => {
      element.classList.remove("animate__fadeOutRight");
      element.classList.add("animate__fadeInLeft");
    }, 1000);
  }

  moveLeft(element: HTMLElement) {
    element.classList.remove("animate__fadeInLeft", "animate__fadeInRight");
    element.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      element.classList.remove("animate__fadeOutLeft");
      element.classList.add("animate__fadeIn");
    }, 2000);
  }

  moveLeftInRight(element: HTMLElement) {
    element.classList.remove("animate__fadeInLeft", "animate__fadeInRight");
    element.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      element.classList.remove("animate__fadeOutLeft");
      element.classList.add("animate__fadeInRight");
    }, 1000);
  }

  changeClasses(
    element: HTMLElement,
    animationIn: string,
    animationOut: string
  ) {
    element.classList.remove(animationIn);
    element.classList.remove(animationOut);
    element.classList.add(animationOut);
    setTimeout(() => {
      element.classList.remove(animationOut);
      element.classList.remove(animationIn);
      element.classList.add(animationIn);
    }, 2000);
  }

  setProjects() {
    this.selectedProject = projects[this.currentIndex];

    let prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) prevIndex = projects.length - 1;
    this.projectPrev = projects[prevIndex];

    let nextIndex = this.currentIndex + 1;
    if (nextIndex >= projects.length) nextIndex = 0;
    this.projectNext = projects[nextIndex];
  }

  nextProject() {
    this.currentIndex++;
    if (this.currentIndex >= projects.length) this.currentIndex = 0;

    this.setProjects();

    const nextProjectElement = document.getElementById("next-project");
    if (nextProjectElement) {
      this.moveRight(nextProjectElement);
    }

    setTimeout(() => {
      const currentProjectElement = document.getElementById("current-project");
      if (currentProjectElement) {
        this.moveRight(currentProjectElement);
      }
      const currentProjectImageElement = document.getElementById(
        "current-project-image"
      );
      if (currentProjectImageElement) {
        this.moveRight(currentProjectImageElement);
      }
    }, 500);

    setTimeout(() => {
      const prevProjectElement = document.getElementById("previous-project");
      if (prevProjectElement) {
        this.moveRightInLeft(prevProjectElement);
      }
    }, 1250);
  }

  prevProject() {
    this.currentIndex--;
    if (this.currentIndex < 0) this.currentIndex = projects.length - 1;

    this.setProjects();

    const prevProjectElement = document.getElementById("previous-project");
    if (prevProjectElement) {
      this.moveLeft(prevProjectElement);
    }

    setTimeout(() => {
      const currentProjectImageElement = document.getElementById(
        "current-project-image"
      );
      if (currentProjectImageElement) {
        this.moveLeft(currentProjectImageElement);
      }

      const currentProjectElement = document.getElementById("current-project");
      if (currentProjectElement) {
        this.moveLeft(currentProjectElement);
      }
    }, 500);

    setTimeout(() => {
      const nextProjectElement = document.getElementById("next-project");
      if (nextProjectElement) {
        this.moveLeftInRight(nextProjectElement);
      }
    }, 1250);
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

.slider-action-button {
  margin: 10px;
  height: 50px;
  width: 300px;
}

.rotate-arrow {
  transform: rotate(180deg);
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

.left-arrow-button {
  background-color: black;
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
