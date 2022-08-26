<template>
  <div class="sectionContainer" id="contact">
    <h2 class="contactTitle">Fale Conosco <span class="line" /></h2>
    <div class="splitSection">
      <div class="textContainer">
        <p class="textLeft">
          Entre em contato conosco pelo whatsapp ou instagram para fazer o seu
          orçamento
        </p>
        <p class="textLeft">Nossa equipe está pronta para te atender</p>
        <p class="textLeft">
          Projetos exclusivos para cada cliente, com prazo de entrega de até 90
          dias
        </p>
        <p class="textLeft">
          Pagamento em até 10x no cartão, ou à vista com 10% de desconto
        </p>
      </div>
      <div class="mapContainer">
        <div class="mapLimiter">
          <h4>Abrir mapa</h4>
          <img src="@/assets/images/map.png" />
        </div>
        <p class="textRight">
          Estamos localizados na Rua Comendador Custodio Vieira, 204
        </p>
        <p class="textRight">Centro de Lorena, SP.</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.sectionContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  margin-top: 55vh;
  margin-bottom: 30vh;
}

.contactTitle {
  display: flex;
  align-items: center;

  position: relative;
  margin-left: clamp(1rem, -7.875rem + 35vw, 15rem);
  margin-right: clamp(1rem, -7.875rem + 35vw, 15rem);
  height: 8vh;

  margin-top: 1vh;
  color: #fca17d;
  font-weight: 100;
  font-size: clamp(1.2rem, -0.4125rem + 3.5vw, 2.6rem);
}

.line {
  height: 3px;
  width: 30vw;
  margin-top: 8px;
  margin-left: 1rem;
  background-color: #631e03;
}

.textLeft {
  color: #fff;
  font-size: clamp(0.7rem, 0.30625rem + 1.75vw, 1.4rem);
  margin: 1rem 4rem;
  cursor: default;
}

.textRight {
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: default;
  text-align: justify;
}

.splitSection {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100vw;
  margin-bottom: 8vh;
}

.textContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  text-align: justify;
  width: 40vw;
}

.mapContainer {
  width: 40vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

.mapLimiter {
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: 0.4s;
  cursor: pointer;
}
.mapLimiter:hover {
  filter: brightness(80%);
  -webkit-filter: brightness(80%);
}

h4 {
  position: absolute;
  opacity: 0;
  color: rgba(0, 0, 0, 0.4);
  font-size: 2rem;
}

.mapLimiter:hover h4 {
  opacity: 1;
}

img {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}
</style>
