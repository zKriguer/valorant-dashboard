<template>
  <cabecalho />
  <corpo />
  <rodape />
</template>

<script>
import cabecalho from './components/header.vue'
import corpo from './components/body.vue'
import rodape from './components/footer.vue'

export default {
  name: 'App',
  components: {
    rodape,
    corpo,
    cabecalho
  }
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
  margin: 0 !important;
  padding: 0 !important;
}

</style>
