import fs from "fs";

export default ({ store }, inject) => {
  let markdownFiles = [];
  if (process.server) {
    markdownFiles = fs
      .readdirSync("./static")
      .filter(i => i.match(/.md$/))
      .map(f => f.replace(/.md$/, ""));
    inject("hoge", markdownFiles);
  }
};
