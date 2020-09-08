<template>
  <Layout>
    <div class="container">
      <h1 class="text-uppercase text-thin">Derniers articles</h1>
      <p class="body-text">
        Acteur et promoteur de la liberté numérique, j'aime partager des
        réflexions et/ou découvertes sur ce qui m'intéresse ou ce sur quoi je
        travaille actuellement. Vous souhaitez discuter d'un de ces sujets? Vous
        trouverez l'ensemble des moyens de me contacter en pied de page de ce
        site. N'hésitez pas, ce sera avec plaisir.
      </p>
      <!-- <hr /> -->
      <div class="article__container">
        <ArticleCard
          :article="article"
          v-for="article in $page.articles.edges"
          :key="article.id"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  articles: allArticle {
    edges {
      node {
        title
        abstract
        image
        path
      }
    }
  }
}
</page-query>

<script>
import ArticleListItem from "../components/ArticleListItem";
import ArticleCard from "../components/ArticleCard";

export default {
  components: {
    ArticleListItem,
    ArticleCard,
  },
};
</script>

<style lang="scss" scoped>
.article__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
