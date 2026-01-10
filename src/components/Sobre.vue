<template>
  <section class="sobre-section" id="sobre">
    <div class="container">
      
      <!-- Cabeçalho da Seção (Entra suavemente) -->
      <div class="header-content reveal">
        <h2 class="titulo">Sobre o Escritório</h2>
        <div class="separator"></div>
        <p class="intro">
          Conheça os princípios que nos tornam referência em advocacia personalizada e eficiente:
        </p>
      </div>

      <!-- Grid de Cards -->
      <div class="cards-grid">
        <div 
          class="card reveal" 
          v-for="(item, index) in cards" 
          :key="index"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="icon-wrapper">
            <i :class="item.icon"></i>
          </div>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const cards = [
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Ética Profissional',
    desc: 'Agimos com integridade absoluta e transparência total em cada etapa do seu processo jurídico.'
  },
  {
    icon: 'fa-solid fa-handshake-angle',
    title: 'Atendimento Humanizado',
    desc: 'Priorizamos a escuta ativa para entender a dor e a necessidade real de cada cliente.'
  },
  {
    icon: 'fa-solid fa-gavel',
    title: 'Especialização Jurídica',
    desc: 'Equipe em constante atualização técnica para lidar com casos complexos em diversas áreas.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Foco em Resultados',
    desc: 'Comprometimento com estratégias jurídicas eficazes que buscam fazer a diferença real.'
  }
];

// Lógica para animar os elementos quando aparecem na tela
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Opcional: Para de observar após animar uma vez
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.15 }); // Dispara quando 15% do elemento estiver visível

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* =========================================
   🎨 VARIÁVEIS LOCAIS
   ========================================= */
.sobre-section {
  --primary-color: #01C3FF;
  --secondary-color: #002b45;
  --bg-color: #f9f9f9;
  --card-bg: #ffffff;
  
  background-color: var(--bg-color);
  padding: 5rem 1.5rem; /* Espaçamento generoso */
  color: #333;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

/* =========================================
   📝 CABEÇALHO
   ========================================= */
.titulo {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  text-transform: uppercase;
}

.separator {
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.intro {
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 750px;
  margin: 0 auto 4rem;
  line-height: 1.6;
  color: #555;
}

/* =========================================
   🃏 CARDS GRID (AJUSTADO PARA 2x2)
   ========================================= */
.cards-grid {
  display: grid;
  /* Mobile First: 1 coluna por padrão */
  grid-template-columns: 1fr;
  gap: 2rem;
  
  /* Centraliza e limita a largura para não esticar demais */
  max-width: 900px; 
  margin: 0 auto;
  justify-items: center;
}

/* Em telas maiores (Tablet/Desktop), força 2 colunas exatas */
@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem; /* Espaço lateral maior entre colunas */
    row-gap: 3rem;    /* Espaço vertical maior */
  }
}

.card {
  background: var(--card-bg);
  border-radius: 16px; /* Bordas mais arredondadas */
  padding: 3rem 2rem; /* Mais respiro interno */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-bottom: 3px solid transparent;
  
  /* Layout Interno */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* Removemos max-width fixo pequeno para ele preencher a coluna do grid (limitado pelo max-width do container) */
  height: 100%; /* Garante altura igual se um texto for maior */
}

/* Efeito Hover no Card */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(228, 0, 43, 0.15);
  border-bottom: 3px solid var(--primary-color);
}

/* =========================================
   ✨ ÍCONES
   ========================================= */
.icon-wrapper {
  background-color: rgba(228, 0, 43, 0.08); 
  color: var(--primary-color);
  
  width: 80px; /* Ícone levemente maior */
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  transition: all 0.4s ease;
}

.card:hover .icon-wrapper {
  background-color: var(--primary-color);
  color: white;
  transform: scale(1.1) rotate(5deg);
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.card-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  max-width: 300px; /* Garante que o texto não fique muito largo para leitura */
}

/* =========================================
   🎭 ANIMAÇÃO SCROLL REVEAL
   ========================================= */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
</style>