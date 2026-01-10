<template>
  <section class="locais-section" id="locais">
    <div class="container">
      
      <!-- Cabeçalho Didático -->
      <div class="header-didatico">
        <h1 class="titulo-principal">Localize e Planeje a Sua Visita em 3 Passos Simples</h1>
        <p class="sub-titulo">Selecione o local desejado, visualize-o no mapa e obtenha a rota mais rápida.</p>
      </div>

      <!-- Passo 1: Seleção do Local -->
      <div class="passo-selecao">
        <h2 class="passo-titulo"><span class="numero">1</span> Escolha o Local de Interesse</h2>
        <div class="radio-inputs">
          <label
            v-for="(local, index) in locais"
            :key="index"
            class="radio"
          >
            <input
              type="radio"
              name="radio"
              :value="local"
              v-model="localSelecionado"
            />
            <span class="name">{{ local.nome }}</span>
          </label>
        </div>
      </div>
      
      <!-- Passo 2 & 3: Visualização e Ação -->
      <div class="containerMap">
        
        <!-- Bloco do Mapa -->
        <div class="map-wrapper">
          <h2 class="passo-titulo"><span class="numero">2</span> Visualize no Mapa</h2>
          <div id="map"></div>
        </div>
        
        <!-- Bloco de Detalhes e Rota -->
        <div class="card-wrapper">
          <h2 class="passo-titulo"><span class="numero">3</span> Detalhes e Rota</h2>
          <div class="card-endereco">
            <h3 class="titulo-cidade">
              <i class="fa-solid fa-location-crosshairs"></i>
              {{ localSelecionado.cidade }}
            </h3>
            <div class="detalhes">
              <p>
                <i class="fa-solid fa-map-pin"></i>
                <span class="label">Endereço:</span> {{ localSelecionado.endereco }}
              </p>
              <p>
                <i class="fa-solid fa-city"></i>
                <span class="label">Bairro:</span> {{ localSelecionado.bairro }}
              </p>
              <p>
                <i class="fa-solid fa-mail-bulk"></i>
                <span class="label">CEP:</span> {{ localSelecionado.cep }}
              </p>
              <p>
                <i class="fa-solid fa-user-tie"></i>
                <span class="label">Pessoa de Contato:</span> {{ localSelecionado.evento }}
              </p>
            </div>
            
            <a
              :href="googleMapsLink"
              target="_blank"
              rel="noopener"
              class="btn-map"
            >
              <button> 
                <i class="fa-solid fa-route"></i> Obter Rota no Google Maps
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import L from 'leaflet' 
import 'leaflet/dist/leaflet.css'

// ===================================
// 🗺️ DADOS DE LOCALIZAÇÃO (Mantidos)
// ===================================
const locais = [
  {
    cidade:'São Paulo - SP',
    nome: 'Fórum Cível de SP',
    coords: [-23.550520, -46.633308],
    endereco: 'Praça da Sé, 385.',
    bairro: 'Centro',
    cep: 'CEP: 01001-000',
    evento: 'ADV: Kallebe Max Almeida'
  },
  {
    cidade:'Rio de Janeiro - RJ',
    nome: 'Tribunal de Justiça do RJ',
    coords: [-22.906847, -43.172896],
    endereco: 'Av. Erasmo Braga, 115.',
    bairro: 'Centro',
    cep: 'CEP: 20020-903',
    evento: 'ADV: Kallebe Max Almeida'
  },
  {
    cidade:'Belo Horizonte - MG',
    nome: 'Fórum Lafayette (BH)',
    coords: [-19.923056, -43.938889],
    endereco: 'Av. Augusto de Lima, 1549',
    bairro: 'Barro Preto',
    cep: 'CEP: 30190-001',
    evento: 'ADV: Kallebe Max Almeida'
  }
];

const localSelecionado = ref(locais[0])
let map, marker

// ===================================
// 🔗 LINK DO GOOGLE MAPS
// ===================================
const googleMapsLink = computed(() => {
  if (!localSelecionado.value || !localSelecionado.value.coords) return '#'
  const [lat, lng] = localSelecionado.value.coords
  // Cria o link para rota no Google Maps
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
})

// ===================================
// 🗺️ FUNÇÕES DO MAPA LEAFLET
// ===================================

onMounted(() => {
  // Inicializa o mapa Leaflet
  map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView(localSelecionado.value.coords, 16) 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; Leaflet | KallDev'
  }).addTo(map)

  const customIcon = L.divIcon({
      className: 'custom-map-marker',
      html: '<i class="fa-solid fa-location-pin" style="font-size: 38px; color: var(--primary-color);"></i>',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
  });

  marker = L.marker(localSelecionado.value.coords, { icon: customIcon })
    .addTo(map)
    .bindPopup(`<b>${localSelecionado.value.nome}</b><br>${localSelecionado.value.endereco}`)
    .openPopup()
})

watch(localSelecionado, (novo) => {
  if (map && marker) {
    map.setView(novo.coords, 16)
    marker.setLatLng(novo.coords)
    marker.setPopupContent(`<b>${novo.nome}</b><br>${novo.endereco}`)
    marker.openPopup()
  }
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.locais-section {
  --primary-color: #01C3FF; /* Vermelho - Ação Principal */
  --secondary-color: #002b45; /* Azul Escuro - Fundo/Informação */
  --bg-color: #f9f9f9; 
  padding: 4rem 1.5rem;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* =========================================
   📝 CABEÇALHO DIDÁTICO
   ========================================= */
.header-didatico {
  text-align: center;
  margin-bottom: 3rem;
  padding: 1rem;
}

.titulo-principal {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.sub-titulo {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
}

.passo-titulo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.passo-titulo .numero {
    background-color: var(--secondary-color);
    color: white;
    font-size: 1.2rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    box-shadow: 0 0 0 3px var(--primary-color);
}


/* =========================================
   ✅ PASSO 1: SELEÇÃO COM BOTÕES DE RÁDIO
   ========================================= */
.passo-selecao {
    width: 100%;
    max-width: 900px;
    margin-bottom: 3rem;
}

.radio-inputs {
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #EEE;
  padding: 0.5rem;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.radio-inputs .radio {
  flex: 1 1 180px; /* Permite quebrar linha em telas menores */
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: .7rem 0.5rem;
  color: var(--secondary-color);
  transition: all .2s ease-in-out;
  white-space: nowrap;
  font-weight: 500;
  border: 1px solid transparent;
}

.radio-inputs .radio input:checked + .name {
  background-color: var(--primary-color);
  color: white;
  font-weight: 700;
  border: 1px solid var(--secondary-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* =========================================
   🗺️ PASSO 2 & 3: MAPA E DETALHES
   ========================================= */
.containerMap {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
} 

.map-wrapper, .card-wrapper {
    flex: 1 1 45%;
    min-width: 300px;
}

.map-wrapper {
    order: 1;
}

.card-wrapper {
    order: 2;
}

/* Mapa */
#map {
  width: 100%;
  height: 450px;
  border-radius: 12px;
  /* Borda colorida para destaque didático */
  border: 4px solid var(--secondary-color); 
  box-shadow: 0 10px 30px rgba(0, 43, 69, 0.1);
  transition: border-color 0.3s;
}

/* Card de Endereço */
.card-endereco {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: fit-content;
  border-top: 5px solid var(--primary-color);
}

.titulo-cidade {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-bottom: 0.5rem;
}

.detalhes p {
  margin: 0.9rem 0;
  font-size: 1rem;
  color: #444;
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}

.detalhes i {
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-top: 4px;
}

.detalhes .label {
    font-weight: 600;
    color: var(--secondary-color);
    min-width: 100px;
    display: inline-block;
}

/* Botão de Rota (Ação Principal) */
.btn-map {
  text-decoration: none;
  display: block;
  margin-top: 2rem;
}

.btn-map button {
  width: 100%;
  padding: 1rem 1.75em;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 6px 15px rgba(228, 0, 43, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-map button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 43, 69, 0.5);
}

/* =========================================
   📱 MEDIA QUERIES
   ========================================= */
@media (max-width: 900px) {
    .map-wrapper { order: 2; }
    .card-wrapper { order: 3; } /* Força o card a ficar por último */
    .passo-selecao { margin-bottom: 2rem; }
    .passo-titulo { text-align: center; justify-content: center; }
}

@media (max-width: 600px) {
    .radio-inputs {
        flex-direction: column;
        padding: 0.25rem;
    }
    .radio-inputs .radio {
        flex: 1 1 100%;
    }
    .radio-inputs .radio .name {
        padding: 0.5rem;
    }
}
</style>