<template>
  <section class="areas-section">
    <div class="container">
      <div class="areas-wrapper">
        <div
          v-for="(area, index) in areas"
          :key="index"
          class="area-card"
        >
          <div class="icone">
            <i :class="area.icone"></i>
          </div>
          <h3 class="titulo-area">{{ area.titulo }}</h3>
          <p class="descricao">{{ area.descricao }}</p>
          <button class="botao">Saber mais</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const areas = [
  {
    titulo: 'Direito Civil',
    descricao: 'Atuação em conflitos familiares, contratos, indenizações e mais.',
    icone: 'fas fa-balance-scale',
  },
  {
    titulo: 'Direito Trabalhista',
    descricao: 'Defesa dos direitos do trabalhador e empregador.',
    icone: 'fas fa-briefcase',
  },
  {
    titulo: 'Direito Penal',
    descricao: 'Atuação em defesa criminal e processos penais.',
    icone: 'fas fa-gavel',
  },
  {
    titulo: 'Direito Empresarial',
    descricao: 'Assessoria jurídica para empresas e empresários.',
    icone: 'fas fa-building',
  },
]
</script>

<style scoped>
.areas-section {
  background-color: #f4f4f4;
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
  background-color: #f4f4f4;
}

.titulo {
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: bold;
}

.areas-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.area-card {
  background: white;
  border-radius: 12px;
  padding: 30px 20px;
  flex: 1 1 250px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.area-card:hover {
  transform: translateY(-5px);
}

.icone {
  font-size: 2rem;
  color: #fc1f1f;
  margin-bottom: 15px;
}

.titulo-area {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.descricao {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 20px;
  text-align: center;
}

.botao {
  background-color: #fc1f1f;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: #003380;
}
</style>
