function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    clearMessages();
}

function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    clearMessages();
}

function clearMessages() {
    document.getElementById('login-error').textContent = '';
    document.getElementById('login-success').textContent = '';
    document.getElementById('register-error').textContent = '';
    document.getElementById('register-success').textContent = '';
}

// Validação do checkbox de termos
function validarEnvio() {
    const checkbox = document.getElementById('termosCheckbox');
    const button = document.getElementById('register-button');
    button.disabled = !checkbox.checked;
}

// Função de login simulada
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');
    const successDiv = document.getElementById('login-success');
    
    errorDiv.textContent = '';
    successDiv.textContent = '';
    
    if (!email || !password) {
        errorDiv.textContent = 'Por favor, preencha todos os campos.';
        return;
    }
    
    // Simulação de login bem-sucedido
    successDiv.textContent = 'Login realizado com sucesso!';
    // Em um caso real, você faria uma requisição para o servidor aqui
}

// Função de registro simulada
function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const errorDiv = document.getElementById('register-error');
    const successDiv = document.getElementById('register-success');
    
    errorDiv.textContent = '';
    successDiv.textContent = '';
    
    if (!name || !email || !password || !confirmPassword) {
        errorDiv.textContent = 'Por favor, preencha todos os campos.';
        return;
    }
    
    if (password !== confirmPassword) {
        errorDiv.textContent = 'As senhas não coincidem.';
        return;
    }
    
    if (!document.getElementById('termosCheckbox').checked) {
        errorDiv.textContent = 'Você deve aceitar os termos e condições.';
        return;
    }
    
    // Simulação de registro bem-sucedido
    successDiv.textContent = 'Cadastro realizado com sucesso!';
    // Em um caso real, você faria uma requisição para o servidor aqui
}