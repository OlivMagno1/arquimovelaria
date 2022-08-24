<template>
  <div class="buttonContainer">
    <button>
      <i class="fa-brands fa-facebook"></i>
      <div class="descriptionContainer">
        <a href="https://www.facebook.com" target="_blank">/ArquiMovelaria</a>
      </div>
    </button>
    <button>
      <i class="fa-brands fa-instagram"></i>
      <div class="descriptionContainer">
        <a href="https://www.instagram.com" target="_blank">/ArquiMovelaria</a>
      </div>
    </button>
    <button>
      <i class="fa-brands fa-whatsapp"></i>
      <div class="descriptionContainer">
        <a href="tel:+5512982250062">(12) 98225-0062</a>
        <a href="tel:+5512981132496">(12) 98113-2496</a>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonBar",
};
</script>

<style scoped>
.buttonContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 3rem;

  height: 30vh;
}

.descriptionContainer {
  display: flex;
  flex-flow: column nowrap;
}

button {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 9.6rem;
  background-color: rgba(0, 0, 0, 0);

  transition: 0.2s;
}

button:hover {
  background-color: #fca17d;
}

i {
  color: #fff;
  font-size: 2rem;
}

a {
  color: #fff;
  text-decoration: none;
}

button:hover i,
button:hover a {
  color: #631e03;
}
</style>
