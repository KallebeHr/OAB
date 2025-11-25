<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        
        <!-- Coluna Esquerda: Logo e Redes Sociais -->
        <div class="footer-left">
          <img src="/LogoPNG.png" alt="" class="logo">
          <p class="description">
            Soluções jurídicas personalizadas, com compromisso, ética e excelência para alcançar o melhor resultado.
          </p>
          <div class="social-icons">
            <a href="#" aria-label="Acesse nosso Twitter/X"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="Acesse nosso LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Acesse nosso Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Acesse nosso Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
          <a href="#" @click.prevent="scrollToTop" class="back-to-top-link">
            <button class="back-to-top">
              <i class="fa-solid fa-arrow-up"></i> Voltar ao Topo
            </button>
          </a>
        </div>
        
        <!-- Coluna de Navegação: Mapa do Site -->
        <div class="footer-column">
          <h4>Mapa do Site</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#areas">Áreas de Atuação</a></li>
            <li><a href="#equipe">Nossa Equipe</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        
        <!-- Coluna de Informações Legais -->
        <div class="footer-column">
          <h4>Legal e Suporte</h4>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Serviço</a></li>
            <li><a href="#">Portal do Cliente</a></li>
            <li><a href="#">Trabalhe Connosco</a></li>
          </ul>
        </div>

        <!-- Coluna de Informações de Contato (Repetição para Destacar) -->
        <div class="footer-column contact-info-quick">
          <h4>Contacto Rápido</h4>
          <ul>
            <li><i class="fa-solid fa-phone"></i> (11) 98765-4321</li>
            <li><i class="fa-solid fa-envelope"></i> contacto@kallmax.pt</li>
            <li><i class="fa-solid fa-map-marker-alt"></i> São Paulo, Brasil</li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Faixa de Direitos Autorais -->
    <div class="footer-bottom">
      <div class="container bottom-flex">
        <p>Copyright &copy; {{ new Date().getFullYear() }}. MaxSistemas. Todos os direitos reservados.</p>
        <p>Desenvolvido por <span class="kallmax-credit">MaxSistemas.</span></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';

// Função para voltar ao topo da página
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Certifica-se de que o Font Awesome está importado (embora já esteja no Contatos)
onMounted(() => {
    // Pode-se adicionar lógica de inicialização aqui se necessário.
});
</script>

<style scoped>
/* =========================================
   🎨 VARIÁVEIS LOCAIS E IMPORTS
   ========================================= */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.footer {
  --primary-color: #e4002b; /* Vermelho */
  --secondary-color: #002b45; /* Azul Escuro (Fundo) */
  --light-text: #f5f5f5; /* Texto principal claro */
  --highlight-color: var(--primary-color);
  --border-color: rgba(255, 255, 255, 0.15); /* Borda sutil */

  background-color: var(--secondary-color);
  color: var(--light-text);
  padding: 4rem 1.5rem 0; /* Padding superior generoso */
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* =========================================
   🧱 CONTEÚDO PRINCIPAL
   ========================================= */
.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 40px;
}

.footer-left {
  flex: 1 1 300px;
}

.logo {
  width: 6rem;
  font-weight: 900;
  margin-bottom: 15px;
}

.description {
  font-size: 0.95rem;
  margin-bottom: 25px;
  max-width: 350px;
  line-height: 1.6;
}

/* Redes Sociais */
.social-icons {
  margin-bottom: 30px;
}

.social-icons a {
  margin-right: 15px;
  font-size: 1.5rem;
  color: var(--light-text);
  transition: color 0.3s;
}

.social-icons a:hover {
  color: var(--highlight-color); /* Ícones vermelhos no hover */
}

/* Botão Voltar ao Topo */
.back-to-top-link {
    text-decoration: none;
}
.back-to-top {
  background: transparent;
  border: 2px solid var(--light-text);
  color: var(--light-text);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.back-to-top:hover {
  background-color: var(--highlight-color);
  border-color: var(--highlight-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(228, 0, 43, 0.4);
}

/* Colunas de Links */
.footer-column {
  flex: 1 1 180px;
}

.footer-column h4 {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--highlight-color); /* Títulos da coluna em vermelho */
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 10px;
}

.footer-column a, .contact-info-quick li {
  color: var(--light-text);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: var(--highlight-color); /* Links vermelhos no hover */
  text-decoration: underline;
}

.contact-info-quick li i {
    color: var(--highlight-color);
    margin-right: 10px;
}

/* =========================================
   ⬇️ FAIXA INFERIOR
   ========================================= */
.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding: 20px 0;
  text-align: center;
  font-size: 0.85rem;
  color: #a0a0a0; /* Texto cinza claro para copyright */
}

.bottom-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.kallmax-credit {
    font-weight: 600;
    color: var(--highlight-color); /* Nome da empresa em vermelho */
    font-style: italic;
}


/* =========================================
   📱 RESPONSIVIDADE
   ========================================= */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  .footer-left,
  .footer-column {
    flex: 1 1 100%;
    align-items: center;
  }
  
  .footer-left {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .description {
      margin-left: auto;
      margin-right: auto;
  }

  .footer-column ul {
    text-align: center;
    /* Adicionar espaço de toque extra em mobile */
    padding-left: 0; 
  }

  .footer-column li {
      margin-bottom: 15px;
  }
  
  .bottom-flex {
      flex-direction: column;
      gap: 5px;
  }
}
</style>