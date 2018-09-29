import Vuex from "vuex";

const store = () =>
  new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      }
    }
  });

export default store;
