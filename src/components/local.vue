<template>
  <section class="locais-section" id="locais">
    <div class="container">
      
      <div class="header-didatico">
        <h1 class="titulo-principal">Localize e Planeje a Sua Visita</h1>
        <p class="sub-titulo">Selecione o local desejado, ative seu GPS e visualize a melhor rota em tempo real.</p>
      </div>

      <div class="passo-selecao">
        <div class="flex-header-passo">
          <h2 class="passo-titulo"><span class="numero">1</span> Escolha o Local</h2>
          <button @click="obterLocalizacaoUsuario" class="btn-gps" :class="{ 'loading': carregandoGps }">
            <i class="fa-solid" :class="carregandoGps ? 'fa-spinner fa-spin' : 'fa-location-crosshairs'"></i>
            {{ carregandoGps ? 'Localizando...' : 'Minha Localização' }}
          </button>
        </div>
        
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
      
      <div class="containerMap">
        
        <div class="map-wrapper">
          <h2 class="passo-titulo"><span class="numero">2</span> Visualize no Mapa</h2>
          <div id="map"></div>
        </div>
        
        <div class="card-wrapper">
          <h2 class="passo-titulo"><span class="numero">3</span> Detalhes e Rota</h2>
          
          <transition name="card-anim" mode="out-in">
            <div :key="localSelecionado.nome" class="card-endereco">
              <div v-if="distanciaTexto" class="badge-distancia">
                <i class="fa-solid fa-car-side"></i> {{ distanciaTexto }} de distância
              </div>

              <h3 class="titulo-cidade">
                <i class="fa-solid fa-location-dot"></i>
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
                  <span class="label">Pessoa:</span> {{ localSelecionado.evento }}
                </p>
              </div>
              
              <a
                :href="googleMapsLink"
                target="_blank"
                rel="noopener"
                class="btn-map"
              >
                <button> 
                  <i class="fa-solid fa-paper-plane"></i> Abrir Rota no Google Maps
                </button>
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import L from 'leaflet' 
import 'leaflet/dist/leaflet.css'

const locais = [
  {
    cidade:'São Paulo - SP',
    nome: 'Fórum Cível de SP',
    coords: [-23.550520, -46.633308],
    endereco: 'Praça da Sé, 385.',
    bairro: 'Centro',
    cep: '01001-000',
    evento: 'ADV: Sergio Ferreira'
  },
  {
    cidade:'Rio de Janeiro - RJ',
    nome: 'Tribunal de Justiça do RJ',
    coords: [-22.906847, -43.172896],
    endereco: 'Av. Erasmo Braga, 115.',
    bairro: 'Centro',
    cep: '20020-903',
    evento: 'ADV: Sergio Ferreira'
  }
];

const localSelecionado = ref(locais[0])
const usuarioCoords = ref(null)
const carregandoGps = ref(false)
const distanciaTexto = ref('')
let map, marker, userMarker

// Link Inteligente: Se tiver GPS, traça rota da origem ao destino
const googleMapsLink = computed(() => {
  const [lat, lng] = localSelecionado.value.coords
  if (usuarioCoords.value) {
    return `https://www.google.com/maps/dir/?api=1&origin=${usuarioCoords.value[0]},${usuarioCoords.value[1]}&destination=${lat},${lng}&travelmode=driving`
  }
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
})

// Cálculo de distância (Fórmula de Haversine)
const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d > 1 ? `${d.toFixed(1)} km` : `${(d * 1000).toFixed(0)} m`;
}

const obterLocalizacaoUsuario = () => {
  if (!navigator.geolocation) return alert("Geolocalização não suportada pelo navegador.")
  
  carregandoGps.value = true
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords
    usuarioCoords.value = [latitude, longitude]
    
    if (userMarker) map.removeLayer(userMarker)
    
    userMarker = L.circleMarker([latitude, longitude], {
      radius: 10,
      fillColor: "#3498db",
      color: "#fff",
      weight: 3,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(map).bindPopup("Você está aqui").openPopup()

    map.flyTo([latitude, longitude], 13)
    atualizarDistancia()
    carregandoGps.value = false
  }, () => {
    alert("Erro ao obter localização. Verifique as permissões do seu navegador.")
    carregandoGps.value = false
  })
}

const atualizarDistancia = () => {
  if (usuarioCoords.value) {
    distanciaTexto.value = calcularDistancia(
      usuarioCoords.value[0], usuarioCoords.value[1],
      localSelecionado.value.coords[0], localSelecionado.value.coords[1]
    )
  }
}

onMounted(() => {
  map = L.map('map', { zoomControl: true, scrollWheelZoom: false }).setView(localSelecionado.value.coords, 16) 

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap'
  }).addTo(map)

  const customIcon = L.divIcon({
      className: 'custom-marker-wrapper',
      html: '<div class="marker-pulse"></div><i class="fa-solid fa-location-dot"></i>',
      iconSize: [40, 40],
      iconAnchor: [20, 40]
  });

  marker = L.marker(localSelecionado.value.coords, { icon: customIcon }).addTo(map)
})

watch(localSelecionado, (novo) => {
  if (map && marker) {
    map.flyTo(novo.coords, 16, { duration: 1.5 })
    marker.setLatLng(novo.coords)
    atualizarDistancia()
  }
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.locais-section {
  --primary-color: #e4002b;
  --secondary-color: #002b45;
  --bg-color: #f0f4f7; 
  padding: 4rem 1.5rem;
  background-color: var(--bg-color);
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.container { max-width: 1200px; margin: 0 auto; }

/* Cabeçalho */
.header-didatico { text-align: center; margin-bottom: 3rem; }
.titulo-principal { font-size: 2.3rem; font-weight: 800; color: var(--secondary-color); margin-bottom: 0.8rem; }
.sub-titulo { font-size: 1.1rem; color: #555; }

/* Passo 1 - Radio & GPS */
.passo-selecao { width: 100%; margin-bottom: 3rem; }
.flex-header-passo { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem; }

.btn-gps {
  background: white; border: 2px solid var(--primary-color); color: var(--primary-color);
  padding: 10px 20px; border-radius: 50px; cursor: pointer; font-weight: 700;
  transition: all 0.3s ease; display: flex; align-items: center; gap: 8px;
}
.btn-gps:hover { background: var(--primary-color); color: white; transform: scale(1.05); }

.radio-inputs {
  display: flex; flex-wrap: wrap; background-color: white; padding: 0.6rem;
  border-radius: 15px; gap: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}
.radio { flex: 1 1 200px; }
.radio input { display: none; }
.radio .name {
  display: flex; cursor: pointer; align-items: center; justify-content: center;
  border-radius: 10px; padding: 1rem; color: #666; transition: 0.3s; font-weight: 600;
}
.radio input:checked + .name { background-color: var(--secondary-color); color: white; }

/* Grid Mapa e Card */
.containerMap { display: grid; grid-template-columns: 1fr 400px; gap: 2.5rem; }

.passo-titulo { font-size: 1.3rem; font-weight: 700; color: var(--secondary-color); display: flex; align-items: center; gap: 12px; }
.passo-titulo .numero {
  background-color: var(--primary-color); color: white; width: 30px; height: 30px;
  border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;
}

#map { height: 480px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); z-index: 1; }

/* Card Animado */
.card-endereco {
  background: white; padding: 2rem; border-radius: 20px; height: 100%;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1); border-top: 6px solid var(--primary-color);
  position: relative;
}

.badge-distancia {
  display: inline-block; background: #fff1f2; color: var(--primary-color);
  padding: 6px 15px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; margin-bottom: 1.5rem;
}

.titulo-cidade { font-size: 1.5rem; color: var(--secondary-color); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px; }
.detalhes p { margin-bottom: 1.2rem; display: flex; gap: 12px; font-size: 0.95rem; color: #444; }
.detalhes i { color: var(--primary-color); font-size: 1.1rem; }
.detalhes .label { font-weight: 700; color: var(--secondary-color); min-width: 80px; }

.btn-map button {
  width: 100%; padding: 1.2rem; background-color: var(--primary-color); color: white;
  border: none; border-radius: 12px; font-weight: 700; cursor: pointer;
  transition: 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px;
}
.btn-map button:hover { background-color: var(--secondary-color); transform: translateY(-3px); }

/* Animações Leaflet e Vue */
.card-anim-enter-active, .card-anim-leave-active { transition: all 0.4s ease; }
.card-anim-enter-from { opacity: 0; transform: translateX(30px); }
.card-anim-leave-to { opacity: 0; transform: translateX(-30px); }

:deep(.custom-marker-wrapper) { position: relative; display: flex; justify-content: center; align-items: center; }
:deep(.custom-marker-wrapper i) { font-size: 35px; color: var(--primary-color); z-index: 2; position: relative; }
:deep(.marker-pulse) {
  position: absolute; width: 20px; height: 20px; background: var(--primary-color);
  border-radius: 50%; opacity: 0.6; animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(4); opacity: 0; }
}

@media (max-width: 992px) {
  .containerMap { grid-template-columns: 1fr; }
  .card-wrapper { order: 3; }
}
</style>