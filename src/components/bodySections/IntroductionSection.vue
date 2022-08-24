<template>
  <div class="sectionContainer" id="intro">
    <img class="logo" src="@/assets/images/logo.png" />
    <div class="introContainer">
      <div class="textContainer rotate">
        <Transition name="slide-fade">
          <h2 v-show="turn == 1" :key="1">Modernidade</h2>
        </Transition>
        <Transition name="slide-fade">
          <h2 v-show="turn == 2" :key="2">Conforto</h2>
        </Transition>
        <Transition name="slide-fade">
          <h2 v-show="turn == 3" :key="3">Qualidade</h2>
        </Transition>
      </div>
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
import { ref } from "vue";
export default {
  name: "HomeView",
  data() {
    return {
      qualidades: ["Qualidade 1", "Qualidade 2", "Qualidade 3"],
    };
  },
  setup() {
    const turn = ref(1);
    const timeOutDuration = ref(5000);

    const nextQuality = () => {
      if (turn.value === 3) {
        turn.value = 1;
        return;
      }
      turn.value += 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextQuality();
      }, timeOutDuration.value);
    };

    autoPlay();

    return { turn, timeOutDuration, nextQuality, autoPlay };
  },
};
</script>

<style scoped>
.sectionContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo {
  height: auto;
  width: 15rem;
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;

  cursor: pointer;
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: space-evenly;
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
  width: 40vw;
}

.rotate {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

h2 {
  position: absolute;
  align-self: center;
  font-family: OpenSansItalic;
  font-size: 4rem;
  font-weight: 100;
  cursor: default;
  color: #fca17d;
}

.slide-fade-enter-active {
  transition: all 1s ease;
  transition-delay: 1.1;
}

.slide-fade-leave-active {
  transition: all 1s ease;
}

.slide-fade-enter-from {
  filter: blur(5px);
  transform: translateY(-4rem);
  opacity: 0;
}
.slide-fade-leave-to {
  filter: blur(5px);
  transform: translateY(4rem);
  opacity: 0;
}
</style>
