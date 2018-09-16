<template>
  <footer>
    <div class="container">
      <section class="profile">
        <md-avatar class="md-large">
          <img src="~/assets/images/profile.jpg" alt="Naochael Jordan">
        </md-avatar>
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import { Avator } from "vue-material/dist/components";

export default Vue.extend({});
</script>


<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 40px 0;
  color: white;
  background: #333;

  .container {
    width: $width;
    margin: 0 auto;
  }
}
</style>
