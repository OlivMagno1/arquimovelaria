<template>
  <nav>
    <button @click="callParent">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <span />
    <router-link to="/">Quem somos</router-link>
    <router-link to="/projetos">Nossos projetos</router-link>
    <router-link to="/faleconosco">Fale Conosco</router-link>
    <span />
    <ButtonBar />
  </nav>
</template>

<script>
import ButtonBar from "./ButtonBar.vue";

export default {
  name: "CollapsableMenu",
  components: {
    ButtonBar,
  },
  setup(props, { emit }) {
    const callParent = () => {
      emit("invertShow");
    };

    return { callParent };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;

  position: absolute;
  right: 0;
  height: 100vh;
  width: 15vw;

  background-color: #000;
}

button {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);
  color: #fff;

  border: 0px;
  cursor: pointer;
  width: 15vw;
  height: 14vh;
  font-size: 1.6rem;
}

span {
  margin: 2rem 0;
  height: 1px;
  width: 12vw;
  background-color: #fff;
}

button i {
  margin: 0 3rem;
}

nav a {
  text-decoration: none;
  font-weight: 400;
  color: #fff;
  transition: 0.2s;

  margin: 1.2rem 3rem;
  display: inline-block;
  position: relative;
}

nav a:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.15s ease-out;
}

nav a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

nav a.router-link-exact-active {
  color: #fca17d;
}

nav a.router-link-exact-active:after {
  background-color: #fca17d;
}
</style>
