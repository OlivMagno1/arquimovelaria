<template>
  <div class="websiteContainer">
    <div class="introContainer">
      <div class="textContainer">
        <p>
          Somos uma empresa formada por arquitetos prontos para tornar seus
          sonhos realidade, trazendo através dos móveis planejados o conforto e
          a funcionalidade que o seu lar precisa.
        </p>
        <p>Sempre buscando a beleza, qualidade e satisfação.</p>
        <p>Atendemos todo o vale do paraíba e capital.</p>
        <h3>PRODUTOS 100% MDF</h3>
      </div>
    </div>
  </div>
  <div class="blurredBackground" />
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.websiteContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.blurredBackground {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  background-image: url("@/assets/images/background.jpg");
  filter: blur(3px);
  -webkit-filter: blur(3px);
  transform: scale(1.1);
  background-size: cover;

  width: 100vw;
  height: 100vh;
}

.introContainer {
  background-color: rgba(0, 0, 0, 0.8);

  margin-top: 60vh;
  width: 100vw;
}

.textContainer {
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  text-align: justify;

  margin-left: 50vw;
  width: 40vw;
}

p {
  font-size: 1.4rem;
  margin: 0 1rem;
  cursor: default;
}

h3 {
  font-weight: 700;
  font-size: 2.2rem;
  margin: 0 1rem;
  cursor: default;
}
</style>
