<template>
  <div>
    <Header />

    <nuxt/>

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
