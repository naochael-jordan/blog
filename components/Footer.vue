<template>
  <footer>
    <section class="container">
      <h2 v-if="!hideProfile">Author</h2>

      <div v-if="!hideProfile" class="box">
        <md-avatar class="md-large">
          <img src="~/assets/images/profile.jpg" alt="Naochael Jordan">
        </md-avatar>

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
            </li>
            <li>
              <a href="https://github.com/naochael-jordan" target="_blank" rel="noopener">
                <img src="~/assets/images/github.png" width="24" height="24" alt="Naochael Jordan Github">
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
  // position: absolute;
  // bottom: 0;
  // width: 100%;
  padding: 10px 0;
  color: white;
  background: #333;

  .container {
    width: $width;
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

  .info {
    flex: 1;
    margin-left: 20px;

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    li {
      margin-right: 10px;
    }
  }

  address {
    margin: 0;
    text-align: center;
  }
}
</style>
