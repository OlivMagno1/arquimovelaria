<template>
  <div class="buttonContainer">
    <button>
      <i class="fa-brands fa-facebook"></i>
      <div class="descriptionContainer">
        <a href="https://www.facebook.com/arquimovelaria" target="_blank">
          /ArquiMovelaria
        </a>
      </div>
    </button>
    <button>
      <i class="fa-brands fa-instagram"></i>
      <div class="descriptionContainer">
        <a href="https://www.instagram.com/arquimovelaria/" target="_blank">
          /ArquiMovelaria
        </a>
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
  border: 0;
  margin: 0.5rem;

  transition: 0.2s;
}

button:hover {
  background-color: #f08c1a;
}

i {
  color: #eae0d5;
  font-size: 2rem;
}

a {
  color: #eae0d5;
  text-decoration: none;
}

button:hover i,
button:hover a {
  color: #625834;
}
</style>
