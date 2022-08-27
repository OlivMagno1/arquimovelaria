<template>
  <div class="sectionContainer" id="intro">
    <h2>Quem somos nós</h2>
    <div class="textContainer">
      <p>
        Somos uma empresa formada por arquitetos prontos para tornar seus sonhos
        realidade, trazendo através dos móveis planejados o conforto e a
        funcionalidade que o seu lar precisa.
      </p>
      <p>Sempre buscando a beleza, qualidade e satisfação.</p>
      <p>Atendemos todo o vale do paraíba e capital.</p>
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  background-color: #0a0908;
}

h2 {
  display: flex;
  align-items: flex-start;

  position: relative;
  margin-left: 1rem;
  height: 8vh;

  margin-top: 3rem;
  font-family: OpenSansItalic;
  color: #5e503f;
  font-weight: 100;
  /*font-size: clamp(1.2rem, -0.4125rem + 3.5vw, 2.6rem); */
  font-size: 4rem;
}

.textContainer {
  margin-top: 20rem;
  width: 40vw;
}

p {
  color: #eae0d5;
  text-align: left;
  font-size: 2.2rem;
  font-weight: 100;
  font-family: OpenSansItalic;
  width: 40vw;
}
</style>
