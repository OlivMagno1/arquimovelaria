<template>
  <div class="menuContainer">
    <h1>Arquimovelaria</h1>
    <button @click="changeShow">
      <i class="fa-solid fa-bars"></i>
    </button>
    <Transition name="slide">
      <CollapsableMenu @invertShow="changeShow" v-show="show" />
    </Transition>
    <div class="outsideMenu" @click="changeShow" v-if="show" />
  </div>
</template>

<script>
import CollapsableMenu from "./CollapsableMenu.vue";
export default {
  name: "MenuStructure",
  components: {
    CollapsableMenu,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.menuContainer {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;
  height: 8vh;
}

h1 {
  position: fixed;
  left: 3rem;
  color: #fff;

  cursor: pointer;
  font-weight: 100;
}

button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);
  color: #fff;

  border: 0px;
  cursor: pointer;
  margin: 0 3rem;
  font-size: 1.6rem;
}

.outsideMenu {
  position: absolute;
  top: 0;
  left: 0;

  width: 85vw;
  height: 100vh;
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20vw);
}
</style>
