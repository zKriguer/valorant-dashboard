<template>
  <header class="headers">
    <div class="logo">
      <img src="../images/whitelogo.png" alt="" class="logoimg" />
      <p>VAVA DASH</p>
    </div>
    <form class="userdata">
      <input
        v-on:keyup.enter="getUserMatchs"
        v-model="name"
        type="text"
        name="user"
        placeholder="Ex: TTV yKriguer#6666"
        required
      />
      <button v-on:click="getUserMatchs" id="submit">Status</button>
    </form>
  </header>
  <div class="preloader loading">
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
  </div>
</template>

<script>
export default {
  name: "header-page",
  data() {
    const usuario = this.$store.state.usuario;

    return {
      name:
        usuario.name != "" && usuario.tag != ""
          ? `${usuario.name}#${usuario.tag}`
          : "",
    };
  },
  methods: {
    async getUserMatchs(event) {
      event.preventDefault();

      let regxName = /.*(?=#)/gm;
      let regxTag = /#.*/gm;

      let name = this.name.match(regxName)[0];
      let tag = this.name.match(regxTag)[0].slice(1);

      localStorage.user = JSON.stringify({ name, tag });

      await this.$store.commit("setUser", { name, tag });
      await this.$store.dispatch("getMatchs");
      await this.$store.dispatch("setMatches");
    },
  },
};
</script>

<style scoped>
header {
  font-family: Valorant, sans-serif;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  background-color: #fd4556;
  position: sticky;
  flex-flow: wrap;
  padding-bottom: 11px;
}
.userdata input {
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 2px solid #d1787f;
  padding: 10px;
  background-color: #d1787f;
  border-radius: 5px;
  outline: none;
  color: white;
  margin: 5px;
  height: 18px;
}
.logo img {
  position: relative;
  height: 50px;
  top: -5px;
}
.logo p {
  transform: translateX(-10px);
  line-height: 20px;
  margin: 0;
  max-width: 4ch;
  color: white;
  font-size: 25px;
  align-self: center;
}
.logo {
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
}
.userdata input::placeholder {
  color: white;
}
#submit:hover {
  filter: brightness(80%);
}
#submit {
  background-color: #fffbf5;
  color: #53212b;
  height: 40px;
  width: 90px;
  line-height: 8px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
.userdata {
  display: flex;
  align-items: center;
}

@keyframes preload-show-1 {
  from {
    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-hide-1 {
  to {
    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-cycle-1 {
  5% {
    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
  10%,
  75% {
    transform: rotateZ(60deg) rotateY(0) rotateX(0deg);
    border-left-color: #f7484e;
  }
  80%,
  100% {
    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-show-2 {
  from {
    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-hide-2 {
  to {
    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-cycle-2 {
  10% {
    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
  15%,
  70% {
    transform: rotateZ(120deg) rotateY(0) rotateX(0deg);
    border-left-color: #f7484e;
  }
  75%,
  100% {
    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-show-3 {
  from {
    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-hide-3 {
  to {
    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-cycle-3 {
  15% {
    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
  20%,
  65% {
    transform: rotateZ(180deg) rotateY(0) rotateX(0deg);
    border-left-color: #f7484e;
  }
  70%,
  100% {
    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-show-4 {
  from {
    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-hide-4 {
  to {
    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-cycle-4 {
  20% {
    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
  25%,
  60% {
    transform: rotateZ(240deg) rotateY(0) rotateX(0deg);
    border-left-color: #f7484e;
  }
  65%,
  100% {
    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-show-5 {
  from {
    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-hide-5 {
  to {
    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-cycle-5 {
  25% {
    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
  30%,
  55% {
    transform: rotateZ(300deg) rotateY(0) rotateX(0deg);
    border-left-color: #f7484e;
  }
  60%,
  100% {
    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-show-6 {
  from {
    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-hide-6 {
  to {
    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-cycle-6 {
  30% {
    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
  35%,
  50% {
    transform: rotateZ(360deg) rotateY(0) rotateX(0deg);
    border-left-color: #f7484e;
  }
  55%,
  100% {
    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);
    border-left-color: #9c2f2f;
  }
}
@keyframes preload-flip {
  0% {
    transform: rotateY(0deg) rotateZ(-60deg);
  }
  100% {
    transform: rotateY(360deg) rotateZ(-60deg);
  }
}
body {
  background: #efefef;
}
.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  display: block;
  width: 3.75em;
  height: 4.25em;
  margin-left: -1.875em;
  margin-top: -2.125em;
  transform-origin: center center;
  transform: rotateY(180deg) rotateZ(-60deg);
}
.preloader .slice {
  border-top: 1.125em solid transparent;
  border-right: none;
  border-bottom: 1em solid transparent;
  border-left: 1.875em solid #f7484e;
  position: absolute;
  top: 0px;
  left: 50%;
  transform-origin: left bottom;
  border-radius: 3px 3px 0 0;
}
.preloader .slice:nth-child(1) {
  transform: rotateZ(60deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.82s preload-hide-1 both 1;
}
.preloader .slice:nth-child(2) {
  transform: rotateZ(120deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.74s preload-hide-2 both 1;
}
.preloader .slice:nth-child(3) {
  transform: rotateZ(180deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.66s preload-hide-3 both 1;
}
.preloader .slice:nth-child(4) {
  transform: rotateZ(240deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.58s preload-hide-4 both 1;
}
.preloader .slice:nth-child(5) {
  transform: rotateZ(300deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.5s preload-hide-5 both 1;
}
.preloader .slice:nth-child(6) {
  transform: rotateZ(360deg) rotateY(0deg) rotateX(0);
  animation: 0.15s linear 0.42s preload-hide-6 both 1;
}
.preloader.loading {
  animation: 2s preload-flip steps(2) infinite both;
}
.preloader.loading .slice:nth-child(1) {
  transform: rotateZ(60deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-1 linear infinite both;
}
.preloader.loading .slice:nth-child(2) {
  transform: rotateZ(120deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-2 linear infinite both;
}
.preloader.loading .slice:nth-child(3) {
  transform: rotateZ(180deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-3 linear infinite both;
}
.preloader.loading .slice:nth-child(4) {
  transform: rotateZ(240deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-4 linear infinite both;
}
.preloader.loading .slice:nth-child(5) {
  transform: rotateZ(300deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-5 linear infinite both;
}
.preloader.loading .slice:nth-child(6) {
  transform: rotateZ(360deg) rotateY(90deg) rotateX(0);
  animation: 2s preload-cycle-6 linear infinite both;
}
.preloader.loading {
  display: none;
}
@media (max-width: 670px) {
  .logo {
    margin: 10px;
  }
  header {
    justify-content: center;
  }
}
</style>
