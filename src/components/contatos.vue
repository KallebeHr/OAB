<template>
  <div class="contato-container">
    <!-- Lado Esquerdo -->
    <div class="painel-esquerdo">
      <div class="cabecalho-esquerdo">
        <h1>Escritório LOGO</h1>
        <p>Excelência, ética e compromisso com seus direitos.</p>
      </div>

      <div class="circulo-avatares">
        <div class="fundo-circulos">
          <img v-for="(avatar, index) in avatares" :key="index" :src="avatar" class="avatar" :class="`avatar-${index + 1}`" />
        </div>
      </div>

      <div class="redes-sociais">
        <a href="#"><i class="fab fa-facebook-f"></i> /EscritorioAlmeida</a>
        <a href="#"><i class="fab fa-linkedin-in"></i> /AlmeidaAdv</a>
        <a href="#"><i class="fab fa-instagram"></i> @almeida.adv</a>
      </div>
    </div>

    <!-- Lado Direito -->
    <div class="painel-direito">
      <h2>Entre em contato</h2>
      <p>Preencha os dados abaixo e retornaremos em até 24 horas úteis.</p>

      <form @submit.prevent="enviarMensagem">
        <div class="linha">
          <input type="text" placeholder="Nome" v-model="form.nome" required />
          <input type="text" placeholder="Sobrenome" v-model="form.sobrenome" required />
        </div>

        <input type="email" placeholder="Endereço de e-mail" v-model="form.email" required />
        <input type="tel" placeholder="(DDD) Número de telefone" v-model="form.numero" required />

        <div class="linha">
          <select v-model="form.tipoCliente" required>
            <option value="">Pessoa Física</option>
            <option>Pessoa Jurídica</option>
          </select>

          <select v-model="form.estado" required >
            <option value="">Piauí</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Outro estado</option>
          </select>
        </div>

        <textarea placeholder="Escreva sua mensagem..." v-model="form.mensagem" required></textarea>

        <label class="checkbox-wrapper">
          <input type="checkbox" v-model="form.concorda" required />
          <span class="label">Concordo com a <a href="#">política de privacidade</a></span>
          <div class="checkmark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 6L9 17L4 12" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </label>

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nome: '',
  sobrenome: '',
  email: '',
  numero: '',
  tipoCliente: '',
  estado: '',
  mensagem: '',
  concorda: false,
})

const enviarMensagem = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

  if (form.value.nome.length < 2) return alert('Nome deve ter pelo menos 2 letras.')
  if (form.value.sobrenome.length < 2) return alert('Sobrenome deve ter pelo menos 2 letras.')
  if (!emailRegex.test(form.value.email)) return alert('E-mail inválido.')
  if (!telefoneRegex.test(form.value.numero)) return alert('Número de telefone inválido.')
  if (form.value.mensagem.length < 10) return alert('Mensagem muito curta.')

  console.log('Mensagem enviada:', form.value)
  alert('Mensagem enviada com sucesso!')
}
  
const avatares = [
  'https://i.pravatar.cc/100?img=10',
  'https://i.pravatar.cc/100?img=11',
  'https://i.pravatar.cc/100?img=12',
  'https://i.pravatar.cc/100?img=13',
  'https://i.pravatar.cc/100?img=14',
  'https://i.pravatar.cc/100?img=15',
  'https://i.pravatar.cc/100?img=16',
]
</script>

<style scoped>
.contato-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

/* Estilização mantida do seu código, com adições */
.painel-esquerdo {
  flex: 1;
  background: #f4f4f4;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cabecalho-esquerdo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
}
.cabecalho-esquerdo p {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
}

.circulo-avatares {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fundo-circulos {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}
.avatar {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}
.avatar-1 { top: 0%; left: 50%; transform: translate(-50%, -50%); }
.avatar-2 { top: 25%; left: 90%; transform: translate(-50%, -50%); }
.avatar-3 { top: 70%; left: 100%; transform: translate(-50%, -50%); }
.avatar-4 { bottom: 0%; left: 60%; transform: translate(-50%, 50%); }
.avatar-5 { bottom: 15%; left: 15%; transform: translate(-50%, 50%); }
.avatar-6 { top: 30%; left: 0%; transform: translate(-50%, -50%); }
.avatar-7 { top: 50%; left: 50%; transform: translate(-50%, -50%); }

.redes-sociais {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.85rem;
}
.redes-sociais a {
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Painel direito */
.painel-direito {
  flex: 2;
  background: #fc1f1f;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.painel-direito h2 {
  font-size: 1.6rem;
  color: #1e1e1e;
  font-weight: bold;
}
.painel-direito p {
  font-size: 0.95rem;
  color: #444;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.linha {
  display: flex;
  gap: 1rem;
}
input, select, textarea {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;
  font-size: 0.95rem;
  width: 100%;
  color: black;
}
textarea {
  min-height: 100px;
  resize: vertical;
}
::placeholder {
  color: #333;
}
/* From Uiverse.io by 3HugaDa3 */ 
.checkbox-wrapper {
  --checkbox-size: 25px;
  --checkbox-color: whiter;
  --checkbox-shadow: rgba(0, 255, 136, 0.3);
  --checkbox-border: rgba(0, 255, 136, 0.7);
  display: flex;
  align-items: center;
display: flex;
flex-direction: column;
  cursor: pointer;
  padding: 10px;
}

.checkbox-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-wrapper .checkmark {
  position: relative;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border: 2px solid var(--checkbox-border);
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 15px var(--checkbox-shadow);
  overflow: hidden;
}

.checkbox-wrapper .checkmark::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--checkbox-color), #f4f4f4);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: scale(0) rotate(-45deg);
}

.checkbox-wrapper input:checked ~ .checkmark::before {
  opacity: 1;
  transform: scale(1) rotate(0);
}

.checkbox-wrapper .checkmark svg {
  width: 0;
  height: 0;
  color: #1a1a1a;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
}

.checkbox-wrapper input:checked ~ .checkmark svg {
  width: 18px;
  height: 18px;
  transform: rotate(360deg);
}

.checkbox-wrapper:hover .checkmark {
  border-color: var(--checkbox-color);
  transform: scale(1.1);
  box-shadow:
    0 0 20px var(--checkbox-shadow),
    0 0 40px var(--checkbox-shadow),
    inset 0 0 10px var(--checkbox-shadow);
}

.checkbox-wrapper input:checked ~ .checkmark {
  animation: pulse 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 20px var(--checkbox-shadow);
  }
  50% {
    transform: scale(0.9);
    box-shadow:
      0 0 30px var(--checkbox-shadow),
      0 0 50px var(--checkbox-shadow);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 20px var(--checkbox-shadow);
  }
}

.checkbox-wrapper .label {
  margin-left: 15px;
  font-family: "Segoe UI", sans-serif;
  color: var(--checkbox-color);
  font-size: 18px;
  text-shadow: 0 0 10px var(--checkbox-shadow);
  opacity: 0.9;
  transition: all 0.3s;
}

.checkbox-wrapper:hover .label {
  opacity: 1;
  transform: translateX(5px);
}

/* Glowing dots animation */
.checkbox-wrapper::after,
.checkbox-wrapper::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--checkbox-color);
  opacity: 0;
  transition: all 0.5s;
}

.checkbox-wrapper::before {
  left: -10px;
  top: 50%;
}

.checkbox-wrapper::after {
  right: -10px;
  top: 50%;
}

.checkbox-wrapper:hover::before {
  opacity: 1;
  transform: translateX(-10px);
  box-shadow: 0 0 10px var(--checkbox-color);
}

.checkbox-wrapper:hover::after {
  opacity: 1;
  transform: translateX(10px);
  box-shadow: 0 0 10px var(--checkbox-color);
}
button {
  background: #f4f4f4;
  color: black;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover {
  background: #333;
}
select {
  background-color: white;
  color: #333;
  border: 1px solid #ccc;
}
option {
  background-color: white;
  color: #333;
}

/* Responsivo */
@media (max-width: 768px) {
  .contato-container {
    flex-direction: column;
  }

  .painel-esquerdo {
    display: none;
  }

  .painel-direito {
    padding: 2rem;
  }

  .linha {
    flex-direction: column;
  }

  input, select, textarea {
    font-size: 1rem;
  }

  .painel-direito h2 {
    font-size: 1.4rem;
  }

  .painel-direito p {
    font-size: 0.9rem;
  }

  button {
    font-size: 1rem;
  }
}
</style>
