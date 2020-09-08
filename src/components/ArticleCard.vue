<template>
  <a class="article__card" :href="article.node.path">
    <div class="article__img">
      <g-image alt="Example image" :src="article.node.image" />
    </div>
    <div class="article__content">
      <h3>{{ article.node.title }}</h3>
      <p>{{ article.node.abstract }}</p>
    </div>
  </a>
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
.article__card {
  margin: 20px;
  text-decoration: none;
  color: black;
  max-width: 45%;
  min-width: 300px;
  border-radius: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease 0s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}

.article__img {
  //   border-radius: 7px 7px 0 0;
  height: 200px;
  & img {
    // max-height: 200px;
    width: 100%;
    height: 100%;
    border-radius: 7px 7px 0 0;
    object-fit: cover;
  }
}

.article__content {
  padding: 20px;
  & h3 {
    text-transform: uppercase;
    font-weight: 300;
  }
}
</style>
