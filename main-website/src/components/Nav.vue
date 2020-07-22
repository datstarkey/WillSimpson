<template>
  <div class="nav">
    <img src="../assets/icons/logo.svg" class="logo-top" />
    <img src="../assets/hamburger.svg" class="hamburger" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {}
</script>

<style>
.hamburder {
  width: 25px;
  height: auto;
}

.hamburger:hover {
  filter: invert(48%) sepia(18%) saturate(3519%) hue-rotate(345deg)
    brightness(96%) contrast(84%);
  cursor: pointer;
}

.logo-top {
  height: auto;
  width: 40px;
}

.nav {
  display: flex;
  font-size: 5rem;
  align-items: center;
  justify-content: space-between;
}
</style>