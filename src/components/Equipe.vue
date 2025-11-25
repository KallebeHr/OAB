<template>
  <section class="equipe-section">
    <div class="container">
      <Swiper
        :modules="[Pagination]"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="80"
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
              <img :src="adv.foto" :alt="adv.nome" />
            </div>
            <div class="info">
              <h3 class="nome">{{ adv.nome }}</h3>
              <p class="cargo">{{ adv.cargo }}</p>
              <p class="descricao">{{ adv.descricao }}</p>
              <button class="btn-cta">Conversar</button>
              <div class="redes">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
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
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const equipe = [
  {
    nome: 'JEFFREY BROWN',
    cargo: 'Líder criativo',
    descricao: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    foto: '/IMGADV/1.jpg'
  },
  {
    nome: 'ALEX GREENFIELD',
    cargo: 'Guru da programação',
    descricao: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    foto: '/IMGADV/4.jpg'
  },
  {
    nome: 'LINDA LARSON',
    cargo: 'Gerente',
    descricao: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    foto: '/IMGADV/1.jpg'
  },
  {
    nome: 'ANN RICHMOND',
    cargo: 'Gerente de vendas',
    descricao: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    foto: '/IMGADV/4.jpg'
  },
  {
    nome: 'MARIA SILVA',
    cargo: 'Advogada especialista',
    descricao: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    foto: '/IMGADV/1.jpg'
  }
];

const swiperInstance = ref(null);
const activeIndex = ref(0);

function onSwiperInit(swiper) {
  swiperInstance.value = swiper;
  activeIndex.value = swiper.realIndex;
}

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex;
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.equipe-section {
  background-color: #f4f4f4;
  padding: 4rem 1rem;
  color: white;
  overflow: hidden;

}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.titulo {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #fff;
}

.swiper-custom {
  padding-bottom: 3rem;
}

.slide-card {
  width: auto !important;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;
  opacity: 0.4;
  transform: scale(0.9);
  filter: blur(1px);
}

.slide-card.ativo {
  opacity: 1;
  transform: scale(1.05);
  filter: none;
  transition: all 0.5s ease;
  z-index: 10;
}

.card {
  position: relative;
  width: 320px;
  background-color: transparent;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.5s ease;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.info {
  position: absolute;
  bottom: -35px;
  left: -35px;
  background-color: #f3f3f3;
  color: #222;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  width: 220px;
  text-align: center;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}


.slide-card.ativo .info {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}

.slide-card.ativo .image img {
  transform: scale(1.05);
}

.nome {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.btn-cta {
  background-color: #fc1f1f;
  font-weight: bold;
  padding: 0.4rem 3rem;
  margin: 5px;
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
.cargo {
  font-size: 0.95rem;
  font-weight: 600;
  color: #8e1c1c;
  margin-bottom: 0.6rem;
}

.descricao {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #444;
}

.redes {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.8rem;
  color: #555;
  font-size: 1rem;
}

@media (max-width: 600px) {
  .info {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 85%;
  }
}
</style>
