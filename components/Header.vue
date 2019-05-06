<template>
  <header></header>
</template>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
  color: white;
  background: #333;
  border-bottom: 1px solid black;

  a {
    color: white;
  }

  h1 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.2;

    a:hover {
      text-decoration: none;
    }

    span {
      margin-right: 4px;
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    list-style-type: none;
  }

  li {
    margin-left: 20px;
  }
}

// for SP
@media (max-width: $width + (10px * 2)) {
  header {
    h1 {
      span {
        display: block;
      }
    }

    li {
      margin-left: 8px;
    }
  }
}
</style>
