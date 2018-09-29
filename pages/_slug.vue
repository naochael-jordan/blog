<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const content = await import(`~/static/${params.slug}.md`);
    return {
      content
    };
  }
};
</script>
