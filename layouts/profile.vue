<template>
  <div class="container">
    <Header />

    <div class="contents">
      <nuxt/>
    </div>

    <Footer :hideProfile="true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
</style>
