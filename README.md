This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. run the development server:

```bash
npm install
npm run dev

```

2. run the development api server:

```bash
npm run server 

```

3. run test:

```bash
npm run test

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:3001](http://localhost:3001) with your browser to see the endpoints.


## Que es lo que más me gusto del desarrollo

- El desarrollo del buscador
- La implementación de favoritos

## Puntos de dolor o bugs

- Hubieron discrepancias en el diseño de la version Desktop y la mobile, se procuro seguir lo más posible del diseño pero por cuestiones responsivas, no es completamente exacto.

- Se proponia una navegación por botones pero desde una perspectiva de UX y accesibilidad, decidí dejar solo el scroll nativo, aprovechando los gestor naturales del navegador para tener una experiencia mas intuitiva y fluida como usuario final.

- Integrar json-server por primera vez para manejar persistencia real, Implementé Async Thunks en Redux para centralizar la comunicación con la API. Añadí una capa de normalización de datos antes de enviar las peticiones para asegurar la compatibilidad de los IDs con el indexado de la librería, garantizando estabilidad en las operaciones de lectura y escritura.


## ¿Qué haría con más tiempo?
- Si el proyecto continuara escalando hacia producción, estas serían las siguientes prioridades técnicas:

- Design Tokens: Implementar variables CSS globales o una solución como Tailwind para estandarizar la paleta de colores, espaciados y tipografías.

- Virtualización de Listas: Integrar librerías como react-window para renderizar solo los elementos visibles del DOM, optimizando drásticamente el rendimiento en listas con miles de personajes.

- Internacionalización (i18n): Configurar soporte multi-idioma para escalar la aplicación a otras regiones.

- User Feedback Mejorado: Implementar un sistema de "Toasts" o notificaciones globales para dar feedback visual inmediato sobre errores de conexión o acciones exitosas.

- Caching Avanzado: Implementar estrategias de caché (como TanStack Query) para evitar peticiones redundantes a la API de Rick & Morty al navegar entre vistas.

- Filtros Avanzados: Permitir el filtrado combinado por Estado (Alive/Dead), Especie y Género, además del nombre.

## Autor:

Yaredi Arista - Web Developer


