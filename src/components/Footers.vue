<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h1 class="logo">LOGO</h1>
        <p class="description">
          Soluções jurídicas personalizadas, com compromisso, ética e excelência.
        </p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-x-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
        </div>
        <button class="back-to-top">Voltar ao topo</button>
      </div>
      <div class="footer-column">
        <h4>Mapa do site</h4>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Áreas de atuação</a></li>
          <li><a href="#">Equipe</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Termos de Serviço</a></li>
          <li><a href="#">Portal do Cliente</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Copyright © 2025. Todos os direitos reservados.</p>
      <p>feito por <i>KallMax</i>, <a href="#">entrar em contato</a></p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #00332d;
  color: #e0f2f1;
  padding: 40px 20px 20px;
  font-family: 'Segoe UI', sans-serif;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left {
  flex: 1 1 280px;
}

.logo {
  height: 40px;
  margin-bottom: 15px;
}

.description {
  font-size: 14px;
  margin-bottom: 15px;
  max-width: 280px;
}

.social-icons a {
  margin-right: 10px;
  font-size: 20px;
  color: #e0f2f1;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #80cbc4;
}

.back-to-top {
  margin-top: 20px;
  background: none;
  border: 1px solid #e0f2f1;
  color: #e0f2f1;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.back-to-top:hover {
  background-color: #e0f2f1;
  color: #00332d;
}

.footer-column {
  flex: 1 1 180px;
}

.footer-column h4 {
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 8px;
}

.footer-column a {
  color: #e0f2f1;
  text-decoration: none;
  font-size: 14px;
}

.footer-column a:hover {
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid #145c50;
  margin-top: 30px;
  padding-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #b2dfdb;
}

.footer-bottom a {
  color: #80cbc4;
  text-decoration: underline;
}
</style>
