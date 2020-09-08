<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <div id="presentation" class="container">
      <div id="presentation-content" class="body-text">
      <g-image
        alt="Example image"
        src="~/assets/images/developer.svg"
        style="max-height: 200px; width:auto;"
      />
        <h1 class="text-uppercase text-thin">Jérôme Desseaux | Développeur Node.js, Python et Go freelance</h1>
        <!-- <h2 class="text-thin color-secondary">avec SKULD</h2> -->
        <p>
          Ingénieur de formation et passionné par mon métier, j'accompagne depuis 2013 les entreprises dans leurs projets numériques. Je travaille principalement sur tout ce qui touche de près ou de loin aux données et au développement backend (avec un peu de front quand il faut) :
          <ul>
              <li>Architecture et Modélisation</li>
              <li><b class="underline">Node.js</b> - <b class="underline">Express</b>, Nest, avec <b class="underline">Vue.js</b> ou React côté frontend (je ne suis pas développeur frontend mais je me débrouille) le tout saupoudré de <b class="underline">TypeScript</b></li>
              <li><b class="underline">Python</b> - <b class="underline">Django</b>, Flask, FastAPI, BeautifulSoup, SQLAlchemy ... Bref, un peu de tout quoi.</li>
              <li><b class="underline">Go</b> (ou Golang) - Pour des API et microservices ultra-rapides.</li>
              <li><b class="underline">Data</b> - Scraping et machine-learning.</li>
              <li>Côté DevOps j'utilise <b class="underline">Docker</b> et <b class="underline">AWS</b> le tout sur un système <b class="underline">Linux</b>.</li>
            </ul>
        </p>
        <p style="margin-bottom: 20px;">Côté organisation, mes disponibilités sont accessibles sur mon profil LinkedIn. Tu trouveras tous les liens vers les différents moyens de me contacter en pied de page. Enfin, sache que je n'accepte que les missions en télétravail.</p>
        <g-link to="/about/" class="btn btn-primary">Plus d'infos</g-link>
      </div>
    </div>
    <Wave background-color="#234356">
      <div id="who-am-i">
        <div id="description" class="column">
          <h2 class="text-uppercase text-thin" id="author">Qui suis-je ?</h2>
          <p class="body-text">
            Je suis ingénieur en Architecture des Systèmes d'Information (un peu
            verbeux, non?) - En bref, je conçois, modélise et teste des
            applications numériques. Je vois mon métier comme une passion et transmettre mes connaissances comme un devoir.
            Vous trouverez sur ce site mon blog dans lequel j'essaie de relater mes dernières trouvailles ou pensées. Outre mon travail, j'apprécie passer du temps avec mes amis et ma famille. Je suis également défenseur de l'écologie et oeuvre au quotidien, aussi bien professionnellement qu'à titre privé, afin de réduire mon empreinte énergétique.
          </p>
        </div>
        <div id="image">
          <g-image
            alt="Photo de Jérôme Desseaux - Développeur Freelance Python Node.js et Go à Rouen et en télétravail"
            src="~/assets/images/Secondary.png"
            height="200"
            fit="inside"
          />
        </div>
      </div>
    </Wave>
    <div id="latest-articles" class="container">
      <h2 class="text-uppercase" style="margin-top: 25px">Derniers articles</h2>
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

#author {
  color: white;
}

#presentation-content {
  min-width: 60%;
  /* font-size: 1.2rem; */
}

#presentation img {
  padding-bottom: 45px;
}

.column {
  display: flex;
  /* flex-basis: 100%; */
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}

#who-am-i {
  color: white;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}

#who-am-i #description {
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
  min-width: 500px;
  max-width: 60%;
  margin-top: 20px;
  margin-bottom: 30px;
  align-items: start;
  /* max-width: 00px; */
}

@media screen and (max-width: 1240px)
{
  #who-am-i #description {
    min-width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* max-width: 00px; */
  }

  #who-am-i #image {
    margin-bottom: 20px;
  }

  #presentation img {
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 30px;
  }
  
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
