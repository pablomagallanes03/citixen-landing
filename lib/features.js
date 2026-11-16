// Secciones que la web puede mostrar u ocultar sin borrar su contenido.
//
// 12-nov-2026 (decisión de Pablo): la web se concentra en el mensaje nuevo de Citixen
// (escucha ciudadana e inteligencia colectiva). Créditos Cívicos y la página para vecinos
// quedan ocultos, no borrados: sus páginas, textos y componentes siguen en el repositorio.
// Para volver a mostrarlos, cambiar el valor a true;
// el sitemap se genera solo con las páginas visibles.
//
// Con el interruptor apagado:
//  - no aparecen en la navegación, el pie, la home ni /plataforma;
//  - sus rutas redirigen de forma temporal (next.config.js), nunca permanente, para que
//    los navegadores no guarden la redirección si se vuelven a mostrar.

// CommonJS para que next.config.js también pueda leerlo.
//
// 16-nov-2026 (decisión de Pablo): /plataforma y /primer-ciclo se retiran temporalmente con la
// home «Escucha y Decide». Redirigen (temporal) a la sección equivalente de la home:
// /plataforma → /#escucha y /primer-ciclo → /#demostracion (conserva ?interes=).
module.exports = {
  SHOW_CIVIC_CREDITS: false,
  SHOW_NEIGHBORS_PAGE: false,
  SHOW_PLATFORM_PAGE: false,
  SHOW_FIRST_CYCLE_PAGE: false,
}
