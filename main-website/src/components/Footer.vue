<template>
  <div class="footer-content">
    <div class="flex center full-height">
      <div class="content">
        <div class="flex-column space-between">
          <div></div>
          <div class="footer-row">
            <div class="footer-row">
              <img src="../assets/icons/logo.svg" class="logo-icon" />

              <a
                class="footer-icon"
                href="mailto:hello@wsimpson.co.uk?subject=Inquiry&body=Hi Will."
              >hello[at]wsimpson.co.uk</a>
            </div>

            <div class="footer-row">
              <a class="footer-icon" href="https://dribbble.com/wsimpsond" target="blank">Dribbble.</a>
              <a
                class="footer-icon"
                href="https://www.instagram.com/wsimpson_design"
                target="blank"
              >Instagram.</a>
              <a class="footer-icon" href="https://twitter.com/wsimpsond" target="blank">Twitter.</a>
            </div>
          </div>
          <div class="footer-row mb">
            <div></div>
            <p class="footer-text">© 2020 Will Simpson. All rights reserved</p>
            <div>
              <img
                src="../assets/icons/backToTop.svg"
                class="back-to-top-icon"
                v-on:click="moveToTop()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  moveToTop() {
    const options: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
      inline: "start"
    };
    const element = document.getElementById("top-of-page");
    if (element) {
      element.scrollIntoView(options);
    }
  }
}
</script>

<style>
.footer-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f6f6f6;
  height: 30vh;
}

.back-to-top-icon {
  width: auto;
  height: 50px;
}

.logo-icon {
  filter: invert(13%) sepia(0%) saturate(3033%) hue-rotate(223deg)
    brightness(86%) contrast(78%);

  width: auto;
  height: 20px;
  margin-right: 30px;
}

.back-to-top-icon:hover {
  filter: invert(97%) sepia(97%) saturate(0%) hue-rotate(40deg) brightness(103%)
    contrast(103%);
  cursor: pointer;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.footer-text {
  font-size: 16px;
}

.footer-icon {
  font-family: Cambon;
  color: #9b9b9b;
  margin-left: 20px;
}

.footer-icon:hover {
  color: black;
  cursor: pointer;
}
</style>