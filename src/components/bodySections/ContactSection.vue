<template>
  <div class="sectionContainer" id="contact">
    <div class="splitSection">
      <div class="textContainer">
        <h2>Fale Conosco</h2>
        <p>
          Entre em contato conosco pelo Whatsapp ou Instagram para fazer o seu
          orçamento.
        </p>
        <p>
          Nossa equipe está sempre pronta para te atender com projetos
          exclusivos e com prazo de entrega de até 90 dias
        </p>
        <p>
          Aceitamos pagamento em até 10x no cartão, ou à vista com 10% de
          desconto
        </p>
      </div>
      <div class="mapContainer">
        <a
          href="https://goo.gl/maps/1QyB3xnexRTM4e8X6"
          target="_blank"
          class="mapLimiter"
        >
          <h4>Abrir mapa</h4>
          <img src="@/assets/images/map.png" />
        </a>
        <p class="caption">
          Estamos localizados na Rua Comendador Custodio Vieira, 204, no centro
          de Lorena, SP. Também atendemos no Vale do Paraíba e em toda a capital
          Paulista.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@media screen and (max-width: 800px) {
  .splitSection {
    flex-flow: column nowrap;
  }

  .textContainer {
    width: 40vw;
  }
}

@media screen and (min-width: 801px) {
  .splitSection {
    flex-flow: row nowrap;
  }

  .textContainer {
    width: 40vw;
  }
}

.sectionContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  position: relative;
  background-color: #ddcdbb;
  width: 100vw;
  height: 100vh;
}

h2 {
  position: relative;

  font-family: Storylona;
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 0.5rem;
  margin-bottom: 3rem;
  color: #f08c1a;

  cursor: default;
}

.splitSection {
  position: relative;
  top: 18rem;
  left: 24rem;
  display: flex;
  justify-content: space-evenly;
}

.textContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  text-align: justify;
  width: 30rem;
  margin-right: 4rem;
}

.mapContainer {
  width: 25vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

p {
  position: relative;
  color: #2b2d42;
  font-size: 1.4rem;
  cursor: default;
  margin-bottom: 1rem;
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
  color: #631e03;
  font-size: 2rem;
}

.mapLimiter:hover h4 {
  opacity: 0.6;
}

.caption {
  font-size: 1rem;
  margin: 1rem 0;
  text-align: justify;
}

img {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}
</style>
