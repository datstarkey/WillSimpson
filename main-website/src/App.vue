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
  --alt-color: #e26a2c;
  overflow-x: hidden;
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

.animate__animated {
  --animate-duration: 2s;
}

.display-none {
  display: none;
}

.icon {
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
  font-family: Cambon;
  color: #9b9b9b;
  padding: 0 5%;
}

a:hover {
  color: black;
  cursor: pointer;
}
</style>
