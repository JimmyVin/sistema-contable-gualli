const dashboard = `



    <!-- Contenedor Dinámico -->
    <section id="section-container" class="container mx-auto p-4"></section>



`;

// Sistema de Secciones Dinámicas
const sectionsDashboard = {
    inventario,
};

// Cargar Sección
function loadSectionDahsboard(sectionName) {
    const container = document.getElementById('section-container');
    container.innerHTML = sectionsDashboard[sectionName];

    // Actualizar enlaces activos
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === sectionName);
    });
}

// Event Listeners para navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        loadSection(link.dataset.section);
    });
});