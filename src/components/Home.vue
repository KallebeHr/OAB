<template>
  <section class="home-section">
    <div class="background-video-wrapper">
      <video
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        class="background-video"
      >
        <source src="/IMG-VIDEOS/Teste.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>

    <div class="home-content">
      <h1 class="titulo">LOGO</h1>
      <div class="separator"></div>
      <p class="subtitulo">Compromisso com seus direitos e resultados reais</p>

      <!-- Ícones com pontos fortes -->
      <div class="destaques">
        <div><i class="fa-solid fa-scale-balanced"></i> Ética</div>
        <div><i class="fa-solid fa-handshake-angle"></i> Compromisso</div>
        <div><i class="fa-solid fa-shield-halved"></i> Defesa justa</div>
      </div>

      <!-- Botão CTA -->
      <button class="btn-cta">Fale com um Advogado</button>

      <!-- Scroll Indicator -->
      <div class="scroll-down">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch((err) => {
      console.warn('Falha no autoplay:', err)
    })
  }
})
</script>

<style scoped>
.home-section {
  position: relative;
  width: 100%;
  height: 60vh;
  color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}

.background-video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.home-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 1rem;
  animation: fadeInUp 1s ease-out;
}

.titulo {
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

.separator {
  width: 80px;
  height: 4px;
  background-color: #fc1f1f;
  margin: 0 auto 2rem auto;
  border-radius: 2px;
}

.subtitulo {
  font-size: 1.4rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
}

/* Destaques com ícones */
.destaques {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
.destaques div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  backdrop-filter: blur(4px);
}

/* Botão CTA */
.btn-cta {
  background-color: #fc1f1f;
  font-weight: bold;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}
.btn-cta:hover {
  transform: scale(1.05);
}

.scroll-down {
  margin-top: 2.5rem;
  animation: bounce 1.5s infinite;
  font-size: 2rem;
  color: #fc1f1f;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
