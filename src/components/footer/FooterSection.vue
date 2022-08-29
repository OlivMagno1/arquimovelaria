<template>
  <div class="sectionContainer" id="footer">
    <div class="logoContainer">
      <img class="logo" src="@/assets/images/logo.png" />
      <p class="description">
        ArquiMovelaria é uma empresa de Arquitetura e Movelaria, realizamos
        design e móveis sob encomenda.
      </p>
      <p class="description">
        Localizados no centro de Lorena, atendemos à todo o Vale do Paraíba e
        Capital Paulista.
      </p>
      <p class="description">Todos os direitos reservados.</p>
    </div>
    <div class="columnContainer">
      <h2>Navegação</h2>
      <div class="linkContainer">
        <a href="#intro" v-smooth-scroll>Quem somos</a>
        <a href="#projects" v-smooth-scroll>Nossos Projetos</a>
        <a href="#intro" v-smooth-scroll>Fale Conosco</a>
      </div>
    </div>
    <div class="columnContainer">
      <h2>Contato</h2>
      <div class="linkContainer">
        <a href="https://www.facebook.com/arquimovelaria" target="_blank">
          Facebook
        </a>
        <a href="https://www.instagram.com/arquimovelaria/" target="_blank">
          Instagram
        </a>
        <div class="phoneContainer">
          <p>(12) 98225-0062</p>
          <p>(12) 98113-2496</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .sectionContainer {
    flex-flow: column nowrap;
    height: 27rem;
  }

  .logoContainer {
    flex-flow: row wrap;
    width: 90vw;
  }

  .description {
    width: 78vw;
  }

  .columnContainer {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 90vw;
    margin: 0.5rem 0rem;
  }

  .columnContainer h2 {
    width: 18vw;
  }

  .linkContainer {
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 90vw;
  }
}

@media screen and (min-width: 1001px) {
  .sectionContainer {
    flex-flow: row nowrap;
    height: 20rem;
  }

  .logoContainer {
    flex-flow: column nowrap;
    width: 25vw;
  }

  .columnContainer {
    flex-flow: column nowrap;
    align-items: flex-start;
    width: 10vw;
    margin: 2rem 1.5rem;
    height: 12vw;
  }

  .linkContainer {
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .linkContainer a {
    margin-bottom: 0.5rem;
  }
}

.sectionContainer {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  background-color: #2b2d42;
}

.logoContainer {
  display: flex;
  align-items: flex-start;
  text-align: justify;
  margin: 1rem 1rem;
}

.logoContainer img {
  margin-bottom: 0.75rem;
}

h2 {
  color: #f08c1a;
  margin-bottom: 0.5rem;
  font-weight: 100;
  font-size: clamp(0.8rem, 0.52rem + 1.2vw, 1.6rem);
}

p {
  color: #eae0d5;
  cursor: default;
}

.description {
  font-size: clamp(0.6rem, 0.54rem + 0.25vw, 0.85rem);
}

.columnContainer {
  display: flex;
}

.linkContainer {
  display: flex;
}

.linkContainer a,
.phoneContainer p {
  text-decoration: none;
  font-size: clamp(0.8rem, 0.707rem + 0.4vw, 1.2rem);
  color: #eae0d5;
}

.logo {
  height: auto;
  width: clamp(8rem, 6.38rem + 7vw, 15rem);
  position: relative;
}

button {
  border: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 8vw;
  margin-bottom: 0.5rem;
  background-color: rgba(0, 0, 0, 0);
}

.descriptionContainer {
  display: flex;
  flex-flow: column nowrap;
}

button i {
  color: #eae0d5;
  font-size: 3rem;
}
</style>
