<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p class="date">{{ format(date, 'YYYY-MM-DD') }}</p>
    <div v-html="content" class="contents"></div>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  async asyncData({ params }) {
    const content = await import(`~/static/${params.slug}.md`);
    return {
      content
    };
  },

  computed: {
    post: function() {
      return this.$store.state.posts.find(
        post => post.fileName === this.$route.path.replace("/", "")
      );
    },

    title: function() {
      return this.post.attributes.title;
    },

    date: function() {
      return this.post.attributes.date;
    }
  },

  methods: {
    format
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

.container {
  max-width: $width;
  margin: 50px auto;

  h1 {
    font-size: 4.2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
  }

  .date {
    text-align: right;
  }

  .contents {
    color: #4b4f56;
  }
}
</style>
