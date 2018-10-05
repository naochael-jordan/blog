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

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { format } from "date-fns";

@Component({})
export default class Index extends Vue {
  format = format;

  get posts() {
    return this.$store.state.posts;
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

section {
  max-width: $width;
  margin: 50px auto 70px;
  padding: 0 10px;

  ul {
    margin: 0 0 0 10px;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
    margin: 20px auto 30px;

    h1 {
      margin: 0 0 20px;
      font-size: 2rem;
      line-height: 1.4;
    }

    li {
      display: block;
      margin-bottom: 20px;
    }

    .date {
      font-size: 1.2rem;
    }

    .title {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }
}
</style>
