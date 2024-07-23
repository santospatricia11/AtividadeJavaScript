document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    message.textContent = '';

    if (!login || !password || !confirmPassword) {
        message.textContent = 'Todos os campos devem ser preenchidos.';
        return;
    }

    if (password.length < 6 || password.length > 10) {
        message.textContent = 'A senha deve ter entre 8 caracteres.';
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = 'As senhas não coincidem.';
        return;
    }

    message.textContent = 'Formulário enviado com sucesso!';
    message.style.color = 'green';
});
