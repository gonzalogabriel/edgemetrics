# Landing Page Moderna - Proyecto Cloud Computing

## Objetivo Principal
Crear una landing page moderna que demuestre el cumplimiento de los objetivos de la clase de Cloud Computing, con enfoque educativo en PaaS (Platform as a Service).

## Requerimientos Funcionales

### 1. Mensaje Principal
- Título prominente: "✅ Se cumplió el objetivo de la clase de Cloud"
- Diseño llamativo y celebratorio

### 2. Contenido Educativo - PaaS
- **Definición**: Modelo de cloud computing donde el proveedor gestiona infraestructura y runtime
- **Comparación con otros modelos**:
  - vs IaaS: No necesitas manejar SO y runtime
  - vs SaaS: Tienes control sobre el código y configuración
- **Ventajas clave**:
  - Acelera el desarrollo
  - Reduce tareas operativas
  - Permite escalabilidad fácil
- **Riesgos**: Posible vendor lock-in

### 3. Especificaciones de Diseño
- **Colores**: Gradiente azul/morado moderno
- **Tipografía**: Inter o Roboto (fuentes modernas)
- **CTA**: Botón "Ver Proyecto en GitHub" (llamativo)
- **Layout**: Responsive y centrado

### 4. Footer Académico
- Nombre del autor
- Texto: "Proyecto académico – Clase de Cloud"

## Requerimientos Técnicos

### Backend
- **Servidor**: Express.js
- **Puerto**: 3000 (localhost:3000)
- **Endpoint principal**: GET / (servir landing page)
- **Archivos estáticos**: CSS, imágenes, fuentes

### Frontend
- **HTML5**: Semántico y accesible
- **CSS3**: Gradientes, flexbox/grid, responsive
- **JavaScript**: Mínimo, solo para interacciones básicas

### Estructura del Proyecto
```
project-root/
├── index.js              # Servidor Express
├── public/               # Archivos estáticos
│   ├── styles.css       # Estilos principales
│   └── assets/          # Imágenes, fuentes
├── views/               # Templates HTML
│   └── index.html       # Landing page principal
├── package.json         # Dependencias npm
└── README.md           # Documentación

```

### Git y Deploy
- **Inicialización**: git init
- **Commit inicial**: "feat: inicializar proyecto con landing page Cloud"
- **Documentación**: README.md con instrucciones de instalación
- **Deploy local**: npm start → http://localhost:3000

## Casos de Usuario

### Usuario Principal: Profesor/Evaluador
1. Accede a localhost:3000
2. Ve el mensaje de cumplimiento del objetivo
3. Lee la explicación teórica de PaaS
4. Puede acceder al código en GitHub

### Usuario Secundario: Estudiante
1. Clona el repositorio
2. Ejecuta npm install && npm start
3. Ve la landing page funcionando
4. Aprende sobre PaaS mediante el contenido

## Criterios de Éxito
- ✅ Landing page carga en localhost:3000
- ✅ Diseño moderno y profesional
- ✅ Contenido teórico completo y correcto
- ✅ Código bien estructurado y documentado
- ✅ Listo para subir a GitHub
