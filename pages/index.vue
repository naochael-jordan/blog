<template>
  <section>
    <ul>
      <li v-for="(post, index) in posts" :key="index" v-once>
        <p v-if="showMonth(post.attributes.date, index)" class="month">{{ year }}</p>
        <div class="contents">
          <p class="date">{{ format(post.attributes.date, 'YYYY年MM月DD日') }}</p>
          <nuxt-link :to="`/${post.fileName}/`">
            <p class="title">{{ post.attributes.title }}</p>
          </nuxt-link>
        </div>
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
  year = "";

  get posts() {
    return this.$store.state.posts;
  }

  showMonth(date, index) {
    const year = format(date, "YYYY");
    if (year === this.year) {
      return false;
    } else {
      this.year = year;
      return true;
    }
  }
}
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
