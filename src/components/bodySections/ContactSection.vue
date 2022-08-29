<template>
  <div class="sectionContainer" id="contact">
    <h2>Fale Conosco</h2>
    <div class="textContainer">
      <p>
        Entre em contato conosco pelo Whatsapp ou Instagram para fazer o seu
        orçamento.
      </p>
      <p>
        Nossa equipe está sempre pronta para te atender com projetos exclusivos
        e com prazo de entrega de até 90 dias
      </p>
      <p>
        Aceitamos pagamento em até 10x no cartão, ou à vista com 10% de desconto
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
        Estamos localizados na Rua Comendador Custodio Vieira, 204, no centro de
        Lorena, SP. Também atendemos no Vale do Paraíba e em toda a capital
        Paulista.
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@media screen and (max-width: 1400px) {
  .sectionContainer {
    height: clamp(39rem, 29.65rem + 42vw, 66rem);
  }

  .mapContainer {
    width: clamp(18rem, 13.85rem + 18vw, 30rem);
    top: clamp(6rem, 2.88rem + 14vw, 15rem);
    left: clamp(1.6rem, -4.95rem + 29vw, 30rem);
  }

  .mapLimiter {
    width: clamp(18rem, 15.58rem + 11vw, 25rem);
  }
}

@media screen and (min-width: 1401px) {
  .sectionContainer {
    height: 100vh;
  }

  .mapContainer {
    width: 25rem;
    top: -7rem;
    left: clamp(55rem, 28.08rem + 31vw, 65rem);
  }

  .mapLimiter {
    width: 25rem;
  }
}

.sectionContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  background-color: #ddcdbb;
  width: 100vw;
}

h2 {
  position: relative;
  left: clamp(1.6rem, -4.95rem + 29vw, 30rem);
  top: clamp(4rem, 0.51rem + 14vw, 18rem);

  font-family: Storylona;
  font-size: clamp(1rem, 0.54rem + 2vw, 3rem);
  font-weight: 100;
  letter-spacing: 0.5rem;
  color: #f08c1a;

  cursor: default;
}

.textContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  text-align: justify;

  position: relative;
  left: clamp(1.6rem, -4.95rem + 29vw, 30rem);
  top: clamp(6rem, 2.77rem + 14vw, 20rem);
  width: clamp(18rem, 13.85rem + 18vw, 30rem);
}

.mapContainer {
  position: relative;
}

p {
  position: relative;
  color: #2b2d42;
  font-size: clamp(0.8rem, 0.62rem + 0.8vw, 1.6rem);
  cursor: default;
  margin-bottom: 1rem;
}

.mapLimiter {
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
  font-size: clamp(0.6rem, 0.51rem + 0.4vw, 1rem);
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
