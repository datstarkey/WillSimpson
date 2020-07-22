<template>
  <div>
    <MainBlock />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainBlock from "./components/MainBlock.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    MainBlock,
    Contact,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
@font-face {
  font-family: "Cambon";
  src: url("./assets/fonts/Cambon-Regular.otf");
}

@font-face {
  font-family: "Karla";
  src: url("./assets/fonts/Karla-Regular.ttf");
}

:root {
  --background-color-1: #131313;
  --background-color-2: #1b1b1b;
  --alt-color: #e26a2c;
  overflow-x: hidden;
  background-color: var(--background-color-2);

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

::-webkit-scrollbar {
  display: none;
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.space-between {
  justify-content: space-between;
  height: 100%;
}

.mt {
  margin-top: 50px;
}

.mb {
  margin-bottom: 50px;
}

.full-height {
  height: 100%;
}

.animate__animated {
  --animate-duration: 2s;
}

.display-none {
  display: none;
}

.icon-white {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(215deg)
    brightness(104%) contrast(101%);
}

.icon:hover {
  filter: invert(48%) sepia(18%) saturate(3519%) hue-rotate(345deg)
    brightness(96%) contrast(84%);
  cursor: pointer;
}

.icons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

span {
  font-family: Karla;
}

button {
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}

button:focus {
  outline: none;
  box-shadow: none;
}
h1 {
  padding: 0;
  margin: 0;
  font-size: 65px;
  font-family: Cambon;
  color: #fff;
  font-weight: normal;
}

h2 {
  padding: 0;
  margin: 0;
  font-size: 65px;
  font-family: Cambon;
  color: black;
  font-weight: normal;
}

h3 {
  padding: 0;
  margin: 0;
  font-family: Karla;
  font-weight: bold;
  color: var(--alt-color);
}

p {
  color: #c4c4c4;
  font-family: Karla;
  font-size: 18px;
}

a {
  text-decoration: none;
}
</style>
