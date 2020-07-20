<template>
  <div class="title" v-observe-visibility="visibilityChanged">
    <div>
      <h1 :class="isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : ''">
        Hello, I'm Will - a designer
        <br />based out of Manchester, England
      </h1>
      <p :class="isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : ''">
        I am a product designer creating thoughtful and engaging digital products and experiences for clients ranging from
        <br />individuals and startups to globally recognized brands. Find some of my work below or send me an email if you want <br />to work
        together on your next project.
      </p>
    </div>

    <div class="icons" :class="isVisible ? 'animate__animated animate__fadeInRight animate__delay-1s' : ''">
      <img src="../assets/icons/dribble.svg" class="icon social-icons" />

      <img src="../assets/icons/insta.svg" class="icon social-icons" />

      <img src="../assets/icons/twitter.svg" class="icon social-icons" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {
  public isVisible: boolean;

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
.social-icons {
  width: 25px;
  height: auto;
}
.title {
  display: flex;
  margin-top: 200px;
  justify-content: space-between;
}
</style>
