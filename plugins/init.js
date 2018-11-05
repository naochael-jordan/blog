import fs from "fs";
import fm from "front-matter";

export default ({ store: { commit } }) => {
  if (process.server) {
    const files = fs.readdirSync("./markdown");
    const posts = files
      .filter(file => file.match(/.md$/))
      .map(file => {
        let post = fm(fs.readFileSync(`markdown/${file}`, "utf8"));
        post.fileName = file.replace(/.md$/, "");
        return post;
      })
      .reverse();

    commit("setPosts", posts);
  }
};
