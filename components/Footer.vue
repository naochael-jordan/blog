<template>
  <footer></footer>
</template>


<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  props: {
    showProfile: {
      type: Boolean,
      default: true
    }
  }
})
export default class Footer extends Vue {}
</script>


<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

footer {
  padding: 10px 0;
  color: white;
  font-size: 14px;
  background: #333;

  .container {
    max-width: $width;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 20px 0;
    padding-top: 20px;
    font-size: 2.4rem;
  }

  .md-large {
    width: 160px;
    height: 160px;
    border-radius: 160px;
  }

  .box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .profile {
    border-radius: 50%;
  }

  .info {
    flex: 1;
    margin-left: 20px;

    ul {
      margin: 20px 0 0;
      padding: 0;
      list-style-type: none;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      a {
        margin-right: 10px;
        color: white;
      }
    }

    .more {
      margin-left: 4px;
      color: white;
      text-decoration: underline;
    }
  }

  address {
    margin: 0;
    text-align: center;
  }
}

// for SP
@media (max-width: $width + (10px * 2)) {
  footer {
    padding: 10px;

    h2 {
      margin: 10px 0 10px;
      padding: 0;
      font-size: 1.8rem;
      line-height: 1.4;
    }

    .box {
      align-items: flex-start;
    }

    .profile {
      width: 100px;
      height: 100px;
    }

    .info {
      margin-left: 16px;
      line-height: 1.4;
    }

    h3 {
      margin: 0 0 10px;
      font-size: 1.6rem;
    }

    p {
      margin: 0 0 10px;
      font-size: 1.3rem;
    }

    ul {
      font-size: 1.2rem;
    }

    address {
      line-height: 1.6;
    }
  }
}
</style>
