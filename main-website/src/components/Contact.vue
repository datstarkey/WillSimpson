<template>
  <div id="contact" class="contact-space" v-observe-visibility="visibilityChanged">
    <div class="padd-box" :class="isVisible ? 'animate__animated animate__fadeIn' : 'display-none'">
      <h2>
        Let's work together on your
        <br />next project.
      </h2>
      <p style="margin-top:5rem">
        Any questions or queries? Want to work together? Don't hesitate to get in touch to see how I
        <br />can help.
      </p>

      <button class="contact-button">
        <a
          class="email-link"
          href="mailto:hello@wsimpson.co.uk?subject=Inquiry&body=Hi Will."
        >hello[at]wsimpson.co.uk</a>
      </button>
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

  background-color: black;

  padding: 1rem 3rem;
  border: 0;
}

.email-link {
  font-family: Cambon;
  font-size: 28px;
  color: white;
}

.contact-button:hover {
  opacity: 1;
}

.padd-box {
  padding: 10rem 27%;
}

.contact-space {
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  text-align: center;
}
</style>
