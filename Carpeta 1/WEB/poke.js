// Mostrar fecha y hora actual
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('datetime').textContent = now.toLocaleDateString('es-ES', options);
}

// Mostrar año actual
document.getElementById('current-year').textContent = new Date().getFullYear();

// Actualizar cada segundo
setInterval(updateDateTime, 1000);
updateDateTime(); // Llamada inicial