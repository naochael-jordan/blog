<template>
  <section></section>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

section {
  max-width: $width;
  min-height: 400px;
  margin: 50px auto 70px;
  padding: 0 10px;

  ul {
    margin: 0 0 0 10px;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 20px;
  }

  .contents {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
  }

  .month {
    margin: 0 0 20px -10px;
    font-size: 2.4rem;
    font-weight: bold;
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
      margin-bottom: 20px;
    }

    .contents {
      display: block;
    }

    .month {
      margin: 0 0 10px -10px;
      font-size: 2rem;
      font-weight: bold;
    }

    .date {
      font-size: 1.4rem;
    }

    .title {
      font-size: 1.6rem;
      line-height: 1.4;
    }

    a {
      display: inline-block;
    }
  }
}
</style>
