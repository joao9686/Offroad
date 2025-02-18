document.addEventListener('DOMContentLoaded', () => {
  // Referências para o modal de agendamento
  const agendarBtn = document.querySelector('.agendar-btn');
  const modal = document.getElementById('modal-agendamento');
  const closeButton = document.querySelector('.close-button');
  
  // Abre o modal ao clicar no botão "Agendar Now"
  agendarBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
  
  // Fecha o modal ao clicar no "x"
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Fecha o modal ao clicar fora do conteúdo
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Exemplo de tratamento do formulário de agendamento
  const formAgendamento = document.getElementById('form-agendamento');
  formAgendamento.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aqui você pode integrar com uma API ou backend para salvar os dados
    alert("Agendamento realizado com sucesso!");
    modal.style.display = 'none';
    formAgendamento.reset();
  });
});
