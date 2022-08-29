<template>
  <div class="sectionContainer" id="intro">
    <h2>QUEM SOMOS</h2>
    <div class="textContainer">
      <p>
        A <span>ArquiMovelaria</span> é uma empresa formada por arquitetos
        prontos para tornar seus sonhos realidade, trazendo através dos móveis
        planejados o conforto e a funcionalidade que o seu lar precisa.
      </p>
      <p>
        Sempre buscando a beleza, qualidade e satisfação, nossos projetos são
        exclusivos para você.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionSection",
};
</script>

<style scoped>
.sectionContainer {
  position: relative;
  height: clamp(26rem, 17.15rem + 35vw, 59rem);
  background-color: #ddcdbb;
}

h2 {
  position: absolute;
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
  position: relative;
  left: clamp(1.6rem, -4.95rem + 29vw, 30rem);
  top: clamp(6rem, 1.85rem + 18.5vw, 24rem);
  width: clamp(18rem, 11.07rem + 31vw, 48rem);
}

p {
  font-family: OpenSans;
  color: #2b2d42;
  font-size: clamp(0.8rem, 0.62rem + 0.8vw, 1.6rem);
  font-weight: 100;
  text-align: left;

  margin-bottom: 1.4rem;
  cursor: default;
}
span {
  font-weight: 400;
  color: #625834;
}
</style>
