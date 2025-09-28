// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  // 1. Seleccionar el botón del menú hamburguesa y el menú
  const boton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');

  // 2. Cuando se hace clic en el botón, mostrar u ocultar el menú y animar el hamburguesa
  boton.addEventListener('click', () => {
    menu.classList.toggle('active');
    boton.classList.toggle('open'); // Para la animación de "X"
  });

  // 3. Manejar clics en enlaces con anclaje (#) para desplazamiento suave
  const enlaces = document.querySelectorAll('a[href^="#"]');
  enlaces.forEach((enlace) => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault(); // Evita el salto instantáneo del navegador
      const targetId = enlace.getAttribute('href');
      if (targetId && targetId !== '#') { // Evita errores si href es solo "#"
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight; // Altura dinámica del header
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - headerHeight, // Compensa la navbar fija
            behavior: 'smooth', // Desplazamiento suave
          });
        }
      }

      // Cierra el menú en móviles después de hacer clic en un enlace
      menu.classList.remove('active');
      boton.classList.remove('open');
    });
  });
});