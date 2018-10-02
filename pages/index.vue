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
  padding: 0 10px;

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

// for SP
@media (max-width: $width + (10px * 2)) {
  section {
    margin: 20px auto;

    h1 {
      margin: 0 0 20px;
      font-size: 2rem;
      line-height: 1.4;
    }

    ul {
      margin: 0;
      padding-left: 10px;
    }

    li {
      display: block;
      margin-bottom: 10px;
    }

    .date {
      font-size: 1.3rem;
    }

    .title {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }
}
</style>
