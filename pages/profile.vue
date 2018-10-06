<template>
  <section>
    <h1>Naochael Jordan</h1>
    <p class="name-kana">ナオケル ジョーダン</p>

    <img class="avatar" src="~/assets/images/profile.png" width="250" height="250" alt="Naochael Jordan">

    <h2>プロフィール</h2>
    <p>
      フロントエンドエンジニア。Webサービスとかアプリ開発してます。<br>
      ReactNative, Electron, Nuxt.js, Vuex, Redux, Rails辺りをガリガリ触ってます。<br>
    </p>

    <h2>好きなもの</h2>
    <p>
      ・日曜日のサンデーモーニングからワイドナショーの流れ<br>
      ・カイジ 「<a href="https://youtu.be/B28ufV4ojkQ" target="_blank" rel="noopener">柿ピー1日半欠けら</a>」になるシーン<br>
      ・Perfumeの「<a href="https://youtu.be/CYL3DnyA4e0" target="_blank" rel="noopener">Sweet Refrain</a>」<br>
      <!-- ・マネーの虎 <a href="https://www.youtube.com/watch?v=gJ4Vh1iq7Bw" target="_blank" rel="noopener">うどん屋の回</a><br> -->
      ・マイケルジョーダン<br>
      ・ゲーム スマブラ、ウイイレ<br>
      ・映画 インターステラー、インセプション、ソーシャルネットワーク<br>
      <br>
      仕事の空き時間でWebサービス、アプリ開発してます。<br>
      そっちで生計立てる +α の生活送る、を目標に。<br>
      仕事もエンジニアなので、開発自体がスキルアップに繋がり転職のリスクヘッジにもなる。<br>
      そして、ちょっとした収入得れる + 単純に楽しい、でメリット計り知れないな、なんて思ってます。<br>
      これまでの実績は給料以外で50万ぐらい。ゆる〜くやってます。<br>
      <br>
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
      margin: 30px 0 10px;
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
