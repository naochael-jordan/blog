import Vue from "vue";

export default ({ store }, inject) => {
  // `i18n` キーを挿入する
  // -> app.$i18n になる
  // -> Vue コンポーネント内では this.$i18n
  // -> Vuex ストアやアクション、ミューテーション内で this.$i18n
  // このようにしてミドルウェアやページの asyncData や fetch の中でプラグインを使うことができる

  inject("hoge", [1, 2, 3, 4, 5]);
};
