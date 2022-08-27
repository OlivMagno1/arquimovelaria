<template>
  <div class="sectionContainer" id="projects">
    <h2 class="portfolioTitle">Nossos projetos</h2>
    <div class="zoomContainer">
      <Transition name="fade" appear>
        <img
          class="zoomedPhoto"
          :src="require(`@/assets/images/projects/${actual}.jpg`)"
        />
      </Transition>
    </div>
    <div class="portfolioContainer">
      <div
        v-for="(image, index) in portfolioData"
        :key="index"
        @click="actual = image"
      >
        <img
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
@media screen and (max-width: 800px) {
  .zoomContainer {
    align-self: center;
    height: 40vh;
  }

  .portfolioContainer {
    flex-flow: row nowrap;
    overflow-x: auto;
    height: 16vh;
    width: 73vw;
    top: 42vh;
  }

  .portfolioPhoto {
    max-width: 6rem;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }

  ::-webkit-scrollbar {
    border-radius: 0 0 7px 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0 0 7px 7px;
  }
}

@media screen and (min-width: 801px) and (max-width: 1000px) {
  .zoomContainer {
    left: clamp(1.6rem, -19.22rem + 41.6vw, 6.8rem);
    height: 50vh;
  }

  .portfolioContainer {
    flex-flow: row wrap;
    overflow-y: auto;
    height: 50vh;
    width: 21.6rem;
    left: 12.6rem;
    top: 1vh;
  }

  .portfolioPhoto {
    max-width: 9.6rem;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }

  ::-webkit-scrollbar {
    border-radius: 0 7px 7px 0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0 7px 7px 0;
  }
}

@media screen and (min-width: 1001px) {
  .zoomContainer {
    /*left: clamp(1.6rem, -26.89rem + 45.5vw, 26.4rem); */
    left: 20rem;
    height: 80vh;
  }

  .portfolioContainer {
    flex-flow: row wrap;
    overflow-y: auto;
    height: 80vh;
    width: 41.8rem;
    left: 60rem;
    top: 2rem;
  }

  .portfolioPhoto {
    max-width: 9.6rem;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }

  ::-webkit-scrollbar {
    border-radius: 0 7px 7px 0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0 7px 7px 0;
  }
}

.sectionContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  position: relative;
  background-color: #171412;
  height: 100vh;
  width: 100vw;
}

.zoomContainer {
  position: absolute;
  top: 9.7rem;
}

.portfolioContainer {
  display: flex;
  position: relative;
}

::-webkit-scrollbar {
  background-color: #0a0908;
}

::-webkit-scrollbar-thumb {
  background-color: #5e503f;
}

.zoomedPhoto {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

h2 {
  display: flex;
  align-items: flex-start;

  position: relative;
  margin-left: 1rem;
  height: 8vh;

  margin-top: 3rem;
  font-family: OpenSansItalic;
  color: #493e31;
  font-weight: 100;
  /*font-size: clamp(1.2rem, -0.4125rem + 3.5vw, 2.6rem); */
  font-size: 4rem;
}

.line {
  height: 3px;
  width: 30vw;
  margin-top: 8px;
  margin-left: 1rem;
  background-color: #631e03;
}

.portfolioPhoto {
  cursor: pointer;
  max-height: inherit;
  height: inherit;
  width: inherit;

  filter: opacity(0.5);
  transition: 0.2s;
  object-fit: cover;
}

.portfolioPhoto:hover {
  filter: opacity(1);
}
</style>
