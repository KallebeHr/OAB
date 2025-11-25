<template>
  <section class="sobre-section">
    <div class="container">
      <h2 class="titulo">Sobre o Escritório</h2>
      <p class="intro">
        Conheça os princípios que nos tornam referência em advocacia personalizada e eficiente:
      </p>

      <div class="cards-grid">
        <div class="card" v-for="(item, index) in cards" :key="index">
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
const cards = [
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Ética Profissional',
    desc: 'Agimos com integridade e transparência em cada etapa do processo jurídico.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Atendimento Humanizado',
    desc: 'Priorizamos o cuidado e a escuta ativa para entender a real necessidade de cada cliente.'
  },
  {
    icon: 'fa-solid fa-gavel',
    title: 'Especialização Jurídica',
    desc: 'Equipe preparada e atualizada para lidar com casos complexos em diversas áreas do Direito.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Foco em Resultados',
    desc: 'Comprometimento com soluções eficazes que realmente fazem a diferença.'
  }
]
</script>

<style scoped>
.sobre-section {
  background-color: #f4f4f4;
  padding: 2rem 2rem;
  color: #1a1a1a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.titulo {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.intro {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  background-color: #fc1f1f;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.6rem;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.card-desc {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}
</style>
