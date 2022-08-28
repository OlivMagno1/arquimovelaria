<template>
  <MenuStructure />
  <router-view />
</template>

<script>
import MenuStructure from "./components/menu/MenuStructure.vue";

export default {
  name: "App",
  components: {
    MenuStructure,
  },
};
</script>

<style>
@font-face {
  src: url(@/assets/fonts/Allegro.otf);

  font-family: "Allegro";
  font-weight: 400;
}

@font-face {
  src: url(@/assets/fonts/Athene.otf);

  font-family: "Athene";
  font-weight: 400;
}

@font-face {
  src: url(@/assets/fonts/Ginerin.otf);

  font-family: "Ginerin";
  font-weight: 400;
}

@font-face {
  src: url(@/assets/fonts/OpenSans-Light.ttf);

  font-family: "OpenSans";
  font-weight: 100;
}

@font-face {
  src: url(@/assets/fonts/OpenSans-Regular.ttf);

  font-family: "OpenSans";
  font-weight: 400;
}

@font-face {
  src: url(@/assets/fonts/OpenSans-Bold.ttf);

  font-family: "OpenSans";
  font-weight: 600;
}

@font-face {
  src: url(@/assets/fonts/Quentin.otf);

  font-family: "Quentin";
  font-weight: 400;
}

@font-face {
  src: url(@/assets/fonts/Mojito.otf);

  font-family: "Mojito";
  font-weight: 400;
}

@font-face {
  src: url(@/assets/fonts/Storylona.otf);

  font-family: "Storylona";
  font-weight: 400;
}

* {
  margin: 0;
  max-width: 100%;
}
#app {
  font-family: OpenSans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

::-webkit-scrollbar {
  background-color: #cfb8a0;
  width: 0.75rem;
}

::-webkit-scrollbar-thumb {
  background-color: #2b2d42;
  border-radius: 7px;
}
</style>
