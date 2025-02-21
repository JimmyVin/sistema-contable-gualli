import { inventario } from "./sections/inventario.js";
        // Sistema de Secciones Dinámicas
        const sections = {
            inventario,
        };

        // Cargar Sección
        function loadSection(sectionName) {
            const container = document.getElementById('main-container');
            container.innerHTML = sections[sectionName];

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

        // Cargar sección inicial
        loadSection('dashboard');

