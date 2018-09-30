<template>
  <section>
    <h1>Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <p class="date">{{ format(post.attributes.date, 'YYYY-MM-DD') }}</p>
        <nuxt-link :to="`/${post.fileName}`">
          <p class="title">{{ post.attributes.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { format } from "date-fns";

export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },

  methods: {
    format
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

section {
  max-width: $width;
  margin: 50px auto;

  li {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
  }

  .date {
    margin-right: 20px;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
