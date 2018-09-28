<template>
  <section>
    <h1>Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <p class="date">2018/09/10</p>
        <nuxt-link :to="`/${post}`">
          <p class="title">ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },

  created() {
    this.posts = this.$hoge;
    console.log(this.$hoge);
  }
};
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
