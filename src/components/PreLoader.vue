<template>
  <div class='container'>
<!-- From Uiverse.io by Uncannypotato69 --> 
<div class="textWrapper">
  <p class="text">Dra. Carolaine Alves</p>
  <div class="invertbox"></div>
</div>


  </div>
</template>

<script setup>
</script>

<style scoped>
.container{
    display:flex;
    height: 98vh;
    justify-content: center;
    align-items: center;
    }
    /* From Uiverse.io by Subaashbala */ 
/* From Uiverse.io by Uncannypotato69 */ 
.textWrapper {
  height: fit-content;
  min-width: 3rem;
  width: fit-content;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.25ch;
  position: relative;
  z-index: 0;
  color: rgb(255, 0, 0);
}

.invertbox {
  position: absolute;
  height: 100%;
  aspect-ratio: 1/1;
  left: 0;
  top: 0;
  border-radius: 20%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: invert(10%);
  animation: move 2s ease-in-out infinite;
}

@keyframes move {
  50% {
    left: calc(100% - 3rem);
  }
}

</style>