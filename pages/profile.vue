<template>
  <section></section>
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
