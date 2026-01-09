<template>
  <section class="equipe-section" id="equipe">
    <div class="container">
      
      <!-- Cabeçalho da Seção (Inclusão para consistência visual) -->
      <div class="header-content">
        <div class="line-container">
          <div class="line blue"></div>
          <div class="line red"></div>
        </div>
        <h2 class="titulo">Nossa Equipe</h2>
        <div class="line-container">
          <div class="line red"></div>
          <div class="line blue"></div>
        </div>
      </div>
      
      <p class="intro">
        Conheça os profissionais especializados que estão à frente dos seus casos e projetos.
      </p>

      <Swiper
        :modules="[Pagination, EffectCoverflow]"
        effect="coverflow"
        :coverflowEffect="coverflowConfig"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :breakpoints="swiperBreakpoints"
        :pagination="{ clickable: true }"
        class="swiper-custom"
        @slideChange="onSlideChange"
        @swiper="onSwiperInit"
      >
        <SwiperSlide
          v-for="(adv, index) in equipe"
          :key="index"
          class="slide-card"
          :class="{ ativo: index === activeIndex }"
        >
          <div class="card">
            <div class="image">
              <img :src="adv.foto" :alt="adv.nome" loading="lazy" />
            </div>
            <div class="info">
              <h3 class="nome">{{ adv.nome }}</h3>
              <p class="cargo">{{ adv.cargo }}</p>
              <p class="descricao">{{ adv.descricao }}</p>
              <button class="btn-cta">Conversar</button>
              <div class="redes">
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Importação do Swiper (Assumindo que as bibliotecas estão disponíveis no ambiente Vue)
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // Novo CSS para o efeito Coverflow
import { Pagination, EffectCoverflow } from 'swiper/modules'; // Novo módulo EffectCoverflow

const EQUIPE_FOTOS = {
  azul: 'https://placehold.co/400x400/002b45/ffffff?text=ADVOGADO',
  vermelho: 'https://placehold.co/400x400/e4002b/ffffff?text=ADVOGADA'
};
const nomeadv = 'Dra. Adriana Juvina '
const equipe = [
  {
    nome: nomeadv,
    cargo: 'Advogada  | Previdenciário',
    descricao: 'Especialista em contencioso estratégico, com foco em resultados eficientes para o cliente.',
    foto: './IMGADV/1.png'
  },
  {
    nome: nomeadv,
    cargo: 'Advogada | Extrajudicial',
    descricao: 'Vasta experiência em negociações coletivas e defesas em ações complexas.',
     foto: './IMGADV/1.png'
  },
  {
    nome: nomeadv,
    cargo: 'Advogada | Família',
    descricao: 'Atuação sensível e técnica em questões de divórcio, inventário e guarda.',
     foto: './IMGADV/1.png'
  },
  {
    nome: nomeadv,
    cargo: 'Advogada | Previdenciário',
    descricao: 'Foco na prevenção de litígios e estruturação jurídica para startups e empresas.',
     foto: './IMGADV/1.png'
  },
  {
    nome: nomeadv,
    cargo: 'Advogada | especialista',
    descricao: 'Comprometimento com a excelência e atendimento humanizado em todas as etapas.',
     foto: './IMGADV/1.png'
  }
];

const swiperInstance = ref(null);
const activeIndex = ref(0);
const isMobile = ref(window.innerWidth <= 600);

// Configuração de breakpoints para o Swiper
const swiperBreakpoints = {
    // Mobile (0px e acima)
    0: {
        spaceBetween: 20,
    },
    // Desktop (601px e acima)
    601: {
        spaceBetween: 80,
    }
};

// Configuração dinâmica do efeito Coverflow baseada no tamanho da tela
const coverflowConfig = {
  rotate: isMobile.value ? 20 : 50, // Menos rotação no mobile
  stretch: 0,
  depth: isMobile.value ? 50 : 100, // Menos profundidade no mobile
  modifier: 1,
  slideShadows: true,
};

function handleResize() {
  isMobile.value = window.innerWidth <= 600;
  // O Swiper deve recalcular a configuração do Coverflow automaticamente com a alteração do estado.
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});


function onSwiperInit(swiper) {
  swiperInstance.value = swiper;
  activeIndex.value = swiper.realIndex;
}

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex;
}
</script>

<style scoped>
/* =========================================
    🎨 VARIÁVEIS LOCAIS E IMPORTS
    ========================================= */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.equipe-section {
  --primary-color: #e4002b;
  --secondary-color: #002b45;
  --bg-color: #f9f9f9; /* Mantendo o fundo claro */
  
  background-color: var(--bg-color);
  padding: 5rem 1.5rem;
  color: #333;
  overflow: hidden; /* Importante para o Swiper */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* =========================================
    📝 CABEÇALHO E INTRO (Reintroduzido)
    ========================================= */
.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1.5rem;
}

.line-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.line {
  min-width: 80px;
  height: 3px;
  border-radius: 2px;
}

.blue { background-color: var(--secondary-color); }
.red { background-color: var(--primary-color); }

.titulo {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
}

.intro {
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 750px;
  margin: 0 auto 4rem;
  line-height: 1.6;
  color: #555;
  text-align: center;
}

/* =========================================
    ➡️ SWIPER / CAROUSEL
    ========================================= */

.swiper-custom {
  padding-bottom: 4rem; /* Espaço para a paginação */
  padding-top: 1rem;
}

.slide-card {
  width: auto !important;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;
  opacity: 0.4;
  transform: scale(0.95);
}

.slide-card.ativo {
  opacity: 1;
  transform: scale(1); /* Posição central é 1.0 */
  transition: all 0.5s ease;
  z-index: 10;
}

/* =========================================
    🃏 CARD INTERNO
    ========================================= */

.card {
  position: relative;
  width: 350px; /* Largura um pouco maior para o card */
  background-color: transparent;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.image {
  width: 100%;
  height: 450px; /* Altura maior para a foto */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 5px solid var(--secondary-color);
  transition: all 0.5s ease;
}

.slide-card.ativo .image {
  border-color: var(--primary-color);
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

/* INFO BOX - CAIXA DE TEXTO */
.info {
  position: absolute;
  bottom: -35px;
  left: -35px;
  background-color: var(--bg-color); /* Fundo claro para o texto */
  color: #222;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  width: 240px;
  text-align: center;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  border-left: 5px solid var(--primary-color);
}


.slide-card.ativo .info {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.slide-card.ativo .image img {
  transform: scale(1.05);
}

.nome {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: 0.3rem;
}

.cargo {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-color); /* Usando primary color */
  margin-bottom: 0.6rem;
}

.descricao {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #444;
}

.btn-cta {
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
  padding: 0.6rem 2.5rem;
  margin: 10px 0 5px 0;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s;
}
.btn-cta:hover {
  transform: scale(1.03);
  background-color: var(--secondary-color);
}

.redes {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.8rem;
  color: var(--secondary-color);
  font-size: 1.1rem;
}
.redes i {
    cursor: pointer;
    transition: color 0.3s;
}
.redes i:hover {
    color: var(--primary-color);
}


/* =========================================
    📱 MEDIA QUERIES
    ========================================= */
@media (max-width: 600px) {
  /* CORREÇÃO CRÍTICA 1: Remover o padding horizontal da seção principal, deixando o Swiper gerir o espaço. */
  .equipe-section {
    padding: 5rem 0; /* Removido o padding horizontal */
  }

  /* CORREÇÃO CRÍTICA 2: Adicionar o padding horizontal diretamente ao contentor do Swiper. */
  .swiper-custom {
    /* Top, Right, Bottom, Left */
    padding: 1rem 1.5rem 4rem 1.5rem; /* Adicionado 1.5rem de padding horizontal ao Swiper */
  }

  /* CORREÇÃO CRÍTICA 3: Forçar largura menor do slide no mobile para auxiliar na centralização. */
  .slide-card {
    width: 75% !important; /* Usar apenas 75% da largura disponível */
  }

  /* Ajuste Fino do Card */
  .card {
    width: 100%; /* Ocupa toda a largura do slide-card (75%) */
    max-width: 300px;
  }
  
  /* Garantindo que o 'info' box se centralize abaixo do card no mobile */
  .info {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 90%;
    padding: 1rem;
    bottom: -50px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  }
  
  /* Ajustes do cabeçalho no mobile */
  .header-content {
      flex-direction: column;
      gap: 10px;
  }
  .line-container {
      min-width: 50px;
      display: none; 
  }
}

/* Estilo da Paginação do Swiper */
/* Usando o seletor global do Swiper para personalizar as bolinhas */
.swiper-custom:deep(.swiper-pagination-bullet) {
  background: var(--secondary-color);
  opacity: 0.5;
  transition: all 0.3s;
}

.swiper-custom:deep(.swiper-pagination-bullet-active) {
  background: var(--primary-color);
  opacity: 1;
  transform: scale(1.2);
}
</style>