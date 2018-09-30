<template>
  <footer>
    <section class="container">
      <h2 v-if="!hideProfile">Author</h2>

      <div v-if="!hideProfile" class="box">
        <img class="profile" width="200" height="200" src="~/assets/images/profile.jpg" alt="Naochael Jordan">

        <div class="info">
          <h3>Naochael Jordan</h3>
          <p>
            普段はフロントエンドエンジニアしながら、Webサービスとかアプリ開発してます。<br>
            Nuxt, ReactNative, Electron, Vuex, Redux辺りをよく触ってます。
          </p>
          <ul>
            <li>
              <a href="https://twitter.com/NaochaelJ" target="_blank" rel="noopener">
                <img src="~/assets/svg/twitter.svg" width="24" height="24" alt="Naochael Jordan Twitter">
              </a>
              <a href="https://twitter.com/NaochaelJ" target="_blank" rel="noopener">
                @NaochaelJ
              </a>
            </li>
            <li>
              <a href="https://github.com/naochael-jordan" target="_blank" rel="noopener">
                <img src="~/assets/images/github.png" width="24" height="24" alt="Naochael Jordan Github">
              </a>
              <a href="https://github.com/naochael-jordan" target="_blank" rel="noopener">
                naochael-jordan
              </a>
            </li>
          </ul>
        </div>
      </div>

      <address>
        <small>Naochael Jordan © {{new Date().getFullYear()}}</small>
      </address>
    </section>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    hideProfile: {
      type: Boolean,
      default: false
    }
  }
});
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
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    li {
      display: flex;

      a {
        margin-right: 10px;
        color: white;
      }
    }
  }

  address {
    margin: 0;
    text-align: center;
  }
}
</style>
