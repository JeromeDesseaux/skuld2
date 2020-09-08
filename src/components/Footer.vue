<template>
  <footer>
    <div class="container footer__container">
      <span>Réalisé avec amour à Rouen</span>
      <span>Réseaux sociaux</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  //   position: absolute;
  margin: auto;
  left: 0;
  bottom: 0;
  background-color: #162d40;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  text-align: center;
  //   margin-top: 150px;
}

.footer__container {
  //   width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
