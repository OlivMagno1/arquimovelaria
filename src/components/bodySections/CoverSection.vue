<template>
  <div class="sectionContainer" id="cover">
    <img class="logo" src="@/assets/images/logo.png" />
    <h1 class="title">Móveis Planejados</h1>
    <div class="textContainer">
      <Transition name="slide-fade">
        <h2 v-show="turn == 1" :key="1">Modernidade</h2>
      </Transition>
      <Transition name="slide-fade">
        <h2 v-show="turn == 2" :key="2">Conforto</h2>
      </Transition>
      <Transition name="slide-fade">
        <h2 v-show="turn == 3" :key="3">Qualidade</h2>
      </Transition>
      <Transition name="slide-fade">
        <h2 v-show="turn == 4" :key="4">100% MDF</h2>
      </Transition>
    </div>
  </div>
  <div class="blurredBackground" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "CoverSection",
  setup() {
    const turn = ref(1);
    const timeOutDuration = ref(5000);

    const nextQuality = () => {
      if (turn.value === 4) {
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
@media screen and (max-width: 1000px) {
  .textContainer {
    width: 80vw;
  }

  .logo {
    right: 2rem;
  }

  h1 {
    left: clamp(1rem, -5.75rem + 30vw, 13rem);
  }

  h2 {
    left: clamp(5rem, 0.5rem + 20vw, 13rem);
  }
}

@media screen and (min-width: 1001px) {
  .logo {
    left: 2rem;
  }
  .textContainer {
    width: 36rem;
  }
}

.sectionContainer {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: clamp(18rem, 8.54rem + 43vw, 59rem);
}

.logo {
  position: absolute;
  bottom: 1rem;

  height: auto;
  width: clamp(7rem, 4rem + 13vw, 20rem);
}

.textContainer {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

h1 {
  position: absolute;
  top: clamp(6rem, 5.54rem + 2vw, 8rem);
  font-family: Quentin;
  font-size: clamp(2.5rem, 1rem + 6.7vw, 9rem);
  font-weight: 100;
  color: #eae0d5;
  cursor: default;
}

h2 {
  position: absolute;
  top: clamp(10rem, 5.62rem + 19vw, 29rem);
  font-family: Ginerin;
  font-size: clamp(0.8rem, 0.07rem + 3.2vw, 4rem);
  letter-spacing: 0.3rem;
  font-weight: 400;
  cursor: default;
  color: #f08c1a;
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
  transform: translate(-4rem, -2rem);
  opacity: 0;
}

.slide-fade-leave-to {
  filter: blur(5px);
  transform: translate(4rem, -2rem);
  opacity: 0;
}

.blurredBackground {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  background-image: linear-gradient(
      to bottom,
      rgba(94, 80, 63, 0.52),
      rgba(10, 9, 8, 0.43)
    ),
    url("@/assets/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 45%;

  width: 100vw;
  height: clamp(18rem, 8.54rem + 43vw, 59rem);
}
</style>
