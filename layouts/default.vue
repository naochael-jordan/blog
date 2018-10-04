<template>
  <div class="container">
    <Header />

    <div class="contents">
      <nuxt/>
    </div>

    <Footer :showProfile="showProfile" />
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { Route } from "vue-router";

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {
  $route: Route;
  showProfile = true;

  @Watch("$route")
  watchRoute() {
    this.changeShowProfile();
  }

  created() {
    this.changeShowProfile();
  }

  changeShowProfile() {
    this.showProfile = this.$route.name === "profile" ? false : true;
  }
}
</script>


<style lang="scss" scoped>
</style>
