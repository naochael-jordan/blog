import fs from "fs";
import fm from "front-matter";

export default ({ store: { commit } }) => {
  if (process.server) {
    const files = fs.readdirSync("./static");
    const posts = files.filter(file => file.match(/.md$/)).map(file => {
      let post = fm(fs.readFileSync(`static/${file}`, "utf8"));
      post.fileName = file.replace(/.md$/, "");
      return post;
    });

    commit("setPosts", posts);
  }
};
