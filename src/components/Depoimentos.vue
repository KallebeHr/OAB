<template>
  <section class="depoimentos">
    <swiper
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :space-between="20"
      :breakpoints="{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      pagination
      class="swiper-container"
    >
      <swiper-slide v-for="(item, i) in depoimentos" :key="i">
        <div class="card">
          <span class="aspas material-icons">format_quote</span>
          <p class="texto">“{{ item.texto }}”</p>
          <div class="autor">
            <img :src="item.foto" alt="Foto do cliente" class="foto" />
            <div class="info">
              <p class="nome">{{ item.nome }}</p>
              <p class="local">{{ item.local }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <p class="indicador">Arraste para o lado <span class="material-icons">swipe</span></p>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const depoimentos = [
  {
    nome: 'João Silva',
    local: 'São Paulo, SP',
    texto:
      'Fiquei muito satisfeito com o atendimento e a clareza de todo o processo. Recomendo sem dúvidas.',
    foto: 'https://randomuser.me/api/portraits/men/30.jpg'
  },
  {
    nome: 'Mariana Rocha',
    local: 'Belo Horizonte, MG',
    texto:
      'A equipe foi muito atenciosa e solucionou meu caso rapidamente, com profissionalismo e respeito.',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    nome: 'Mariana Rocha',
    local: 'Belo Horizonte, MG',
    texto:
      'A equipe foi muito atenciosa e solucionou meu caso rapidamente, com profissionalismo e respeito.',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    nome: 'Mariana Rocha',
    local: 'Belo Horizonte, MG',
    texto:
      'A equipe foi muito atenciosa e solucionou meu caso rapidamente, com profissionalismo e respeito.',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    nome: 'Carlos Torres',
    local: 'Curitiba, PR',
    texto:
      'Profissionais competentes e humanos. Fui muito bem orientado e me senti seguro durante todo o processo.',
    foto: 'https://randomuser.me/api/portraits/men/52.jpg'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.depoimentos {
  padding: 4rem 1rem;
  background-color: #f4f4f4;

  text-align: center;
}
.titulo {
  font-size: 2rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 2.5rem;
}
.swiper-container {
  padding: 0 1rem;
}
.card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;
  position: relative;
}
.card:hover {
  transform: translateY(-5px);
}
.aspas {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.6rem;
  color: #01C3FF;
  opacity: 0.6;
}
.texto {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
}
.autor {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.foto {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.info {
  display: flex;
  flex-direction: column;
}
.nome {
  font-weight: 600;
  color: #000;
}
.local {
  font-size: 0.85rem;
  color: #777;
}
.indicador {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
}
.material-icons {
  font-size: 1.2rem;
  vertical-align: middle;
}
</style>
