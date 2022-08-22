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
  src: url(@/assets/fonts/OpenSans-Semibold.ttf);

  font-family: "OpenSans";
  font-weight: 500;
}

@font-face {
  src: url(@/assets/fonts/OpenSans-Bold.ttf);

  font-family: "OpenSans";
  font-weight: 600;
}

@font-face {
  src: url(@/assets/fonts/OpenSans-ExtraBold.ttf);

  font-family: "OpenSans";
  font-weight: 700;
}

* {
  margin: 0;
}
#app {
  font-family: OpenSans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
