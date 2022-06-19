<template>
  <main class="main" wire:ignore>
    <div id="background"></div>

    <div class="bodystats" id="statsbody">
      <div class="principal"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "body-page",
};
</script>

<style>
.kd {
  min-width: 40px;
  text-align: center;
  border-radius: 5px;
  background: #00000020;
  margin: 0 10px !important; 
  padding: 0 5px;
}
.kd,
.jogadores,
.kd > span {
  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  max-width: 88px;
  word-break: break-all;
}
.kills {
  color: #6e00ff;
}
.deaths {
  color: #993c78;
}
.assists {
  color: #fff;
}
.containerBlue div,
.containerRed div,
.containerNeutro div {
  display: flex;
  align-items: center;
}
.matchdata .status img {
  height: 30px;
  z-index: 30;
}
.containerBlue {
  height: 45px;
  display: flex;
  width: 100%;
  font-size: 10px;
  justify-content: space-between;
  background-color: #0080ff63;
  margin: 2px 3px;
  align-items: center;
  padding: 0px 0px;
  border-radius: 8px;
}
.matchdata .data {
  width: 50%;
  display: flex;
  flex-flow: column;
}
.info svg {
  height: 28px;
  width: 28px;
}
.info {
  display: flex;
  flex-flow: row;
  align-self: left;
  margin: 10px;
}
.info p {
  align-self: center;
}
.fixed:hover {
  filter: brightness(80%);
}
.girinho {
  position: absolute;
  top: 0;
  right: 10px;
  margin: 10px;
  transition: transform 0.6s ease-in-out;
  transform: rotate(180deg);
}
.containerNeutro {
  height: 45px;
  display: flex;
  width: 48%;
  font-size: 10px;
  justify-content: space-between;
  background-color: #0080ff63;
  margin: 5px 0px;
  align-items: center;
  padding: 0px 0px;
  border-radius: 8px;
  flex-flow: row wrap;
}
.containerNeutro img {
  height: 30px;
  border-radius: 8px;
  margin-left: 15px;
}
.playersNeutral {
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 0px 0px;
}
.containerRed {
  height: 45px;
  display: flex;
  width: 100%;
  font-size: 10px;
  background-color: #cb798082;
  justify-content: space-between;
  margin: 5px 0px;
  padding: 0px 0px;
  align-items: center;
  border-radius: 8px;
}
.containerBlue img,
.containerRed img {
  height: 30px;
  border-radius: 8px;
  margin-left: 15px;
}
.playersRed {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  background-color: #fd45578e;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px 0px;
}
.playersBlue {
  border-radius: 10px 0px 0px 10px;
  width: 50%;
  background-color: rgba(0, 255, 255, 0.582);
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px 0px;
}
.playersList {
  border: 3px solid #0e1822;
  border-radius: 15px;
  margin: 10px;
  width: 100%;
  display: flex;
  flex-flow: row;
}
.status {
  width: 49%;
}
.fixed .duracao {
  color: #6a2a33;
  top: 70px;
  position: absolute;
  font-size: 20px;
  right: 0;
  text-align: right;
  padding-right: 10px;
}
.fixed .mapa {
  text-align: right;
  padding-right: 10px;
  position: absolute;
  top: 49px;
  font-size: 20px;
  right: 0;
}
.bodystats h1 {
  width: 100%;
  top: 135px;
  color: white;
  text-align: center;
  z-index: 10;
}
.matchdata {
  cursor: text;
  display: flex;
  width: 100%;
  max-height: 0;
  background-color: white;
  transition: max-height 0.6s ease-in-out;
  overflow: hidden;
  flex-flow: row wrap;
  margin-top: 10px;
  justify-content: center;
}
.matchdata p {
  top: 20px;
  margin: 2px 3px;
}
* {
  font-family: Valorant, sans-serif;
}
.teste {
  display: flex;
  flex-flow: column;
}
.agentimage {
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: -20px;
  z-index: 70;
  top: 0;
  width: 300px;
  transform: skew(20deg);
}
.agentimage img {
  height: 120px;
}
main {
  display: flex;
  align-items: center;
  min-height: 85vh;
  justify-content: center;
  padding: 20px 20px;
}
#background {
  background-image: url(../images/background.jpg);
  background-size: cover;
  background-repeat: repeat-y;
  background-position: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: -1;
}
.principal {
  display: none;
  min-width: 49%;
  flex-flow: wrap;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: #0d1822ad;
  width: 98%;
  padding: 50px 20px 90px 20px;
}
.fixed {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fd4557;
  min-height: 120px;
  width: 100%;
  overflow: hidden;
  flex-flow: column;
  box-shadow: 0 0 10px 0 #0e1822, 10px 10px 0 0 #0e1822;
}
.vermais.selected .girinho {
  transform: rotate(0deg);
}
.vermais {
  cursor: pointer;
  position: relative;
  transform: skew(-20deg);
  height: 100%;
  width: 90%;
  max-width: 550px;
  margin: 20px 0px;
  transition: box-shadow 0.6s ease-out, max-height 0.6s ease-out;
  margin: 30px 30px;
}
.vermais.selected {
  box-shadow: 0 0 10px 0 #0e1822, 10px 10px 0 0 #0e1822;
  max-height: 729px;
}
.vermais.selected,
.vermais.selected .agentimage {
  transform: skew(0deg);
}
.vermais,
.agentimage {
  transition: transform 0.3s ease-in-out;
}
.vermais.selected .matchdata {
  max-height: 670px;
}
.vermais.selected .fixed {
  box-shadow: 0 0 10px 0 #0e1822, 0px 10px 0 0 #0e1822;
}
.fixed h2 {
  position: absolute;
  top: -10px;
  left: 95px;
  list-style: none;
  color: black;
  text-decoration: none;
}
.fixed p {
  position: absolute;
  top: 18px;
  left: 100px;
  list-style: none;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.fixed .result {
  top: 15px;
  left: 110px;
  font-size: 50px;
}
.hl {
  border-top: 4px solid black;
  width: 80%;
  transform: translateX(40px);
}
.bodystats {
  display: none;
  width: 100%;
  flex-flow: column;
  align-items: center;
}
.info.mobile {
  display: none;
}
@media (max-width: 670px) {
  .mapa,
  .duracao {
    display: none;
  }
  .info.mobile {
    display: flex;
  }
  .info {
    flex-flow: column;
    align-items: center;
  }
  .info p {
    text-align: center;
  }
  .vermais.selected .matchdata {
    max-height: 1140px;
  }
  .vermais.selected {
    max-height: 1200px;
  }
  .playersBlue,
  .playersRed,
  .playersNeutral {
    width: 100%;
  }
  .containerRed,
  .containerBlue,
  .containerNeutro {
    width: 100%;
    font-size: 15px;
  }
  .playersList {
    flex-flow: column;
  }
}
</style>