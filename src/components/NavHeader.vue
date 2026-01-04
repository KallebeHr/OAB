<template>
  <v-layout class="header-layout-wrapper">
    <div 
        class="reading-progress-bar" 
        :style="{ width: scrollProgress + '%' }"
    ></div>
    
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
        <h2 class="text-white font-weight-bold m-0 text-h6">MaxSistemas</h2>
        <!-- Botão para fechar o menu -->
        <v-btn icon="mdi-close" variant="text" color="white" @click="drawer = false"></v-btn>
      </div>

      <v-divider></v-divider>

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

    <header 
        class="sticky-header w-100 d-flex flex-column custom-header-shadow"
        :class="{ 'header-hidden': !showHeader }"
    >
      
      <!-- 1. BARRA DE NAVEGAÇÃO (BRANCA) -->
      <div class="nav-bar bg-white">
        <v-container class="py-0 d-flex align-center justify-space-between fill-height" style="min-height: 60px;">
          
          <!-- BOTÃO HAMBÚRGUER (Visível APENAS no Mobile: d-md-none) -->
          <v-app-bar-nav-icon 
            variant="text" 
            size="large"
            class="d-md-none text-secondary-custom"
            @click.stop="drawer = !drawer" 
          ></v-app-bar-nav-icon>

          <!-- 
            LOGO MOBILE (Movida para a esquerda) 
          -->
          <div class="d-flex d-md-none align-center">

            <img  src="/LogoPNG.png"   alt="Logo MaxSistemas Mobile" class="logo-mobile ml-2">
          </div>
          
          <!-- NAVEGAÇÃO DESKTOP (Visível APENAS Desktop: d-none d-md-flex) -->
          <nav class="d-none d-md-flex mx-auto align-center h-100 desktop">
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

          <v-spacer class="d-none d-md-block"></v-spacer>
        </v-container>
      </div>

      <!-- 2. BARRA DE INFORMAÇÕES (VERMELHA) -->
      <div class="info-bar bg-primary-custom text-white py-4 d-none d-md-block">
        <v-container>
          <v-row align="center" justify="space-between">
            
            <!-- LOGO (Só Desktop) -->
            <v-col cols="12" md="3" class="text-left d-flex align-center">
              <img 
                src="/LogoPNG.png" 
                alt="Logo MaxSistemas" 
                class="logo-desktop"
              >
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
                <v-btn icon="mdi-instagram" variant="text" density="compact"  class="icon"></v-btn>
                <v-btn icon="mdi-facebook" variant="text" density="compact"  class="icon"></v-btn>
                <v-btn icon="mdi-whatsapp" variant="text" density="compact"  class="icon"></v-btn>
              </div>
            </v-col>

          </v-row>
        </v-container>
      </div>

    </header>
    
    <!-- ============================================ -->
    <!-- ⬇️ ESPAÇADOR DE CONTEÚDO (Para evitar que o conteúdo passe por baixo do header fixo) -->
    <!-- ============================================ -->
    <div class="header-spacer"></div>

  </v-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const drawer = ref(false);
const showHeader = ref(true); // Estado para controlar a visibilidade do cabeçalho (Smart Header)
const scrollProgress = ref(0); // Novo estado para a barra de progresso
let lastScrollY = 0; // Armazena a última posição de rolagem

const menuItems = [
  'INÍCIO', 'SOBRE', 'EQUIPE', 'REGIONAIS', 
  'ÁREAS', 'ARTIGOS', 'ONLINE', 'PROJETOS', 
  'DEFESA', 'INCLUSÃO', 'SERVIÇOS', 'CONTATO'
];

/**
 * Função para lidar com o evento de rolagem (scroll)
 * Implementa a lógica: 
 * 1. Esconder/Mostrar o header (Smart Header).
 * 2. Calcular a porcentagem de progresso da rolagem.
 */
const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // --- Lógica do Smart Header (Esconder/Mostrar) ---
    // Apenas começa a esconder/mostrar se o usuário rolou mais que 80px do topo.
    if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
            // Rolando para baixo -> Esconder cabeçalho
            showHeader.value = false;
        } else {
            // Rolando para cima -> Mostrar cabeçalho
            showHeader.value = true;
        }
    } else {
        // Perto do topo, o cabeçalho deve estar sempre visível
        showHeader.value = true;
    }
    
    // --- Lógica da Barra de Progresso ---
    // Calcula a altura total da página que é passível de rolagem.
    // É importante usar document.documentElement.scrollHeight para garantir a altura correta do conteúdo.
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (scrollableHeight > 0) {
        // Calcula a porcentagem de rolagem concluída (de 0 a 100)
        scrollProgress.value = (currentScrollY / scrollableHeight) * 100;
    } else {
        scrollProgress.value = 0;
    }

    // Atualiza a última posição de rolagem
    lastScrollY = currentScrollY;
};

// Adiciona o listener de scroll quando o componente é montado
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Chama a função uma vez ao montar para garantir que a barra comece correta se a página carregar já rolada.
    handleScroll(); 
});

// Remove o listener de scroll quando o componente é desmontado para evitar vazamento de memória
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* CORES */
.bg-primary-custom-bg-mobile { background-color: #0B0C38 !important; }
.bg-primary-custom { background-color: #e4002b !important; }
.text-secondary-custom { color: #002b45 !important; }
.text-accent-custom { color: #ffcc00 !important; }

/* FIXAR O CABEÇALHO NO TOPO (FIXED) */
.header-layout-wrapper {
  /* Garante que o container não colapse */
  display: block;
  min-height: auto;
}
/* Estilos para a logo desktop (na barra vermelha) */
.logo-desktop {
  width: auto; /* Mantém a proporção */
  height: 50px; /* Altura ideal */
  margin: 0px;
}
/* Estilos para a logo mobile (na barra branca) */
.logo-mobile {
  width: auto;
  height: 35px; /* Um pouco menor para mobile */
  
}

.sticky-header {
  /* MUDANÇA PRINCIPAL: De 'sticky' para 'fixed' para funcionar corretamente com o translateY. */
  position: fixed; 
  top: 0;
  z-index: 1000; /* Garante que fique acima do conteúdo do site */
  width: 100%;
  /* Adiciona transição suave para a animação de deslize */
  transition: transform 0.3s ease-out; 
  
}

/* Classe aplicada quando o cabeçalho deve estar escondido */
.header-hidden {
  /* Move o cabeçalho para cima (fora da tela). O valor de -150px garante que ele suma completamente. */
  transform: translateY(-150px); 
}

/* BARRA DE PROGRESSO DE LEITURA (Progress Bar) */
.reading-progress-bar {
  /* MUDANÇA: Agora é fixed para que fique no topo da tela (viewport) e não seja afetado pelo transform do header. */
  position: fixed; 
  top: 0;
  left: 0;
  height: 5px; /* Altura fina */
  background-color: rgb(48, 48, 255); /* Cor de destaque (accent) */
  z-index: 2000; /* Z-index alto para garantir que fique acima de TUDO (incluindo o header fixo) */
  width: 100%; /* Garante que o container da barra cubra toda a largura */
  /* Transição rápida e linear para acompanhar o scroll de perto. */
  transition: width 0.1s linear; 
}
.icon:hover{
color: #ffcc00;
transition: 0.1s;
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

/* ============================================ */
/* ⬇️ ESPAÇADOR DE CONTEÚDO (Spacer) */
/* Este div ocupa o espaço que o header fixo deixou. */
/* É crucial para o layout não quebrar quando o header usa position: fixed. */
.header-spacer {
    /* Altura para Mobile (aprox. 60px da barra branca) */
    height: 60px; 
    width: 100%;
}

/* Altura para Desktop (aprox. 60px + 60px da barra vermelha = 120px, arredondando para 110px) */
@media (min-width: 960px) { /* md breakpoint do Vuetify */
    .header-spacer {
        height: 110px;
        
    }
}
</style>