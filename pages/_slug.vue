<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class Slug extends Vue {
  beforeCreate() {
    if (process.browser) {
      location.href = `https://naokiotsu.github.io/blog${this.$route.path}`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

.container {
  max-width: $width;
  margin: 50px auto;

  h1 {
    font-size: 4.2rem;
    line-height: 5.7rem;
    font-weight: 600;
  }

  .date {
    text-align: right;
  }

  .contents {
    margin-bottom: 40px;
    color: #4b4f56;

    /deep/ h1 {
      margin: 60px 0 10px;
      padding-bottom: 10px;
      font-size: 2.6rem;
      line-height: 4.2rem;
      border-bottom: 1px solid #efefef;
    }

    /deep/ h2 {
      margin: 40px 0 0;
      font-size: 2rem;
      line-height: 3rem;
    }

    /deep/ li {
      margin-bottom: 4px;
    }

    /deep/ img {
      display: inline-block;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    /deep/ p {
      margin: 20px 0 4px;
    }

    /deep/ a {
      text-decoration: underline;
    }

    /deep/ p code,
    /deep/ ul code {
      margin: 0 4px;
      color: #ca454e;
    }

    /deep/ .hljs {
      padding: 1em 24px;
      background-color: #364549;
    }
  }

  .sns {
    display: flex;
    align-items: center;
  }

  .twitter {
    margin-right: 10px;
  }
}

// for SP
@media (max-width: $width + (10px * 2)) {
  .container {
    margin: 20px auto;
    padding: 0 16px;

    h1 {
      margin: 0 0 10px;
      font-size: 2.2rem;
      line-height: 3rem;
    }

    .date {
      margin: 0;
      font-size: 1.3rem;
    }

    .contents {
      line-height: 1.6;

      /deep/ h1 {
        margin: 40px 0 0;
        padding-bottom: 6px;
        font-size: 2rem;
        line-height: 3rem;
        border-bottom: 1px solid #efefef;
      }

      /deep/ h2 {
        margin: 30px 0 0;
        font-size: 1.6rem;
        line-height: 2.2rem;
      }

      /deep/ img {
        width: 100%;
      }

      /deep/ p {
        margin-top: 12px;

        code {
          white-space: normal;
        }
      }

      /deep/ ul {
        margin-top: 6px;
        padding-left: 30px;
      }

      /deep/ li {
        margin-bottom: 4px;
      }

      /deep/ pre {
        overflow: auto;
        word-wrap: normal;
        white-space: pre;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
      }

      /deep/ pre {
        margin: 12px -16px;
      }

      /deep/ .hljs {
        padding: 1em 16px;
        -webkit-text-size-adjust: none;
      }
    }
  }
}
</style>
