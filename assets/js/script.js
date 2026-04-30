// ================================
//   TABS - NAVEGAÇÃO
// ================================

const tabNames = ['sobre', 'projetos', 'habilidades', 'contato'];

function switchTab(name) {
  // Atualiza os botões
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    const active = tabNames[i] === name;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active);
  });

  // Atualiza os painéis
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');

  // Anima as barras ao entrar em Habilidades
  if (name === 'habilidades') animateBars();
}

// ================================
//   HABILIDADES - ANIMAÇÃO DAS BARRAS
// ================================

function animateBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = bar.dataset.width + '%';
    }, 50);
  });
}

// Anima ao carregar a página (caso a aba Habilidades seja a padrão)
window.addEventListener('load', () => {
  animateBars();
});
