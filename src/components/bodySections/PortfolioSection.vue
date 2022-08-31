<template>
  <div class="sectionContainer" id="projects">
    <h2>Nossos projetos</h2>
    <div class="zoomContainer">
      <img
        class="zoomedPhoto"
        :src="require(`@/assets/images/projects/${actual}.jpg`)"
      />
    </div>
    <div class="portfolioContainer">
      <div
        v-for="(image, index) in portfolioData"
        :key="index"
        @click="actual = image"
      >
        <img
          title="Clique para ver a imagem ampliada"
          class="portfolioPhoto"
          :src="require(`@/assets/images/projects/${image}.jpg`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ProjetosView",
  setup() {
    //Get number of images in folder
    const length = require
      .context("@/assets/images/projects/", false, /\.jpg$/)
      .keys().length;

    //Populate array
    const portfolioData = [];
    for (let i = 1; i <= length; i++) {
      portfolioData[i - 1] = "proj" + i;
    }

    const actual = ref("proj1");
    return { actual, portfolioData };
  },
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  h2 {
    top: 6rem;
  }

  .zoomContainer {
    align-self: center;
    height: 22.5rem;
  }

  .portfolioContainer {
    flex-flow: row nowrap;
    overflow-x: auto;
    height: 9.3rem;
    width: clamp(18rem, 13.9rem + 18.25vw, 25.3rem);

    left: clamp(1.6rem, -2.88rem + 19.9vw, 21rem);
    top: clamp(32.5rem, 27.43rem + 22.5vw, 41.5rem);
  }

  .portfolioPhoto {
    max-width: 6rem;
  }
}

@media screen and (min-width: 1001px) and (max-width: 1200px) {
  h2 {
    top: 6rem;
  }

  .portfolioContainer {
    flex-flow: row wrap;
    overflow-y: auto;
    width: 20rem;
    height: clamp(22.5rem, 17.3rem + 23vw, 45rem);

    top: 9rem;
    left: clamp(36rem, 9.86rem + 42vw, 60rem);
  }

  .portfolioPhoto {
    max-width: 9rem;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1400px) {
  h2 {
    top: 4.5rem;
  }

  .portfolioContainer {
    flex-flow: row wrap;
    overflow-y: auto;
    width: 29.8rem;
    height: clamp(22.5rem, 17.3rem + 23vw, 45rem);

    top: 9rem;
    left: clamp(36rem, 9.86rem + 42vw, 60rem);
  }

  .portfolioPhoto {
    max-width: 9rem;
  }
}

@media screen and (min-width: 1401px) {
  h2 {
    top: 3rem;
  }

  .portfolioContainer {
    flex-flow: row wrap;
    overflow-y: auto;
    width: 39.2rem;
    height: clamp(22.5rem, 17.3rem + 23vw, 45rem);

    top: 9rem;
    left: clamp(36rem, 9.86rem + 42vw, 60rem);
  }

  .portfolioPhoto {
    max-width: 9rem;
  }
}

.sectionContainer {
  position: relative;
  background-color: #eae0d5;
  height: clamp(50rem, 47.93rem + 9vw, 59rem);
  width: 100vw;
}

h2 {
  position: absolute;
  left: clamp(1.6rem, -4.95rem + 29vw, 30rem);

  font-family: Storylona;
  font-size: clamp(1rem, 0.54rem + 2vw, 3rem);
  font-weight: 100;
  letter-spacing: 0.5rem;
  color: #f08c1a;

  cursor: default;
}

.zoomContainer {
  position: absolute;
  left: clamp(1.6rem, -2.88rem + 19.9vw, 21rem);
  top: 9rem;

  height: clamp(22.5rem, 17.3rem + 23vw, 45rem);
}

.portfolioContainer {
  display: flex;
  position: relative;
}

.zoomedPhoto {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

.portfolioPhoto {
  cursor: pointer;
  max-height: inherit;
  height: inherit;
  width: inherit;

  margin: 0 0.3rem 0.3rem 0.3rem;
  filter: opacity(0.5);
  transition: 0.2s;
  object-fit: cover;
}

.portfolioPhoto:hover {
  filter: opacity(1);
}

::-webkit-scrollbar {
  background-color: #cfb8a0;
}

::-webkit-scrollbar-thumb {
  background-color: #2b2d42;
  border-radius: 7px;
}
</style>
