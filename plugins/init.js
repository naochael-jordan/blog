import fs from "fs";
import fm from "front-matter";

export default ({ store: { commit } }) => {
  if (process.server) {
    // const fs = require('fs')
    // const files = fs.readdirSync('blog')
    // const posts = files.map((file) => {
    //   let post = fm(fs.readFileSync(`blog/${file}`, 'utf8'))
    //   post.filename = file
    //   post.created = new Date(fs.statSync(`blog/${file}`).ctime)
    //   post.slug = slugify(file.replace(/\.md$/, ''), {lower: true})
    //   post.url = `/blog/${post.slug}`
    //   return post
    // })
    const files = fs.readdirSync("./static");
    const posts = files.filter(file => file.match(/.md$/)).map(file => {
      let post = fm(fs.readFileSync(`static/${file}`, "utf8"));
      post.fileName = file.replace(/.md$/, "");
      return post;
    });

    // const mdfiles = glob.sync("./static/*.md");
    // const posts = mdfiles.map(f => {
    //   const content = fs.readFileSync(f, "utf-8");
    //   const body = md.render(content);
    //   const slug = f.replace(/^.\/static\//, "").replace(/.md$/, "");
    //   return {
    //     body,
    //     meta: md.meta,
    //     slug
    //   };
    // });

    commit("setPosts", posts);
  }
};
