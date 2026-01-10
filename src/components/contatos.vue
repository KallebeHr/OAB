<template>
  <section class="contatos-section" id="contato">
    <div class="container">
      
      <!-- Título da Seção -->
      <div class="header-contato">
        <h2 class="section-title">Fale Connosco</h2>
        <p class="section-subtitle">
          Tem alguma dúvida ou precisa de uma consulta jurídica? Envie-nos uma mensagem ou utilize os nossos contactos diretos.
        </p>
      </div>

      <!-- Wrapper Principal (Formulário + Informações) -->
      <div class="contatos-wrapper">
        
        <!-- 1. Formulário de Contato -->
        <div class="form-card">
          <h3 class="card-title">Envie-nos uma Mensagem</h3>
          <form @submit.prevent="submitForm" class="contact-form">
            
            <div class="form-group">
              <label for="nome">Nome Completo</label>
              <input 
                type="text" 
                id="nome" 
                v-model="formData.nome" 
                required 
                placeholder="O seu nome"
              >
            </div>
            
            <div class="form-group">
              <label for="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                required 
                placeholder="O seu melhor e-mail"
              >
            </div>
            
            <div class="form-group">
              <label for="telefone">Telefone</label>
              <input 
                type="tel" 
                id="telefone" 
                v-model="formData.telefone" 
                placeholder="(__) _____-____"
              >
            </div>

            <div class="form-group">
              <label for="assunto">Assunto</label>
              <input 
                type="text" 
                id="assunto" 
                v-model="formData.assunto" 
                required
                placeholder="Ex: Consulta sobre Divórcio"
              >
            </div>
            
            <div class="form-group">
              <label for="mensagem">Mensagem</label>
              <textarea 
                id="mensagem" 
                v-model="formData.mensagem" 
                rows="5" 
                required 
                placeholder="Descreva a sua situação legal..."
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              <i class="fa-solid fa-paper-plane"></i>
              {{ isSubmitting ? 'A Enviar...' : 'Enviar Mensagem' }}
            </button>
            
            <!-- Feedback de Submissão -->
            <div v-if="submitStatus === 'success'" class="feedback success">
              Mensagem enviada com sucesso! Entraremos em contacto brevemente.
            </div>
            <div v-if="submitStatus === 'error'" class="feedback error">
              Erro ao enviar. Por favor, tente novamente ou ligue para nós.
            </div>

          </form>
        </div>
        
        <!-- 2. Informações de Contato Diretas -->
        <div class="info-card">
          <h3 class="card-title">Informações de Contato</h3>
          
          <div class="info-item">
            <i class="fa-solid fa-map-marker-alt icon-info"></i>
            <div>
              <h4>Escritório Principal</h4>
              <p>Rua dos Advogados, 123 - Centro<br>São Paulo, SP - CEP 01000-000</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+dos+Advogados,+123,+São+Paulo" 
                 target="_blank" class="link-map">Ver no Mapa</a>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fa-solid fa-phone icon-info"></i>
            <div>
              <h4>Telefone para Consultas</h4>
              <p>(11) 98765-4321</p>
              <a href="tel:+5511987654321" class="link-tel">Ligar Agora</a>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fa-solid fa-envelope icon-info"></i>
            <div>
              <h4>E-mail</h4>
              <p>contacto@kallebemax.pt</p>
              <a href="mailto:contacto@kallebemax.pt" class="link-email">Enviar E-mail</a>
            </div>
          </div>

          <div class="info-item">
            <i class="fa-solid fa-clock icon-info"></i>
            <div>
              <h4>Horário de Atendimento</h4>
              <p>Segunda a Sexta: 9h00 às 18h00</p>
              <p class="nota">Atendimento Online 24/7 (via agendamento)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Estado do formulário
const formData = reactive({
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: ''
});

// Estado de submissão
const isSubmitting = ref(false);
const submitStatus = ref(null); // 'success', 'error', or null

const submitForm = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  // 1. Simulação de Submissão (Em um projeto real, você faria um POST para um endpoint aqui)
  // Exemplo de como usar a API fetch (se fosse um projeto em produção):
  /*
  try {
    const response = await fetch('/api/send-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      submitStatus.value = 'success';
      // Limpar formulário após sucesso
      Object.keys(formData).forEach(key => formData[key] = '');
    } else {
      submitStatus.value = 'error';
    }
  } catch (error) {
    submitStatus.value = 'error';
    console.error('Submission error:', error);
  } finally {
    isSubmitting.value = false;
    // Opcional: remover feedback após alguns segundos
    setTimeout(() => submitStatus.value = null, 5000);
  }
  */

  // Simulação de delay para fins de demonstração
  await new Promise(resolve => setTimeout(resolve, 2000)); 

  // Simulação de sucesso (pode alternar para 'error' para testar)
  const simulationSuccess = true; 
  
  if (simulationSuccess) {
    submitStatus.value = 'success';
    // Limpar formulário
    Object.keys(formData).forEach(key => formData[key] = '');
  } else {
    submitStatus.value = 'error';
  }

  isSubmitting.value = false;
  // Opcional: remover feedback após alguns segundos
  setTimeout(() => submitStatus.value = null, 5000);
};

</script>

<style scoped>
/* =========================================
   🎨 VARIÁVEIS LOCAIS E IMPORTS
   ========================================= */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.contatos-section {
  --primary-color: #e4002b; /* Vermelho - Destaque/Ação */
  --secondary-color: #002b45; /* Azul Escuro - Texto/Estrutura */
  --bg-color: #ffffff; /* Fundo branco */
  padding: 5rem 1.5rem;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: auto;
}

/* =========================================
   📝 TÍTULOS
   ========================================= */
.header-contato {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

/* =========================================
   🧱 LAYOUT PRINCIPAL
   ========================================= */
.contatos-wrapper {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: flex-start; /* Alinha no topo */
}

.form-card {
  flex: 2 1 550px; /* Formulário maior */
  background: #f8f8f8;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-left: 5px solid var(--primary-color);
}

.info-card {
  flex: 1 1 350px; /* Informações menor */
  background: var(--secondary-color);
  color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 10px;
  /* Linha de separação adaptativa */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
}

.form-card .card-title {
    color: var(--secondary-color);
    border-bottom-color: var(--primary-color);
}

/* =========================================
   ✉️ FORMULÁRIO DE CONTATO
   ========================================= */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--secondary-color);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(228, 0, 43, 0.2);
  outline: none;
}

.submit-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(228, 0, 43, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.submit-button:hover:not(:disabled) {
  background-color: #c90025; /* Vermelho mais escuro */
  transform: translateY(-2px);
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Feedback */
.feedback {
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    font-weight: 600;
    text-align: center;
}

.feedback.success {
    background-color: #e6ffe6;
    color: #008000;
    border: 1px solid #008000;
}

.feedback.error {
    background-color: #ffe6e6;
    color: #cc0000;
    border: 1px solid #cc0000;
}

/* =========================================
   ℹ️ INFORMAÇÕES DE CONTATO
   ========================================= */
.info-card .card-title {
    border-bottom-color: white;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 25px;
  padding: 10px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

.icon-info {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-top: 5px;
  flex-shrink: 0;
}

.info-item h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.info-item p {
  font-size: 1rem;
  margin: 0;
  line-height: 1.4;
}

.info-item a {
    color: var(--primary-color);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;
    display: inline-block;
    margin-top: 5px;
}

.info-item a:hover {
    color: white;
}

.link-map {
    color: #90ee90; /* Verde claro para mapa */
}

.nota {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* =========================================
   📱 RESPONSIVIDADE
   ========================================= */
@media (max-width: 900px) {
  .contatos-wrapper {
    flex-direction: column;
  }
  .form-card, .info-card {
    flex: 1 1 100%;
    min-width: 100%;
  }
  .info-card {
      order: -1; /* Mudar a ordem para que as informações fiquem primeiro em mobile */
      margin-bottom: 20px;
  }
}
</style>