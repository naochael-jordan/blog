<template>
  <footer>
    <div class="container">
      <section class="profile">
        <md-avatar class="md-large">
          <img src="~/assets/images/profile.jpg" alt="Naochael Jordan">
        </md-avatar>
         <md-button>Default</md-button>
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
footer {
  color: white;
  background: #333;
}
</style>
