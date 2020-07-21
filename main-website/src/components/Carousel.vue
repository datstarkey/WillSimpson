<template>
  <div class="flex-column mt">
    <div class="carousel-container">
      <div id="left-hidden-image" class="image-container">
        <img class="carousel-image" :src="farLeft.imageLocation" />
      </div>

      <div id="left-image" class="image-container">
        <img class="carousel-image" :src="leftProject.imageLocation" v-on:click="moveRight()" />
      </div>

      <div id="middle-image" class="image-container">
        <img class="carousel-image" :src="currentProject.imageLocation" />
      </div>

      <div class="text-container">
        <div class="carousel-text">
          <h3>RECENT WORK</h3>
          <div id="carousel-content" class="flex-column space-between mt animate__animated">
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
      </div>

      <div id="right-image" class="image-container">
        <img class="carousel-image" :src="rightProject.imageLocation" v-on:click="moveLeft()" />
      </div>

      <div id="right-hidden-image" class="image-container">
        <img class="carousel-image" :src="farRight.imageLocation" />
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
  farLeft: IProject;
  rightProject: IProject;
  farRight: IProject;
  moving: boolean;
  queueLeft = false;
  queueRight = false;

  constructor() {
    super();
    this.moving = false;
    this.index = 0;
    this.currentProject = this.projects[0];
    this.rightProject = this.projects[1];
    this.farRight = this.projects[2];
    this.leftProject = this.projects[this.projects.length - 1];
    this.farLeft = this.projects[this.projects.length - 2];
  }

  setCurrent(): void {
    this.currentProject = this.projects[this.index];
  }

  setRight(): void {
    let index = this.index + 1;
    if (index >= this.projects.length) index = 0;
    this.rightProject = this.projects[index];
  }

  setFarRight(): void {
    let index = this.index + 1;
    if (index >= this.projects.length) index = 0;
    index++;
    if (index >= this.projects.length) index = 0;
    this.farRight = this.projects[index];
  }

  setLeft(): void {
    let index = this.index - 1;
    if (index < 0) index = this.projects.length - 1;
    this.leftProject = this.projects[index];
  }

  setFarLeft(): void {
    let index = this.index - 1;
    if (index < 0) index = this.projects.length - 1;
    index--;
    if (index < 0) index = this.projects.length - 1;

    this.farLeft = this.projects[index];
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
    }, 950);
  };

  setMovingFalse(): void {
    this.moving = false;

    if (this.queueRight == true) {
      this.queueRight = false;
      this.moveRight();
    }

    if (this.queueLeft == true) {
      this.queueLeft = false;
      this.moveLeft();
    }
  }

  moveRight(): void {
    if (this.moving) {
      this.queueRight = true;
    } else {
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
      }

      const fakeLeft = document.getElementById("left-hidden-image");
      if (fakeLeft) {
        this.moveElement(fakeLeft, "right-little", this.setFarLeft);
      }

      this.setFarRight();
      setTimeout(() => {
        this.setMovingFalse();
      }, 1200);
    }
  }

  moveLeft(): void {
    if (this.moving) {
      this.queueLeft = true;
    } else {
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
      }

      const farRight = document.getElementById("right-hidden-image");
      if (farRight) {
        this.moveElement(farRight, "left-little", this.setFarRight);
      }

      this.setFarLeft();
      setTimeout(() => {
        this.setMovingFalse();
      }, 1200);
    }
  }
}
</script>

<style>
@import url("./Carousel.css");

#carousel-content {
  --animate-duration: 0.5s;
  --animate-delay: 0s;
}

.response-size {
  font-size: 2vw;
}

.response-size-paragraph {
  font-size: 1vw;
}

.carousel-container {
  width: 100%;
  height: 30vw;
  display: flex;
  flex: 0 0 0;
}

.image-container {
  width: 50vw;
  height: 30vw;
  padding: 1vw;
}

.carousel-image {
  width: 100%;
  height: 100%;
  border: white;
  border-width: 3px;
  border-style: solid;
}

.carousel-image:hover {
  border: var(--alt-color);
  border-width: 3px;
  border-style: solid;
  cursor: pointer;
}

.text-container {
  height: 30vw;
  padding: 1vw;
  width: 50vw;
  background: var(--background-color-2);
  border: var(--background-color-2);
  z-index: 1;
}

.carousel-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5vw 0;
}
</style>