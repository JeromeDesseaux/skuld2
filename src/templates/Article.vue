<template>
  <Layout>
    <div class="article__container container">
      <h1>{{ $page.article.title }}</h1>
      <span class="article__summary"
        >{{ $page.article.date }} •
        {{ getEstimatedReadingTime($page.article.content) }} ☕
      </span>

      <div class="image__header">
        <g-image
          alt="Example image"
          :src="$page.article.image"
          height="200"
          fit="inside"
        />
      </div>

      <div
        v-html="$page.article.content"
        class="article__content body-text"
      ></div>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  article: article (path: $path) {
    title
    content
    author
    image
    date(format: "DD/MM/YYYY")
  }
}
</page-query>

<script>
export default {
  components: {},
  data: function () {
    return {
      readingTimeInMinutes: 0,
    };
  },
  metaInfo() {
    return {
      title: this.$page.article.title,
    };
  },
  methods: {
    getEstimatedReadingTime: (content) => {
      const wordsPerMinute = 200;
      let result;
      let textLength = content.split(" ").length;
      if (textLength > 0) {
        const time = Math.ceil(textLength / wordsPerMinute);
        return time > 1 ? `Environ ${time} minutes` : `Environ ${time} minute`;
      }
      return `Aucun texte`;
    },
  },
};
</script>

<style lang="scss" scoped>
.article__container {
  margin: auto;
  & h1 {
    text-transform: uppercase;
    font-weight: 300;
  }
}

.article__summary {
  font-weight: 300;
  font-size: 1.2rem;
}

.image__header {
  height: 500px;
  margin: 20px 0 20px 0;
  & img {
    height: 100%;
    width: 100%;
  }
}

.article__content {
  //   font-size: 1.2rem;
}
</style>
