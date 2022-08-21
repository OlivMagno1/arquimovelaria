<template>
  <div class="menuContainer">
    <h1>Arquimovelaria</h1>
    <button>hambMenu</button>
  </div>
</template>

<script>
export default {
  name: "MenuStructure",
};
</script>

<style scoped>
.menuContainer {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 8vh;
}

h1 {
  margin: 0 3rem;
  color: #fff;

  cursor: pointer;
  font-weight: 100;
}

button {
  background-color: rgba(0, 0, 0, 0);

  border: 0px;
  cursor: pointer;
  margin: 0 3rem;
}
</style>
