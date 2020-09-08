<template>
  <div class="layout">
    <header class="header">
      <div class="header-container">
        <strong>
          <g-image
            alt="Example image"
            src="~/assets/images/logo.png"
            height="50"
            fit="inside"
          />
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Accueil</g-link>
          <g-link class="nav__link" active-class="active__link" to="/articles/"
            >Blog</g-link
          >
          <g-link class="nav__link" to="/about/">A-propos</g-link>
        </nav>
      </div>
    </header>
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  components: {
    Footer,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header-container {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  border-top: 8px solid #234356;
}
</style>
