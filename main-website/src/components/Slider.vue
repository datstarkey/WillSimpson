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
    this.projectNext = projects[projects.length - 1];
    this.projectPrev = projects[1];
    this.nextProject();
    this.prevProject();
  }

  removeClasses(element: HTMLElement) {
    element.classList.remove(
      "animate__fadeInLeft",
      "animate__fadeInRight",
      "animate__fadeIn"
    );
  }

  changeClass(
    element: HTMLElement,
    fadeOut: string,
    fadeIn: string,
    setter: () => void,
    timer: number
  ) {
    this.removeClasses(element);
    element.classList.add(fadeOut);
    setTimeout(() => {
      setter();
      element.classList.remove(fadeOut);
      element.classList.add(fadeIn);
    }, timer);
  }

  setCurrentProject(): void {
    this.selectedProject = projects[this.currentIndex];
  }

  setPreviousProject(): void {
    let prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) prevIndex = projects.length - 1;
    this.projectNext = projects[prevIndex];
  }

  setNextProject(): void {
    let nextIndex = this.currentIndex + 1;
    if (nextIndex >= projects.length) nextIndex = 0;
    this.projectPrev = projects[nextIndex];
  }

  moveLeft(element: HTMLElement, setter: () => void) {
    this.changeClass(
      element,
      "animate__fadeOutLeft",
      "animate__fadeIn",
      setter,
      2000
    );
  }

  moveInLeft(element: HTMLElement, setter: () => void) {
    this.removeClasses(element);
    setter();
    void element.offsetWidth;
    element.classList.add("animate__fadeInRight");
  }

  slideLeft(element: HTMLElement, setProject: () => void, fade: boolean) {
    this.removeClasses(element);
    element.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      setProject();
      let className: string;
      if (fade) {
        className = "slide-left-opacity";
      } else {
        className = "slide-left";
      }
      element.classList.add(className);
      element.classList.remove("animate__fadeOutLeft");
      setTimeout(() => element.classList.remove(className), 2000);
    }, 1000);
  }

  prevProject() {
    this.currentIndex--;
    if (this.currentIndex < 0) this.currentIndex = projects.length - 1;

    const prevProjectElement = document.getElementById("previous-project");
    if (prevProjectElement) {
      this.moveLeft(prevProjectElement, this.setPreviousProject);
    }

    setTimeout(() => {
      const currentProjectElement = document.getElementById("current-project");
      if (currentProjectElement) {
        this.slideLeft(currentProjectElement, this.setCurrentProject, true);
      }
      const currentProjectImageElement = document.getElementById(
        "current-project-image"
      );
      if (currentProjectImageElement) {
        this.slideLeft(
          currentProjectImageElement,
          this.setCurrentProject,
          false
        );
      }
    }, 500);

    setTimeout(() => {
      const nextProjectElement = document.getElementById("next-project");
      if (nextProjectElement) {
        this.moveInLeft(nextProjectElement, this.setNextProject);
      }
    }, 1500);
  }

  nextProject() {
    this.currentIndex++;
    if (this.currentIndex >= projects.length) this.currentIndex = 0;

    const nextProjectElement = document.getElementById("next-project");
    if (nextProjectElement) {
      this.moveRight(nextProjectElement, this.setNextProject);
    }

    setTimeout(() => {
      const currentProjectElement = document.getElementById("current-project");
      if (currentProjectElement) {
        this.slideRight(currentProjectElement, this.setCurrentProject, true);
      }
      const currentProjectImageElement = document.getElementById(
        "current-project-image"
      );
      if (currentProjectImageElement) {
        this.slideRight(
          currentProjectImageElement,
          this.setCurrentProject,
          false
        );
      }
    }, 500);

    setTimeout(() => {
      const prevProjectElement = document.getElementById("previous-project");
      if (prevProjectElement) {
        this.moveInRight(prevProjectElement, this.setPreviousProject);
      }
    }, 1500);
  }

  moveRight(element: HTMLElement, setter: () => void) {
    this.changeClass(
      element,
      "animate__fadeOutRight",
      "animate__fadeIn",
      setter,
      2000
    );
  }

  moveInRight(element: HTMLElement, setter: () => void) {
    this.removeClasses(element);

    setter();
    void element.offsetWidth;
    element.classList.add("animate__fadeInLeft");
  }

  slideRight(element: HTMLElement, setProject: () => void, fade: boolean) {
    this.removeClasses(element);
    element.classList.add("animate__fadeOutRight");
    setTimeout(() => {
      setProject();
      let className: string;
      if (fade) {
        className = "slide-right-opacity";
      } else {
        className = "slide-right";
      }
      element.classList.add(className);
      element.classList.remove("animate__fadeOutRight");
      setTimeout(() => element.classList.remove(className), 2000);
    }, 1000);
  }

  visibilityChanged(isVisible: boolean) {
    this.isVisible = isVisible;
  }
}
</script>

<style>
@keyframes slide__right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slide__right__opacity {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

.slide-right {
  animation-name: slide__right;
  animation-duration: 1s;
}

.slide-right-opacity {
  animation-name: slide__right__opacity;
  animation-duration: 1s;
}

@keyframes slide__left {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slide__left__opacity {
  0% {
    transform: translateX(200%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

.slide-left {
  animation-name: slide__left;
  animation-duration: 1s;
}

.slide-left-opacity {
  animation-name: slide__left__opacity;
  animation-duration: 1s;
}

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
  padding: 1%;
  width: 25%;
  height: 60vh;
}
</style>
