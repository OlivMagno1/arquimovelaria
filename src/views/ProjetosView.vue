<template>
  <div class="websiteContainer">
    <div class="zoomContainer">
      <img
        class="zoomedPhoto"
        :src="require(`@/assets/images/projects/${actual}.jpg`)"
      />
    </div>
    <div class="portfolioContainer">
      <h2 class="portfolioTitle">Clique para ver alguns de nossos projetos</h2>
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
  <div class="blurredBackground" />
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
.websiteContainer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.zoomContainer {
  position: fixed;
  top: 20vh;
  left: 10vw;
  height: 76vh;
}

.zoomedPhoto {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

.portfolioContainer {
  position: relative;
  left: 10vw;
  display: flex;
  flex-flow: row wrap;
  width: 30vw;
  margin-top: 14vh;
}

.portfolioTitle {
  width: 50vw;
  height: 6vh;
  color: #fca17d;
  font-weight: 100;
}

.portfolioPhoto {
  cursor: pointer;
  max-width: 8vw;
  max-height: inherit;
  height: inherit;
  width: inherit;
  margin: 0 1vw 1vw 1vw;

  object-fit: cover;
}

.blurredBackground {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  background-color: #000;

  width: 100vw;
  height: 100vh;
}
</style>
