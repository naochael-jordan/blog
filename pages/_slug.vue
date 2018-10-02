<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p class="date">{{ format(date, 'YYYY-MM-DD') }}</p>
    <div v-html="htmlContent" class="contents"></div>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  async asyncData({ params }) {
    const htmlContent = await import(`~/static/${params.slug}.md`);
    return {
      htmlContent
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.body
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "og:title",
          content: this.title
        },
        {
          name: "og:description",
          content: this.body
        },
        {
          name: "og:image",
          content:
            "https://naochael-jordan.github.io/blog/_nuxt/img/profile.d4b7099.jpg"
        }
      ]
    };
  },

  created() {
    const post = this.$store.state.posts.find(
      post => post.fileName === this.$route.path.replace(/\//g, "")
    );
    this.$store.commit("setPost", post);
  },

  computed: {
    title: function() {
      return this.$store.state.post.attributes.title;
    },

    date: function() {
      return this.$store.state.post.attributes.date;
    },

    body: function() {
      return this.$store.state.post.body.replace(/\r?\n/g, "");
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
