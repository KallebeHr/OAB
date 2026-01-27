<template>
  <section class="home-section" id="home">
    
    <!-- Wrapper do Vídeo com Overlay -->
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
      <!-- Camada escura para o texto brilhar -->
      <div class="video-overlay"></div>
    </div>

    <div class="home-content">
      
      <!-- Bloco de Texto Principal -->
      <div class="text-wrapper">
        <h1 class="titulo anim-item delay-1">
          JUSTIÇA <span class="highlight">EFICIENTE</span>
        </h1>
        
        <div class="separator anim-item delay-2"></div>
        
        <p class="subtitulo anim-item delay-3">
          Compromisso com seus direitos e resultados reais.
        </p>
      </div>
      <div class="destaques anim-item delay-4">
        <div class="card-glass">
          <i class="fa-solid fa-scale-balanced icon-red"></i> 
          <span>Ética</span>
        </div>
        <div class="card-glass">
          <i class="fa-solid fa-handshake-angle icon-red"></i> 
          <span>Compromisso</span>
        </div>
        <div class="card-glass">
          <i class="fa-solid fa-shield-halved icon-red"></i> 
          <span>Defesa Ágil</span>
        </div>
      </div>
      <div class="cta-wrapper anim-item delay-5">
        <button class="btn-cta">
          Fale com a  Dra. Dafne Dias.
          <i class="fa-brands fa-whatsapp ml-2"></i>
        </button>
      </div>
      <a href="#proxima-secao" class="scroll-down anim-item delay-6">
        <span class="scroll-text">Deslize</span>
        <i class="fa-solid fa-chevron-down bounce-icon"></i>
      </a>
    </div>
    
  </section>
  <Autoscroll />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)

onMounted(() => {
  // Garante autoplay mesmo em alguns navegadores que bloqueiam
  if (videoRef.value) {
    videoRef.value.play().catch((err) => {
      console.warn('Autoplay bloqueado pelo navegador (interação necessária):', err)
    })
  }
})
</script>

<style scoped>
/* =========================================
   🎨 CONFIGURAÇÕES GERAIS
   ========================================= */
:root {
  --primary-color: #e4002b;
  --dark-overlay: rgba(0, 43, 69, 0.65); /* Azul escuro semi-transparente */
}

.home-section {
  position: relative;
  width: 100%;
  /* AJUSTE: Calcula a altura total menos o header (aprox 80px) */
  min-height: calc(100vh - 80px);
  /* AJUSTE: Altura mínima reduzida para telas menores não ficarem com muito espaço vazio */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  color: white;
  padding: 2rem 1rem; /* Padding seguro nas bordas */
}

/* =========================================
   🎥 VÍDEO & OVERLAY
   ========================================= */
.background-video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Efeito sutil de zoom in ao carregar */
  animation: slowZoom 20s infinite alternate; 
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Gradiente elegante: escuro embaixo para ler, mais claro em cima */
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,20,40,0.9));
  z-index: 1;
}

/* =========================================
   📝 CONTEÚDO & TIPOGRAFIA
   ========================================= */
.home-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Garante que o conteúdo não cole nas bordas em telas muito baixas */
  justify-content: center; 
  margin-top: 2.5rem;
}

.titulo {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem); /* Fonte levemente reduzida */
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: 0.5rem; /* Margem reduzida */
  text-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

.highlight {
  color: #e4002b;
  position: relative;
  display: inline-block;
}

.separator {
  width: 0;
  height: 4px; /* Mais fino */
  background-color: #e4002b;
  margin: 0 auto 1.5rem auto; /* Margem reduzida */
  border-radius: 10px;
  animation: expandWidth 1s ease-out forwards;
}

.subtitulo {
  font-size: clamp(0.9rem, 1.8vw, 1.2rem);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto 2rem auto; /* Margem reduzida */
  color: #e0e0e0;
  line-height: 1.4;
}

/* =========================================
   💎 DESTAQUES (GLASSMORPHISM)
   ========================================= */
.destaques {
  display: flex;
  justify-content: center;
  gap: 1rem; /* Gap reduzido */
  flex-wrap: wrap;
  margin-bottom: 2rem; /* Margem reduzida */
}

.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.2rem; /* Padding interno reduzido */
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem; /* Fonte reduzida */
  transition: transform 0.3s, background 0.3s;
  cursor: default;
}

.card-glass:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.icon-red {
  color: #e4002b;
}

/* =========================================
   🔘 BOTÃO CTA
   ========================================= */
.btn-cta {
  background: #e4002b;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  padding: 0.9rem 2rem; /* Levemente menor */
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(228, 0, 43, 0.4);
}

.btn-cta:hover {
  transform: translateY(-3px) scale(1.02);
  background-color: #c40025;
  box-shadow: 0 10px 25px rgba(228, 0, 43, 0.6);
}

.ml-2 { margin-left: 10px; }

/* =========================================
   ⬇️ SCROLL INDICATOR (CORRIGIDO)
   ========================================= */
.scroll-down {
  /* CORREÇÃO: Removido position: absolute */
  /* Agora ele flui naturalmente após o botão */
  margin-top: 2.5rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s;
}

.scroll-down:hover {
  color: white;
}

.bounce-icon {
  font-size: 1.2rem;
  animation: bounce 2s infinite;
}

/* =========================================
   ✨ ANIMAÇÕES (KEYFRAMES)
   ========================================= */

/* Classe base para itens que vão animar */
.anim-item {
  opacity: 0;
  transform: translateY(20px); /* Movimento mais sutil */
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Delays para efeito cascata */
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.9s; }
.delay-5 { animation-delay: 1.1s; }
.delay-6 { animation-delay: 1.5s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandWidth {
  from { width: 0; opacity: 0; }
  to { width: 60px; opacity: 1; } /* Largura final ajustada */
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

/* =========================================
   📱 RESPONSIVIDADE
   ========================================= */
@media (max-width: 768px) {
  .home-section {
    min-height: auto; /* Deixa a altura livre no mobile */
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .destaques {
    flex-direction: column; /* Empilha ícones no mobile */
    width: 100%;
    max-width: 280px; /* Limita largura */
  }
  
  .card-glass {
    width: 100%;
    justify-content: center;
  }

  .titulo {
    font-size: 2rem; /* Garante tamanho legível em telas muito pequenas */
  }
}
</style>