// Botão final
const botaoFinal = document.getElementById('botao-final');
const finalDiv = document.getElementById('final');

botaoFinal.addEventListener('click', () => {
  finalDiv.classList.remove('hidden');
  botaoFinal.style.display = 'none';
});