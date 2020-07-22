<template>
  <div class="title">
    <div>
      <h1 class="animate__animated animate__fadeIn animate__delay-1s">
        Hello, I'm Will - a designer
        <br />based out of Manchester, England
      </h1>
      <p class="animate__animated animate__fadeIn animate__delay-1s">
        I am a product designer creating thoughtful and engaging digital products and experiences for clients ranging from
        <br />individuals and startups to globally recognized brands. Find
        <span
          @click="moveToProjects()"
        >some of my work</span> below or
        <span @click="moveToContact()">send me an email</span> if you want
        <br />to work
        together on your next project.
      </p>
    </div>

    <div class="icons animate__animated animate__fadeInRight">
      <img src="../assets/icons/dribble.svg" class="icon icon-white social-icons" />

      <img src="../assets/icons/insta.svg" class="icon icon-white social-icons" />

      <img src="../assets/icons/twitter.svg" class="icon icon-white social-icons" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {
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

  moveToContact() {
    const options: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
      inline: "start"
    };
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView(options);
    }
  }
}
</script>

<style>
p > span {
  text-decoration: underline;
}
p > span:hover {
  color: var(--alt-color);
  cursor: pointer;
}

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
