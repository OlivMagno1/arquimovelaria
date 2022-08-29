<template>
  <nav>
    <button @click="callParent">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <span class="separator" />
    <a href="#cover" @click="callParent" v-smooth-scroll>Início</a>
    <a href="#intro" @click="callParent" v-smooth-scroll>Quem somos</a>
    <a href="#projects" @click="callParent" v-smooth-scroll>Nossos Projetos</a>
    <a href="#contact" @click="callParent" v-smooth-scroll>Contato</a>
    <span class="separator" />
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

  position: fixed;
  right: 0;
  height: 100vh;
  width: 18rem;
  z-index: 100;

  background-color: #2b2d42;
}

button {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #2b2d42;
  color: #eae0d5;

  border: 0px;
  cursor: pointer;
  width: 18rem;
  height: 14vh;
  font-size: 1.6rem;
}

.separator {
  margin: 2rem 0;
  height: 1px;
  width: 14.4rem;
  background-color: #f08c1a;
}

button i {
  margin: 0 3rem;
}

nav a {
  text-decoration: none;
  font-weight: 400;
  color: #eae0d5;
  transition: 0.2s;

  font-size: 1rem;

  margin: 1.2rem 3rem;
  display: inline-block;
  position: relative;
}

nav a:hover {
  color: #f08c1a;
}

nav a:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #f08c1a;
  transform-origin: bottom right;
  transition: transform 0.15s ease-out;
}

nav a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

nav a.router-link-exact-active:after {
  background-color: #f08c1a;
}
</style>
