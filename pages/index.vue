<template>
  <section>
    <h1>Blog</h1>

    <nuxt-link class="nav-item" to="/2018-10-01/test1">Post 1</nuxt-link>
    <!-- <div v-html="postContent"></div> -->
    <ul>
      <li v-for="(article, index) in $hoge" :key="index">
        <p class="date">2018/09/10</p>
        <nuxt-link to="/">
          <p class="title">ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  created() {
    console.log(this.$hoge);
  }
};
// import axios from "axios";
// import { Component, Vue } from "nuxt-property-decorator";
// import { State } from "vuex-class";

// @Component
// export default class extends Vue {
//   sourceFileArray = [];
//   fileMap = {};
//   postContent = "hoge";

//   async created() {
//     const summary = await axios.get("./json/summary.json");
//     this.sourceFileArray = summary.data.sourceFileArray;
//     this.fileMap = summary.data.fileMap;
//     this.postContent = require("../posts/hoge.md");
//     // console.log(this.$hoge);
//   }
// }
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
