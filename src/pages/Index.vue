<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <div id="presentation" class="container">
      <div id="presentation-content" class="column">
        <h2 class="text-uppercase text-thin">Réalisez vos projets</h2>
        <h2 class="text-thin color-secondary">Avec Skuld</h2>
        <p>
          Je suis passionné par le développement, apprendre de nouvelles choses
          et transmettre ce que je sais. Mes développements sont maintenables et
          visent à être réalisables
        </p>
        <g-link to="/about/" class="btn btn-primary">En savoir plus</g-link>
      </div>
      <g-image
        alt="Example image"
        src="~/assets/images/developer.svg"
        class="column"
        style="max-width: 500px"
      />
    </div>
    <Wave background-color="#234356">
      <div class="container" id="who-am-i">
        <div id="description" class="column">
          <h1>Moi, c'est Jérôme Desseaux</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil
          consectetur autem error suscipit, eveniet alias fuga accusamus harum
          minus iusto, similique quasi nulla eligendi maxime architecto modi
          consequatur sequi.
        </div>
        <div id="image">
          <g-image
            alt="Example image"
            src="~/assets/images/Secondary.png"
            height="200"
            fit="inside"
          />
        </div>
      </div>
    </Wave>
    <div id="latest-articles" class="container">
      <h1 class="text-uppercase" style="margin-top: 25px">Derniers articles</h1>
      <div class="article__container">
        <ArticleCard
          :article="article"
          v-for="article in $page.articles.edges"
          :key="article.id"
          class="article__card"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  articles: allArticle(perPage: 5, page: 1) {
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
import Wave from "../components/Wave";
import ArticleCard from "../components/ArticleCard";

export default {
  metaInfo: {
    title: "Consultant Python et Node.js backend senior",
  },
  components: {
    Wave,
    ArticleCard,
  },
};
</script>

<style scoped>
.article__container {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

.home-links a {
  margin-right: 1rem;
}

#presentation {
  display: flex;
  flex-direction: row;
  flex: 1;
}

#presentation img {
  padding: 45px;
}

.column {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: start;
}

#who-am-i {
  color: white;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
}

#who-am-i #description {
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
  min-width: 500px;
  max-width: 60%;
  align-items: start;
  /* max-width: 00px; */
}

#who-am-i #description h1 {
  color: white;
}

#who-am-i #image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
}

#who-am-i img {
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

/* #latest-articles { */
/* height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center; */
/* } */
</style>
