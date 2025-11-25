<template>
  <section class="areas-section">
    <div class="container">
      
      <!-- Título da Seção -->
      <h2 class="section-title">Nossas Áreas de Especialidade no Direito</h2>
      <p class="section-subtitle">
        Conte com a nossa experiência para soluções jurídicas precisas e eficazes em diversos ramos.
      </p>

      <!-- Wrapper dos Cards de Área -->
      <div class="areas-wrapper">
        <div
          v-for="(area, index) in areas"
          :key="index"
          class="area-card"
        >
          <!-- Ícone da Área -->
          <div class="icone">
            <i :class="area.icone"></i>
          </div>
          
          <!-- Título e Descrição -->
          <h3 class="titulo-area">{{ area.titulo }}</h3>
          <p class="descricao">{{ area.descricao }}</p>
          
          <!-- Botão (com função placeholder) -->
          <a href="#" class="botao-link">
            <button class="botao">Saber Mais</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Definição das áreas de atuação com ícones Font Awesome 6
const areas = [
  {
    titulo: 'Direito Civil',
    descricao: 'Atuação em conflitos de família e sucessões, contratos, defesa do consumidor e ações de indenização.',
    // Ícone: Balança
    icone: 'fa-solid fa-scale-balanced', 
  },
  {
    titulo: 'Direito Trabalhista',
    descricao: 'Assessoria completa em relações de trabalho, defendendo os direitos tanto do empregador quanto do empregado.',
    // Ícone: Maleta de trabalho
    icone: 'fa-solid fa-briefcase',
  },
  {
    titulo: 'Direito Penal',
    descricao: 'Defesa e acompanhamento em inquéritos e processos criminais, garantindo o devido processo legal.',
    // Ícone: Martelo
    icone: 'fa-solid fa-gavel',
  },
  {
    titulo: 'Direito Empresarial',
    descricao: 'Assessoria jurídica estratégica para empresas, incluindo contratos, societário e recuperação judicial.',
    // Ícone: Prédio/Empresa
    icone: 'fa-solid fa-building',
  },
  {
    titulo: 'Direito Administrativo',
    descricao: 'Atuação em licitações, concursos públicos, processos administrativos e responsabilidade civil do Estado.',
    // Ícone: Tribunal / Justiça
    icone: 'fa-solid fa-landmark',
  },
  {
    titulo: 'Direito Tributário',
    descricao: 'Consultoria e contencioso em questões fiscais, planejamento tributário e defesa em execuções fiscais.',
    // Ícone: Impostos / Dinheiro
    icone: 'fa-solid fa-receipt',
  },
]
</script>

<style scoped>
/* =========================================
   🎨 VARIÁVEIS LOCAIS E IMPORTS
   ========================================= */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.areas-section {
  --primary-color: #e4002b; /* Vermelho - Destaque */
  --secondary-color: #002b45; /* Azul Escuro - Texto principal */
  --bg-color: #f0f2f5; /* Fundo mais suave */
  padding: 4rem 1.5rem;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

/* =========================================
   📝 TÍTULOS
   ========================================= */
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
  margin-bottom: 3rem;
}

/* =========================================
   🧱 CARDS
   ========================================= */
.areas-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.area-card {
  background: white;
  border-radius: 15px;
  padding: 35px 25px;
  flex: 1 1 280px; /* Ajustado para 3 colunas em desktop, 2 em tablet */
  max-width: 350px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 5px solid var(--secondary-color); /* Borda de cor secundária */
}

.area-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-bottom-color: var(--primary-color); /* Destaque na cor primária */
}

.icone {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(228, 0, 43, 0.1); /* Anel de destaque */
}

.titulo-area {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.descricao {
  font-size: 1rem;
  color: #555;
  margin-bottom: 25px;
  text-align: center;
  flex-grow: 1; /* Garante que todos os cards tenham a mesma altura visualmente */
}

/* =========================================
   ▶️ BOTÃO
   ========================================= */
.botao-link {
    text-decoration: none;
    width: 100%;
    max-width: 180px;
}

.botao {
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  width: 100%;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.botao:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
}

/* =========================================
   📱 RESPONSIVIDADE
   ========================================= */
@media (max-width: 768px) {
  .areas-wrapper {
    gap: 20px;
  }
  .area-card {
    flex: 1 1 45%;
    max-width: 45%;
  }
}

@media (max-width: 600px) {
  .area-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>