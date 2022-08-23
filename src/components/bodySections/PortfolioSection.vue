<template>
  <div class="sectionContainer" id="projects">
    <h2 class="portfolioTitle">Nossos projetos <span class="line" /></h2>
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
.sectionContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  height: 80vh;
  width: 100vw;
  margin: 10vh 0;
}

.zoomContainer {
  position: absolute;
  top: 10vh;
  left: 20vw;
  height: 60vh;
}

.portfolioContainer {
  display: flex;
  flex-flow: row wrap;
  position: relative;
  top: 1vh;
  left: 12vw;

  width: 28vw;
  height: 60vh;
  overflow-y: auto;
}

.zoomedPhoto {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

.portfolioTitle {
  display: flex;
  align-items: center;

  position: relative;
  width: 65vw;
  height: 8vh;

  margin-top: 1vh;
  color: #fca17d;
  font-weight: 100;
  font-size: 2.6rem;
}

.line {
  height: 3px;
  width: 44vw;
  margin-top: 8px;
  margin-left: 1rem;
  background-color: #fca17d;
}

.portfolioPhoto {
  cursor: pointer;
  max-width: 8vw;
  max-height: inherit;
  height: inherit;
  width: inherit;
  margin: 0 0.5vw 0.5vw 0.5vw;

  object-fit: cover;
}
</style>
