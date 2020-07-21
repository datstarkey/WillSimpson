<template>
  <div class="footer-content">
    <div class="flex center">
      <div class="content mt">
        <div class="footer-row">
          <a>hello[at]wsimpson.co.uk</a>

          <div class="footer-row">
            <a>Dribble.</a>
            <a>Instagram.</a>
            <a>Twitter.</a>
          </div>
        </div>
        <p>© 2020 Will Simpson. All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style>
.footer-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f6f6f6;
}

.footer-row {
  display: flex;
  justify-content: space-between;
}
</style>