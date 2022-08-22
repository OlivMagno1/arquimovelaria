<template>
  <div class="collapsableMenuContainer">
    <nav>
      <router-link to="/">Quem somos</router-link>
      <router-link to="/projetos">Nossos projetos</router-link>
      <router-link to="/faleconosco">Fale Conosco</router-link>
      <button @click="callParent">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "CollapsableMenu",
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
  align-items: flex-start;

  position: relative;
  right: 0;
  top: 50vh;
  height: 110vh;
  width: 15vw;

  background-color: #000;
}

nav a {
  text-decoration: none;
  font-weight: 400;
  color: #fff;
  margin: 2rem 1rem;
  transition: 0.2s;

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
  color: #42b983;
}

nav a.router-link-exact-active:after {
  background-color: #42b983;
}
</style>
