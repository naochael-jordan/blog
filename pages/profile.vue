<template>
  <section>
    <h1>Naochael Jordan</h1>
    <p class="name-kana">ナオケル ジョーダン</p>

    <img class="avatar" src="~/assets/images/profile.jpg" width="250" height="250" alt="Naochael Jordan">

    <h2>プロフィール</h2>
    <p>
      ハワイ好きのフロントエンドエンジニア。Webサービスとかアプリ開発してます。<br>
      ReactNative, Electron, Nuxt.js, Vuex, Redux, Rails辺りはほぼ理解した && よく触ってます。<br>
    </p>

    <h2>好きなこと</h2>
    <p>
      ・Webサービス、アプリ開発<br>
      仕事の空き時間でWebサービス、アプリ開発しつつ、そっちで生計立てる +α の生活送る、を目標にやってます。<br>
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

    <h2>Contact</h2>
    <p>
      naochael.jordan@gmail.com
    </p>
  </section>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

section {
  max-width: $width;
  margin: 80px auto;
}

h1 {
  margin: 0 0 10px;
  font-size: 6rem;
  line-height: 6rem;
}

.name-kana {
  margin: 0 0 50px;
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

ul {
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  a:first-child {
    margin-right: 10px;
  }
}

.avatar {
  border-radius: 50%;
}

// for SP
@media (max-width: $width + (10px * 2)) {
  section {
    margin: 20px auto;
    padding: 0 10px;

    h1 {
      margin: 0 0 0;
      font-size: 2rem;
      line-height: 1.6;
    }

    .name-kana {
      margin: 0 0 20px;
      font-size: 1.2rem;
    }

    .avatar {
      width: 100px;
      height: 100px;
    }

    h2 {
      margin: 20px 0 10px;
      font-size: 1.8rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6;
    }

    ul {
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
    }
  }
}
</style>
