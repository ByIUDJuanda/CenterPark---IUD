// Selección de elementos del DOM
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Simulación de credenciales válidas
const validCredentials = {
    username: "admin",
    password: "12345"
};

// Manejo del evento submit
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación de credenciales
    if (username === validCredentials.username && password === validCredentials.password) {
        // Redireccionar al sistema (puedes cambiar la URL)
        window.location.href = "vehiculos.html";
    } else {
        // Mostrar mensaje de error
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});
