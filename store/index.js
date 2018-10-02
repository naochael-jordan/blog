import Vuex from "vuex";

const store = () =>
  new Vuex.Store({
    state: {
      posts: [],
      post: {
        attributes: {
          title: "",
          date: null
        },
        body: "",
        fileName: "",
        frontmatter: ""
      }
    },

    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      },

      setPost(state, post) {
        state.post = post;
      }
    }
  });

export default store;
