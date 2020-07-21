<template>
  <div class="flex-column mt">
    <div class="carousel-container">
      <div id="left-image" class="image-container">
        <img class="carousel-image" :src="leftProject.imageLocation" v-on:click="moveRight()" />
      </div>

      <div id="middle-image" class="image-container">
        <img class="carousel-image" :src="currentProject.imageLocation" />
      </div>

      <div class="section-container">
        <div id="carousel-content" class="animate__animated animate__fadeIn">
          <h3>RECENT WORK</h3>
          <h1 class="response-size">{{ currentProject.title }}</h1>
          <p class="response-size-paragraph">{{ currentProject.description }}</p>
          <div class="button-group">
            <button class="case-study-button mt">CASE STUDY</button>
            <button class="arrow-button mt">
              <img src="../assets/icons/arrow.svg" class="arrow-icon" />
            </button>
          </div>
        </div>
      </div>

      <div id="right-image" class="image-container">
        <img class="carousel-image" :src="rightProject.imageLocation" v-on:click="moveLeft()" />
      </div>
    </div>

    <div class="flex center mt">
      <button class="left-arrow-button slider-action-button" v-on:click="moveLeft()">
        <img src="../assets/icons/arrow.svg" class="arrow-icon rotate-arrow" />
      </button>

      <button class="arrow-button slider-action-button" v-on:click="moveRight()">
        <img src="../assets/icons/arrow.svg" class="arrow-icon" />
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IProject } from "../interfaces/IProject";
@Component
export default class Carousel extends Vue {
  @Prop() projects!: IProject[];
  index: number;
  currentProject: IProject;
  leftProject: IProject;
  rightProject: IProject;
  moving: boolean;

  constructor() {
    super();
    this.moving = false;
    this.index = 0;
    this.currentProject = this.projects[0];
    this.rightProject = this.projects[1];
    this.leftProject = this.projects[this.projects.length - 1];
  }

  setCurrent(): void {
    this.currentProject = this.projects[this.index];
  }

  setRight(): void {
    let index = this.index + 1;
    if (index >= this.projects.length) index = 0;
    this.rightProject = this.projects[index];
  }

  setLeft(): void {
    let index = this.index - 1;
    if (index < 0) index = this.projects.length - 1;
    this.leftProject = this.projects[index];
  }

  fadeInOut(element: HTMLElement) {
    element.classList.remove("animate__fadeIn");
    element.classList.add("animate__fadeOut");
    setTimeout(() => {
      element.classList.remove("animate__fadeOut");
      element.classList.add("animate__fadeIn");
    }, 1000);
  }

  moveElement = (
    element: HTMLElement,
    cssClass: string,
    func: () => void
  ): void => {
    element.classList.add(cssClass);

    setTimeout(() => {
      element.classList.remove(cssClass);
      func();
    }, 1000);
  };

  setMovingFalse(): void {
    this.moving = false;
  }

  moveRight(): void {
    if (!this.moving) {
      this.moving = true;
      this.index--;
      if (this.index < 0) this.index = this.projects.length - 1;

      const mainContent = document.getElementById("carousel-content");
      if (mainContent) {
        this.fadeInOut(mainContent);
      }

      const rightImage = document.getElementById("right-image");
      if (rightImage) {
        this.moveElement(rightImage, "right-little", this.setRight);
      }

      const middleImage = document.getElementById("middle-image");
      if (middleImage) {
        this.moveElement(middleImage, "right-far", this.setCurrent);
      }

      const leftImage = document.getElementById("left-image");
      if (leftImage) {
        this.moveElement(leftImage, "right-little", this.setLeft);
        setTimeout(() => {
          this.moveElement(leftImage, "offscreen-left", this.setMovingFalse);
        }, 1000);
      }
    }
  }

  moveLeft(): void {
    if (!this.moving) {
      this.moving = true;
      this.index++;
      if (this.index >= this.projects.length) this.index = 0;

      const mainContent = document.getElementById("carousel-content");
      if (mainContent) {
        this.fadeInOut(mainContent);
      }

      const leftImage = document.getElementById("left-image");
      if (leftImage) {
        this.moveElement(leftImage, "left-little", this.setLeft);
      }

      const middleImage = document.getElementById("middle-image");
      if (middleImage) {
        this.moveElement(middleImage, "left-little", this.setCurrent);
      }
      const rightImage = document.getElementById("right-image");
      if (rightImage) {
        this.moveElement(rightImage, "left-far", this.setRight);
        setTimeout(() => {
          this.moveElement(rightImage, "offscreen-right", this.setMovingFalse);
        }, 1000);
      }
    }
  }
}
</script>

<style>
@import url("./Carousel.css");

.response-size {
  font-size: 2vw;
}

.response-size-paragraph {
  font-size: 1vw;
}

.carousel-container {
  width: 100%;
  height: 15vw;
  display: flex;
  flex: 0 0 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
}

.image-container {
  width: 15vw;
  height: 15vw;
  border: white;
  border-width: 3px;
  border-style: solid;
}
.image-container:hover {
  border: var(--alt-color);
  border-width: 3px;
  border-style: solid;
  cursor: pointer;
}

.section-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  height: 15vw;
  background: var(--background-color-2);
  border: var(--background-color-2);
  border-width: 20px;
  border-style: solid;
  z-index: 1;
}
</style>