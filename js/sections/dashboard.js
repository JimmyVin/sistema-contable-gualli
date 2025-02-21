const dashboard = `
    <!-- Barra de Navegación Responsive -->
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a onclick="loadSection('transactions')">Cajero</a></li>
                    <li><a>Ventas</a></li>
                    <li><a>Reportes</a></li>
                    <li><a>Por Pagar</a></li>
                    <li><a>Por Cobrar</a></li>
                    <li><a onclick="loadSectionDahsboard('inventario')">Inventario</a></li>
                    
                </ul>
            </div>
            <a class="btn btn-ghost text-xl">Sistema Contable</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><a onclick="loadSection('transactions')">Cajero</a></li>
                <li><a onclick="loadSection('dashboard')">Ventas</a></li>
                <li><a>Reportes</a></li>
                <li><a>Por Pagar</a></li>
                <li><a>Por Cobrar</a></li>
                <li><a onclick="loadSection('inventario')">Inventario</a></li>

            </ul>
        </div>
        <div class="navbar-end">
            <button id="theme-toggle" class="btn btn-square btn-ghost">
                <svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor">
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                    <path
                        d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 4.95l-1.414-1.414M6.464 6.464L5.05 5.05m12.728 12.728l-1.414-1.414M6.464 17.536L5.05 19.95" />
                </svg>
            </button>
        </div>
    </div>


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