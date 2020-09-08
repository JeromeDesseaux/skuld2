<template>
  <div class="article__list__container">
    <h2>{{ article.node.title }}</h2>
    <p>{{ article.node.abstract }}</p>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.article__list__container {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
