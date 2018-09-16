<template>
  <div class="container">
    <Header />

    <div class="contents">
      <nuxt/>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {
  @Prop() person;
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .contents {
    flex: 1;
  }
}
</style>
