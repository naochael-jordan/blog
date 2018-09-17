<template>
  <section>
    <h1>Naochael Jordan</h1>

    <md-avatar class="md-large">
      <img src="~/assets/images/profile.jpg" alt="Naochael Jordan">
    </md-avatar>

    <h2>プロフィール</h2>
    <p>
      普段はフロントエンドエンジニアしながら、Webサービスとかアプリ開発してます。<br>
      ReactNative, Electron, Nuxt.js, Vuex, Redux, Rails辺りをよく触ってます。<br>
    </p>

    <h2>好きなこと</h2>
    <p>
      ・Webサービス、アプリ開発<br>
      普段は仕事しつつ、空き時間でWebサービス、アプリ開発して、そっちで生計立てる +α の生活送る、を目標にやってます。<br>
      仕事もエンジニアなので、開発自体がスキルアップに繋がり転職のリスクヘッジになる + ちょっとしたお金得られる + 単純に楽しい、でメリット計り知れないな、なんて思ってます。<br>
      これまでの実績は給料以外で50万ぐらい。ゆる〜くやってます。<br>
      <br>
      その他には、<br>
      ・バスケットボール<br>
      ・ゲーム(スマブラ、ウイイレとか)<br>
      ・映画(インターステラーとか)<br>
      ・ビールとかBBQ<br>
      とかが大好きです。
    </p>

    <h2>SNS</h2>
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
          <img src="~/assets/images/github-black.png" width="24" height="24" alt="Naochael Jordan Github">
        </a>
        <a href="https://github.com/naochael-jordan" target="_blank" rel="noopener">
          naochael-jordan
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
export default {
  layout: "profile"
};
</script>


<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

section {
  width: $width;
  margin: 80px auto;
}

h1 {
  margin: 0 0 50px;
  font-size: 6rem;
  line-height: 6rem;
}

h2 {
  margin: 50px 0 10px;
  padding: 0;
  font-size: 2rem;
  line-height: 2rem;
}

p {
  margin: 0;
  padding: 0;
}

.md-large {
  width: 200px;
  height: 200px;
  border-radius: 200px;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  a:first-child {
    margin-right: 10px;
  }
}
</style>
