<template>
  <!-- Envolvemos em v-layout para garantir que o drawer funcione corretamente -->
  <v-layout class="header-layout-wrapper">
    
    <!-- ============================================ -->
    <!-- 📱 MENU LATERAL (MOBILE - DRAWER) -->
    <!-- ============================================ -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
      class="mobile-drawer"
      width="300" 
      style="height: 100vh; position: fixed; top: 0; z-index: 2000;"
    >
      <!-- Cabeçalho do Menu Mobile -->
      <div class="drawer-header pa-4 d-flex align-center justify-space-between bg-primary-custom">
        <h2 class="text-white font-weight-bold m-0 text-h6">NAVEGAÇÃO</h2>
        <!-- Botão para fechar o menu -->
        <v-btn icon="mdi-close" variant="text" color="white" @click="drawer = false"></v-btn>
      </div>

      <v-divider></v-divider>

      <!-- Lista de Links Mobile -->
      <v-list class="py-2">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :value="item"
          @click="drawer = false"
          active-color="primary-custom"
          class="mb-1 py-3"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-chevron-right" color="primary-custom" size="small"></v-icon>
          </template>
          <v-list-item-title class="text-uppercase font-weight-bold pl-2" style="font-size: 1rem;">
            {{ item }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ============================================ -->
    <!-- 🏗️ CABEÇALHO (Sticky) -->
    <!-- ============================================ -->
    <header class="sticky-header w-100 d-flex flex-column custom-header-shadow">
      
      <!-- 1. BARRA DE NAVEGAÇÃO (BRANCA) -->
      <!-- Sempre visível. No mobile só tem o hambúrguer. No desktop tem os links. -->
      <div class="nav-bar bg-white">
        <v-container class="py-0 d-flex align-center justify-space-between fill-height" style="min-height: 60px;">
          
          <!-- BOTÃO HAMBÚRGUER (Visível APENAS no Mobile: d-md-none) -->
          <!-- Se quiser ele na esquerda: -->
          <v-app-bar-nav-icon 
            variant="text" 
            size="large"
            class="d-md-none text-secondary-custom"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <!-- Se quiser ele na direita (opcional), use 'order-last' e 'ml-auto' -->

          <!-- LOGO MOBILE (Opcional - Se quiser que fique VAZIO, remova esta linha, mas é bom ter algo) -->
          <!-- Como você pediu para SUMIR o logo, deixei este espaço vazio, o header branco ficará "limpo" -->
          
          <!-- NAVEGAÇÃO DESKTOP (Visível APENAS Desktop: d-none d-md-flex) -->
          <nav class="d-none d-md-flex mx-auto align-center h-100">
            <v-btn
              v-for="(item, index) in menuItems"
              :key="index"
              variant="text"
              rounded="0"
              class="nav-link-btn text-body-2 font-weight-bold text-secondary-custom px-4 h-100"
              :class="{ 'border-left-custom': index !== 0 }"
            >
              {{ item }}
            </v-btn>
          </nav>

        </v-container>
      </div>

      <!-- 2. BARRA DE INFORMAÇÕES (VERMELHA) -->
      <!-- Visível APENAS Desktop (d-none d-md-block). Some totalmente no mobile. -->
      <div class="info-bar bg-primary-custom text-white py-4 d-none d-md-block">
        <v-container>
          <v-row align="center" justify="space-between">
            
            <!-- LOGO (Só Desktop) -->
            <v-col cols="12" md="3" class="text-left">
              <h1 class="font-heading text-h4 font-weight-black logo-text">
                LOGO
              </h1>
            </v-col>

            <!-- CONTATOS (Só Desktop) -->
            <v-col cols="12" md="6">
              <div class="d-flex justify-center align-center gap-4">
                <div class="d-flex align-center contact-box">
                  <v-icon icon="mdi-phone" class="mr-3 text-accent-custom"></v-icon>
                  <div class="lh-tight">
                    <div class="font-weight-bold text-caption">TELEFONE GERAL</div>
                    <div class="text-subtitle-2">(86) 12345-6789</div>
                  </div>
                </div>
                <v-divider vertical class="mx-4" color="white" style="opacity: 0.4; height: 30px;"></v-divider>
                <div class="d-flex align-center contact-box">
                  <v-icon icon="mdi-phone-classic" class="mr-3 text-accent-custom"></v-icon>
                  <div class="lh-tight">
                    <div class="font-weight-bold text-caption">DISQUE PRERROGATIVAS</div>
                    <div class="text-subtitle-2">(86) 12345-6789</div>
                  </div>
                </div>
              </div>
            </v-col>

            <!-- REDES SOCIAIS (Só Desktop) -->
            <v-col cols="12" md="3">
              <div class="d-flex justify-end gap-2">
                <v-btn icon="mdi-instagram" variant="text" density="compact" color="white"></v-btn>
                <v-btn icon="mdi-facebook" variant="text" density="compact" color="white"></v-btn>
                <v-btn icon="mdi-whatsapp" variant="text" density="compact" color="white"></v-btn>
              </div>
            </v-col>

          </v-row>
        </v-container>
      </div>

    </header>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const menuItems = [
  'INÍCIO', 'SOBRE', 'EQUIPE', 'REGIONAIS', 
  'ÁREAS', 'ARTIGOS', 'ONLINE', 'PROJETOS', 
  'DEFESA', 'INCLUSÃO', 'SERVIÇOS', 'CONTATO'
];
</script>

<style scoped>
/* CORES */
.bg-primary-custom { background-color: #e4002b !important; }
.text-secondary-custom { color: #002b45 !important; }
.text-accent-custom { color: #ffcc00 !important; }

/* FIXAR O CABEÇALHO NO TOPO (STICKY) */
.header-layout-wrapper {
  /* Garante que o container não colapse */
  display: block;
  min-height: auto;
}

.sticky-header {
  position: sticky; /* O segredo para ficar fixo */
  top: 0;
  z-index: 1000; /* Garante que fique acima do conteúdo do site */
  width: 100%;
}

/* Sombras e Bordas */
.custom-header-shadow {
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.nav-link-btn {
  height: 100% !important;
  border-radius: 0;
}

.nav-link-btn:hover {
  background-color: #f5f5f5;
  color: #e4002b !important;
}

.border-left-custom {
  border-left: 1px solid #eee;
}

/* Tipografia */
.font-heading { font-family: 'Montserrat', sans-serif !important; }
.lh-tight { line-height: 1.2; }

/* Ajuste fino para o Drawer ocupar a tela toda visualmente sem scroll interno estranho */
.mobile-drawer {
  height: 100vh !important;
}
</style>