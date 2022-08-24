<template>
  <div class="sectionContainer">
    <div class="logoContainer">
      <img class="logo" src="@/assets/images/logo.png" />
      <p>
        ArquiMovelaria é uma empresa de Arquitetura e Movelaria, realizamos
        design e móveis sob encomenda.
      </p>
      <p>
        Localizados em X, atendemos à todo o Vale do Paraíba e Capital Paulista
      </p>
      <p>Todos os direitos reservados.</p>
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
        <button>
          <i class="fa-brands fa-facebook"></i>
          <div class="descriptionContainer">
            <a href="https://www.facebook.com" target="_blank">
              /ArquiMovelaria
            </a>
          </div>
        </button>
        <button>
          <i class="fa-brands fa-instagram"></i>
          <div class="descriptionContainer">
            <a href="https://www.instagram.com" target="_blank">
              /ArquiMovelaria
            </a>
          </div>
        </button>
        <button>
          <i class="fa-brands fa-whatsapp"></i>
          <div class="descriptionContainer">
            <a href="tel:+5512982250062">(12) 98225-0062</a>
            <a href="tel:+5512981132496">(12) 98113-2496</a>
          </div>
        </button>
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
.sectionContainer {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-top: 20vh;
  width: 100vw;
  height: 28vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.logoContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  text-align: justify;
  margin: 1.5rem;
  width: 25vw;
}

.logoContainer img {
  margin-bottom: 0.75rem;
}

h2 {
  color: #fca17d;
  margin-bottom: 0.5rem;
}

p {
  font-size: 0.85rem;
  color: #fff;
}

.columnContainer {
  margin: 2rem 1.5rem;
  width: 10vw;
  height: 12vw;
}

.linkContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
}

.linkContainer a {
  text-decoration: none;
  color: #fff;
  margin-bottom: 0.5rem;
}

.linkContainer i {
  font-size: 2rem;
  margin-right: 0.5rem;
  color: #fff;
}

.logo {
  height: auto;
  width: 15rem;
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
  color: #fff;
  font-size: 3rem;
}
</style>
