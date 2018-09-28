<template>
  <div>
    1111 dynamiccccc
    <div v-html="content" class="contentWrapper content"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    console.log(params);
    const fileContent = await import(`~/assets/markdown/${params.slug}.md`);
    return {
      content: fileContent
    };
  },

  created() {
    console.log(this.$hoge);
  }
};
</script>
