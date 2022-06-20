<template>
  <header-page />
  <body-page />
  <footer-page />
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import BodyPage from './components/BodyPage.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  created() {document.title = "Valorant Dashboard"},
  components: {
    HeaderPage,
    BodyPage,
    FooterPage
  }.
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap%27');
@font-face {
    font-family: Valorant;
    src: url("./assets/Valorant\ Font.ttf");
}
*{
  font-family: Valorant, sans-serif;
}
html, body{
  scroll-behavior: smooth;
  margin: 0 !important;
  padding: 0 !important;
}

</style>
