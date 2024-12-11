// Selección de elementos del DOM
const form = document.querySelector('.form');
const addVehicleLink = document.querySelector('.add-vehicle');
const nextButton = document.querySelector('.btn');
const container = document.querySelector('.container');

// Lista dinámica de vehículos
let additionalVehicles = [];

// Evento: Añadir un nuevo campo de vehículo
addVehicleLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Crear un nuevo input dinámico
    const newVehicleInput = document.createElement('input');
    newVehicleInput.type = 'text';
    newVehicleInput.placeholder = 'Additional license plate';
    newVehicleInput.className = 'input additional-vehicle';
    newVehicleInput.required = false;

    // Agregarlo al formulario
    form.insertBefore(newVehicleInput, addVehicleLink);
    additionalVehicles.push(newVehicleInput);
});

// Evento: Enviar el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío por defecto del formulario

    // Capturar valores del formulario
    const fullName = document.getElementById('fullName').value.trim();
    const carPlate = document.getElementById('carPlate').value.trim();
    const motorcyclePlate = document.getElementById('motorcyclePlate').value.trim();

    // Validación básica
    if (!fullName) {
        alert('Por favor, ingresa tu nombre completo.');
        return;
    }

    // Capturar placas adicionales
    const additionalPlates = additionalVehicles.map((input) => input.value.trim()).filter((plate) => plate !== '');

    // Mostrar los datos capturados en la consola (o integrarlos con el backend)
    console.log('Nombre Completo:', fullName);
    console.log('Placa del Auto:', carPlate || 'N/A');
    console.log('Placa de la Motocicleta:', motorcyclePlate || 'N/A');
    console.log('Placas Adicionales:', additionalPlates);

    // Simulación de registro exitoso
    alert('Cuenta registrada exitosamente. ¡Bienvenido!');
    form.reset(); // Limpia el formulario
    additionalVehicles.forEach((input) => input.remove()); // Elimina campos adicionales
    additionalVehicles = []; // Reinicia la lista de campos dinámicos
});

// Botón de cerrar funcionalidad (opcional)
const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas salir?')) {
        window.close(); // Cierra la pestaña (puede no funcionar en navegadores modernos sin permisos específicos)
    }
});

// Botón de pausa funcionalidad (opcional)
const pauseButton = document.querySelector('.pause-btn');
pauseButton.addEventListener('click', () => {
    alert('Pausa activada. Puedes continuar más tarde.');
});
