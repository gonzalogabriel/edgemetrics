# Arquitectura del proyecto

## Estructura de archivos

project-root/
├── .git/                # Repositorio Git inicializado
├── .gitignore          # Archivos ignorados por Git
├── .deployment         # Script de despliegue para Azure
├── azure-pipelines.yml # Pipeline CI/CD para Azure DevOps
├── web.config          # Configuración IIS/Node.js para Azure
├── SuperAgent/         # Sistema de gestión de contexto
│   ├── tech-structure.md
│   ├── project-brief.md
│   └── Context/
│       ├── project-architecture.md
│       └── iterations-log.md
├── index.js            # Servidor Express con API de Google Sheets
├── package.json        # Configuración npm con dependencias actualizadas
├── package-lock.json   # Lock file de dependencias
├── public/             # Archivos estáticos
│   ├── styles.css     # Estilos CSS con sección de datos
│   └── assets/        # Recursos adicionales
├── views/              # Templates HTML
│   └── index.html     # Landing page con datos en tiempo real
└── README.md          # Documentación completa para Azure

## Esquema de dependencias

index.js (Express Server)
  ├── express (framework web)
  ├── path (rutas de archivos)
  ├── axios (cliente HTTP para Google Sheets)
  ├── express.json() (middleware JSON)
  ├── static middleware
  │   └── public/ (archivos estáticos)
  │       ├── styles.css
  │       └── assets/
  ├── GET / (ruta principal)
  ├── GET /health (health check)
  └── GET /api/data (API Google Sheets)
      └── Google Sheets CSV API
          └── https://docs.google.com/spreadsheets/.../export?format=csv

views/index.html
  ├── public/styles.css (estilos)
  └── JavaScript (carga datos de /api/data)

## Descripción de módulos

### index.js ✅ COMPLETADO Y ACTUALIZADO
- **Propósito**: Servidor Express principal con API de datos
- **Función**: Servir la landing page, archivos estáticos y datos de Google Sheets
- **Puerto**: process.env.PORT || 3000 (compatible con Azure)
- **Endpoints**: 
  - GET / (página principal con datos en tiempo real)
  - GET /health (health check)
  - GET /api/data (datos de Google Sheets en JSON)
- **Características**: 
  - Graceful shutdown, logging, middleware estático
  - Integración con Google Sheets API
  - Configuración para Azure App Service
  - Parsing de CSV automático

### views/index.html ✅ COMPLETADO Y ACTUALIZADO
- **Propósito**: Landing page principal con contenido educativo y datos en tiempo real
- **Contenido**: 
  - Título: "✅ Se cumplió el objetivo de la clase de Cloud"
  - Explicación completa de PaaS vs IaaS/SaaS
  - Ventajas: acelera desarrollo, reduce operaciones, escalabilidad
  - Riesgo: vendor lock-in
  - **NUEVO**: Sección de datos de Google Sheets con tabla dinámica
  - Footer académico con nombre "GoGo"
- **Diseño**: Responsive, gradiente azul/morado, tipografía Inter
- **Interactividad**: 
  - Botón GitHub con alert informativo
  - **NUEVO**: Carga automática de datos de Google Sheets
  - **NUEVO**: Tabla responsive con datos de consumo de canal y caches

### public/styles.css ✅ COMPLETADO Y ACTUALIZADO
- **Propósito**: Estilos modernos para la landing page con sección de datos
- **Características**: 
  - Gradiente azul/morado (#667eea → #764ba2)
  - Tipografía Inter desde Google Fonts
  - Responsive design (mobile-first)
  - Animaciones CSS (bounce para checkmark, spinner para loading)
  - Backdrop-filter effects
  - Accessibility support (prefers-reduced-motion, high-contrast)
  - **NUEVO**: Estilos para tabla de datos, loading spinner, error states
- **Layout**: CSS Grid y Flexbox

### README.md ✅ COMPLETADO
- **Propósito**: Documentación completa del proyecto
- **Contenido**: 
  - Instrucciones de instalación y ejecución
  - Explicación de tecnologías usadas
  - Estructura del proyecto
  - Comandos Git recomendados
  - Información educativa sobre PaaS
- **Formato**: Markdown con emojis y estructura clara

### .gitignore ✅ COMPLETADO
- **Propósito**: Excluir archivos innecesarios del repositorio
- **Contenido**: node_modules, logs, archivos IDE, OS files

### web.config ✅ NUEVO - COMPLETADO
- **Propósito**: Configuración para Azure App Service (IIS/Node.js)
- **Características**:
  - Configuración de handlers para iisnode
  - Rewrite rules para SPA y archivos estáticos
  - Configuración de seguridad y MIME types
  - Parámetros optimizados para Azure

### .deployment ✅ NUEVO - COMPLETADO
- **Propósito**: Script de despliegue automático para Azure
- **Comando**: npm install --production
- **Función**: Instalar dependencias en Azure App Service

### azure-pipelines.yml ✅ NUEVO - COMPLETADO
- **Propósito**: Pipeline de CI/CD para Azure DevOps
- **Características**:
  - Build automático en Ubuntu
  - Instalación de dependencias y tests
  - Despliegue automático a Azure App Service
  - Configuración para Node.js 18.x

### package.json ✅ ACTUALIZADO
- **Nuevas dependencias**: axios (cliente HTTP)
- **Nuevos scripts**: azure (optimizado para Azure)
- **Configuración**: Mantiene compatibilidad con Azure

## Nuevas funcionalidades implementadas

### API de Google Sheets
- **Endpoint**: GET /api/data
- **Fuente**: Google Sheets CSV export
- **Formato de respuesta**: JSON con datos parseados
- **Manejo de errores**: Respuestas HTTP apropiadas
- **Performance**: Parsing eficiente de CSV

### Interfaz de datos en tiempo real
- **Carga automática**: Al cargar la página
- **Loading state**: Spinner animado
- **Error handling**: Mensaje de error con botón de reintento
- **Tabla responsive**: Muestra datos de consumo de canal y caches
- **Resumen**: Total de filas y última actualización

### Optimizaciones para Azure
- **Puerto dinámico**: process.env.PORT para Azure
- **Binding**: 0.0.0.0 para Azure App Service
- **Configuración IIS**: web.config optimizado
- **Logging**: Información de entorno y puerto
