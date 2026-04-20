const form = document.getElementById('form-contato');
const alerta = document.getElementById('sucesso');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alerta.textContent = '⚠️ Por favor, preencha todos os campos.';
        alerta.className = 'mt-2 p-3 rounded-lg text-sm font-medium bg-red-900 text-red-200 border border-red-800';
        return;
    }

    alerta.textContent = `✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    alerta.className = 'mt-2 p-3 rounded-lg text-sm font-medium bg-green-900 text-green-200 border border-green-800';

    form.reset();
});
