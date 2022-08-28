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
  height: 100vh;
  background-color: #ddcdbb;
}

h2 {
  position: absolute;
  left: 30rem;
  top: 18rem;

  font-family: Storylona;
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 0.5rem;
  color: #f08c1a;

  cursor: default;
}

.textContainer {
  position: relative;
  left: 30rem;
  top: 24rem;
  width: 48rem;
}

p {
  font-family: OpenSans;
  color: #2b2d42;
  font-size: 1.6rem;
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
