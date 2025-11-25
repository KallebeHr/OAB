<template>
  <div class="container">
<header class="header-local">
  <h1 class="titulo-header">
    Selecione um dos locais para ver no mapa e obter a rota pelo Google Maps
  </h1>
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
</header>
    <div class="containerMap">
      <div id="map"></div>
      <div class="googleMap">
        <div class="loader"></div>
        
      </div>
      
  <div class="card-endereco">
    <h2 class="titulo-cidade">
      <i class="fas fa-map-marker-alt"></i>
      {{localSelecionado.cidade}}
    </h2>
    <p>
      <i class="fas fa-location-dot"></i>
      {{ localSelecionado.endereco }}
    </p>
    <p>
      <i class="fas fa-city"></i>
      {{ localSelecionado.bairro }}
    </p>
    <p>
      <i class="fas fa-mail-bulk"></i>
      {{ localSelecionado.cep }}
    </p>
    <p>
      <i class="fas fa-user-tie"></i>
      {{ localSelecionado.evento }}
    </p>
    <a
  :href="googleMapsLink"
  target="_blank"
  rel="noopener"
  class="btn-map"
>
<button > Ver rota no Google Maps
</button>
  
</a>
  </div>
  
    </div>
    
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { computed } from 'vue'

const googleMapsLink = computed(() => {
  if (!localSelecionado.value || !localSelecionado.value.coords) return '#'
  const [lat, lng] = localSelecionado.value.coords
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
})
const locais = [
  {
    cidade:'São Paulo',
    nome: 'Fórum Cível de São Paulo',
    coords: [-23.550520, -46.633308],
    endereco: 'Praça da Sé, 385.',
    bairro: 'Centro',
    cep: 'CEP: 01001-000',
    evento: 'ADV: Kallebe Max Almeida'
  },
  {
    cidade:'Rio de Janeiro',
    nome: 'Tribunal de Justiça do Rio de Janeiro',
    coords: [-22.906847, -43.172896],
    endereco: 'Av. Erasmo Braga, 115.',
    bairro: 'Centro',
    cep: 'CEP: 20020-903',
    evento: 'ADV: Kallebe Max Almeida'
  },
  {
    cidade:'Minas Gerais',
    nome: 'Universidade Federal de Minas Gerais (UFMG)',
    coords: [-19.870682, -43.966003],
    endereco: 'Av. Antônio Carlos, 6627.',
    bairro: 'Pampulha',
    cep: 'CEP: 31270-901',
    evento: 'ADV: Kallebe Max Almeida'
  },
  {
    cidade:'Rio de Janeiro',
    nome: 'Praça dos Girassóis',
    coords: [-10.249091, -48.324285],
    endereco: 'Av. Teotônio Segurado.',
    bairro: 'Centro',
    cep: 'CEP: 77015-200',
    evento: 'ADV: Kallebe Max Almeida'
  },
  {
    cidade:'Porto Alegre',
    nome: 'Palácio da Justiça de Porto Alegre',
    coords: [-30.027704, -51.228734],
    endereco: 'Av. Borges de Medeiros, 1565.',
    bairro: 'Praia de Belas',
    cep: 'CEP: 90119-900',
    evento: 'ADV: Kallebe Max Almeida'
  }
];


const localSelecionado = ref(locais[0])
let map, marker

onMounted(() => {
  map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView(localSelecionado.value.coords, 18)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '&copy; KallDev'
  }).addTo(map)

  const customIcon = L.icon({
    iconUrl: '/IMG/iconMap.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })

  marker = L.marker(localSelecionado.value.coords, { icon: customIcon })
    .addTo(map)
    .bindPopup(localSelecionado.value.endereco)
    .openPopup()
})

watch(localSelecionado, (novo) => {
  map.setView(novo.coords, 18)
  marker.setLatLng(novo.coords)
  marker.setPopupContent(novo.endereco)
})
</script>


  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: #f4f4f4;

  }
  
.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #EEE;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 300px;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
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
  border: none;
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}
.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  font-weight: 600;
}
  .containerMap {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    flex-wrap: wrap;
    background: #f4f4f4;
  } 
  #map {
    flex: 1 1 45%;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(69, 115, 200, 0.686);
    min-width: 300px;
  }

  .card-endereco {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 420px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-endereco:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
}

.titulo-cidade {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-endereco p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-endereco i {
  color: #fc1f1f;
}
.header-local {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fc1f1f;
  color: white;
  width: 100%;
  padding: 20px;
  gap: 1.5rem;
  text-align: center;
}

.titulo-header {
  flex: 1 1 auto;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  color: white;
  max-width: 300px;
  width: 400px;
}

.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #EEE;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 300px;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
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
  border: none;
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
 background-color: #fc1f1f;
  color: #EEE;
  font-weight: 600;
}

/* Responsivo para mobile */
@media (max-width: 768px) {
  .header-local {
    flex-direction: column;
    text-align: center;
  }

  .titulo-header {
    text-align: center;
  }
}

.btn {
 --color: rgb(41, 41, 41);
 --color2: rgb(10, 25, 30);
 padding: 0.8em 1.75em;
 background-color: transparent;
 border-radius: 6px;
 border: .3px solid var(--color);
 transition: .5s;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 z-index: 1;
 font-weight: 300;
 font-size: 17px;
 font-family: 'Roboto', 'Segoe UI', sans-serif;
 text-transform: uppercase;
 color: var(--color);

}
.btn-map{
   --color: #fc1f1f;
 --color2: rgb(10, 25, 30);
 text-decoration: none;
 padding: 0.8em 1.75em;
 background-color: transparent;
 border-radius: 6px;
 border: .3px solid var(--color);
 transition: .5s;
 overflow: hidden;
 cursor: pointer;
 display: flex;
 margin-top:20px ;
 z-index: 1;
 font-weight: 500;
 font-size: 17px;
 font-family: 'Roboto', 'Segoe UI', sans-serif;
 text-transform: uppercase;
 color: var(--color);
}
.btn:hover {
color:#2734AF;
 border: 1px solid #2734AF;


}
  .endereco p {
    margin: 0.3rem 0;
    font-size: 1.3rem;
  }
  </style>
  