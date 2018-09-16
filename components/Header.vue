<template>
  <header>
    <h1>
      <nuxt-link to="/">
        <span>Naochael</span>
        Jordan
      </nuxt-link>
    </h1>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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

    a:hover {
      text-decoration: none;
    }

    span {
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    margin: 0;
    font-size: 1.4rem;
    list-style-type: none;
  }

  li {
    margin-left: 20px;
  }
}
</style>
