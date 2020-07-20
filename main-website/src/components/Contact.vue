<template>
  <div class="contact-space" v-observe-visibility="visibilityChanged">
    <div class="padd-box" :class="isVisible ? 'animate__animated animate__fadeIn' : 'display-none'">
      <h2>Let's work together on your next project.</h2>
      <p
        style="margin-top:5rem"
      >Any questions or queries? Want to work together? Don't hesitate to get in touch to see how I can help.</p>

      <button class="contact-button">hello[at]wsimpson.co.uk</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
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
.contact-button {
  margin-top: 50px;
  color: white;
  background-color: black;
  font-size: 28px;
  padding: 1rem 3rem;
}

.contact-button:hover {
  opacity: 0.8;
}

.padd-box {
  padding: 10rem 27%;
}

.contact-space {
  width: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  text-align: center;
}
</style>
