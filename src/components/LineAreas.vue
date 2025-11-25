<template>
  <div class="noticias-wrapper">
    <div class="line-container">
      <div class="line blue"></div>
      <div class="line red"></div>
    </div>
    <h2 class="title">ÁREAS DE ATUAÇÃO</h2>
    <div class="line-container">
      <div class="line blue"></div>
      <div class="line red"></div>
    </div>
  </div>
</template>

<style scoped>
.noticias-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 20px 0;
  gap: 20px;
}

.line-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.line {
  min-width: 100px;
  height: 4px;
  margin: 2px 0;
  border-radius: 2px;
}

.blue {
  background-color: #0d3c55; /* azul escuro */
}

.red {
  background-color: #d73027; /* vermelho */
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #d73027;
  margin: 0 10px;
}
</style>
