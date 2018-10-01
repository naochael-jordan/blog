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

  created() {
    console.log("this.$store.state.posts", this.$store.state.posts);
    const post = this.$store.state.posts.find(
      post => post.fileName === this.$route.path.replace("/", "")
    );
    console.log("post", post);
    this.$store.commit("setPost", post);
    console.log("this.$store.state.post 111", this.$store.state.post);
  },

  computed: {
    title: function() {
      console.log("this.$store.state.post 222", this.$store.state.post);
      if (!this.$store.state.post) return "";
      console.log("this.$store.state.post 333", this.$store.state.post);
      console.log("this.$store.state.post.title", this.$store.state.post.title);
      console.log("this.$store.state.post.date", this.$store.state.post.date);
      return this.$store.state.post.attributes.title;
    },

    date: function() {
      if (!this.$store.state.post) return null;

      return this.$store.state.post.attributes.date;
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

  /deep/ p code,
  /deep/ ul code {
    margin: 0 4px;
    color: #ca454e;
    white-space: nowrap;
  }
}
</style>
