<template>
  <section>
    <h1>Blog</h1>
    <ul>
      <li v-for="(article, index) in sourceFileArray" :key="index">
        <p class="date">2018/09/10</p>
        <nuxt-link to="/">
          <p class="title">ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";

@Component
export default class extends Vue {
  sourceFileArray = [];
  fileMap = {};

  async created() {
    const summary = await axios.get("./json/summary.json");
    this.sourceFileArray = summary.data.sourceFileArray;
    this.fileMap = summary.data.fileMap;
    console.log(this.sourceFileArray, this.fileMap);
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

section {
  width: $width;
  margin: 50px auto;

  h1 {
  }

  li {
    display: flex;
    align-items: center;
  }

  .date {
    margin-right: 20px;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
