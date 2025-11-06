# Documentación de la Aplicación: Página Personal RMV

## Descripción General
Esta es una página web personal para Ricardo J. Moo Vargas, desarrollada como una Single Page Application (SPA) utilizando Lit (un framework para Web Components), TypeScript y Vite. La aplicación presenta información personal, proyectos, habilidades y recursos, con un diseño moderno y responsivo.

## Tecnologías Utilizadas
- **Lit**: Framework para crear Web Components reutilizables.
- **TypeScript**: Lenguaje de programación tipado para mayor robustez.
- **Vite**: Herramienta de build y desarrollo rápido.
- **CSS**: Estilos personalizados con variables CSS para temas y responsividad.
- **HTML**: Estructura básica.

## Estructura del Proyecto
```
c:\Users\Eltra\Repos\Pagina-Personal-RMV\
├── docker-compose..yml  # Configuración para Docker (nota: nombre con doble punto)
├── Dockerfile           # Imagen Docker para el proyecto
├── docs.md              # Este archivo de documentación
├── index.html           # Punto de entrada HTML
├── nginx.conf           # Configuración de Nginx para despliegue
├── package.json         # Dependencias y scripts
├── run_class.js         # Script de prueba (posiblemente para testing)
├── tsconfig.json        # Configuración de TypeScript
├── public/              # Archivos estáticos públicos
└── src/
    ├── App.ts           # Componente principal (router)
    ├── index.css        # Estilos globales
    ├── vite-env.d.ts    # Tipos para Vite
    ├── apps_cores/      # Clases auxiliares (CalculatorClass, RouterClass)
    ├── assets/          # Recursos estáticos (fuentes, imágenes)
    ├── Components/      # Componentes reutilizables
    │   ├── Buttons/
    │   │   └── SimpleButton.ts
    │   ├── ContactsBar.ts
    │   ├── Dropdowns/
    │   │   └── DropdownMenu.ts
    │   ├── NavBar.ts
    │   ├── SimpleCard.ts
    │   └── SubComponents/
    │       ├── S-Image.ts
    │       └── S-Label.ts
    └── pages/
        └── Home/
            ├── InfoSection.ts     # Sección de información personal
            ├── ProjectsSection.ts # Sección de proyectos y habilidades
            └── ResourcesSection.ts # Sección de recursos (CV)
```

## Cómo Funciona la Aplicación
La aplicación es una SPA basada en Web Components. El componente principal es `AppRouter` (definido en `App.ts`), que actúa como un router simple renderizando secciones estáticas.

### Componentes Principales
- **AppRouter (`App.ts`)**: 
  - Renderiza la estructura general: header (NavBar), main (secciones), footer.
  - Usa CSS Grid para layout responsivo.
  - Importa y registra todos los componentes necesarios.

- **NavBar (`Components/NavBar.ts`)**:
  - Barra de navegación fija con logo SVG, enlaces de navegación y un botón de menú.
  - Estilos con fondo translúcido y blur para efecto glassmorphism.

- **InfoSection (`pages/Home/InfoSection.ts`)**:
  - Muestra información personal: imagen de perfil, nombre, descripción.
  - Usa `S-Image` para la imagen circular.
  - Diseño responsivo con grid.

- **ProjectsSection (`pages/Home/ProjectsSection.ts`)**:
  - Sección dividida en habilidades (skills) y proyectos.
  - Usa `S-Label` para habilidades y `SimpleCard` para proyectos.
  - Layout grid responsivo.

- **ResourcesSection (`pages/Home/ResourcesSection.ts`)**:
  - Contiene un botón animado para descargar/ver CV.
  - Enlace a carpeta de Google Drive.
  - Animaciones CSS complejas para el botón de descarga.

- **ContactsBar (`Components/ContactsBar.ts`)**: 
  - Componente para contactos (parece incompleto en el código actual, no se renderiza).

### Otros Componentes
- **SimpleButton**: Botón reutilizable.
- **SimpleCard**: Tarjeta para proyectos.
- **S-Image**: Imagen con opciones de borde y radio.
- **S-Label**: Etiqueta para habilidades.
- **DropdownMenu**: Menú desplegable.

### Estilos Globales (`index.css`)
- Variables CSS para colores, fuentes, etc.
- Fuente personalizada: Roboto Mono.
- Fondo animado con patrón de grid.
- Normalización de elementos (h1, p sin márgenes).
- Responsividad básica.

## Implementación y Desarrollo

### Requisitos Previos
- Node.js (versión compatible con las dependencias).
- npm o yarn para gestión de paquetes.

### Instalación
1. Clona el repositorio:
   ```
   git clone https://github.com/ricardoMogas/Pagina-Personal-RMV.git
   cd Pagina-Personal-RMV
   ```

2. Instala dependencias:
   ```
   npm install
   ```

### Desarrollo
1. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```
   Esto abre el proyecto en `http://localhost:5173` (puerto por defecto de Vite).

2. El proyecto usa hot reload, así que los cambios se reflejan automáticamente.

### Build para Producción
1. Construye el proyecto:
   ```
   npm run build
   ```
   Esto genera archivos optimizados en la carpeta `dist`.

2. Previsualiza la build:
   ```
   npm run preview
   ```

### Testing
- Ejecuta tests (si hay):
  ```
  npm test
  ```
  Nota: `run_class.js` parece ser un script personalizado, verifica su contenido.

### Despliegue
- **Docker**: Usa `Dockerfile` y `docker-compose..yml` para contenedorizar la aplicación.
- **Nginx**: Configurado en `nginx.conf` para servir la aplicación.

### Desarrollo de Componentes
- Los componentes heredan de `LitElement`.
- Usan decoradores `@customElement` para registrar tags personalizados.
- Templates con `html` template literal.
- Estilos con `css` template literal.
- Para agregar nuevos componentes:
  1. Crea un archivo `.ts` en `src/Components/` o subcarpeta apropiada.
  2. Importa en `App.ts` si es necesario.
  3. Registra el tag en el template de `App.ts`.

### Notas Importantes
- La aplicación no tiene routing dinámico; todas las secciones se renderizan estáticamente.
- El diseño es responsivo con media queries.
- Usa CSS variables para temas consistentes.
- Algunos componentes como `ContactsBar` parecen incompletos o no utilizados.
- Verifica que las rutas de assets (imágenes, fuentes) sean correctas en producción.

### Próximos Pasos Sugeridos
- Completar componentes incompletos (e.g., ContactsBar).
- Agregar routing dinámico si se expanden las páginas.
- Implementar contenido real en ProjectsSection (actualmente placeholders).
- Añadir tests unitarios con herramientas como Vitest.
- Optimizar para SEO y accesibilidad.
