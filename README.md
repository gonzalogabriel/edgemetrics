# 📊 EdgeMetrics - Cloud Computing Landing Page

**EdgeMetrics Colombia** es una landing page moderna desarrollada con **Node.js** y **Express** para demostrar los objetivos cumplidos en la clase de Cloud Computing, específicamente sobre **Platform as a Service (PaaS)**. **Optimizada para Azure App Service** con integración de datos en tiempo real para monitoreo de métricas.

## ✨ Características

- 🎨 **Diseño moderno** con gradientes y efectos visuales
- 📱 **Totalmente responsive** (mobile-first)
- ⚡ **Rendimiento optimizado** con Express
- 🎯 **Contenido educativo** sobre PaaS vs IaaS/SaaS
- 📊 **Datos en tiempo real** desde Google Sheets
- 🔧 **Optimizada para Azure** App Service
- ♿ **Accesible** con soporte para lectores de pantalla
- 📈 **Monitoreo de métricas** de canal y caches en tiempo real

## 🎯 ¿Qué es EdgeMetrics?

**EdgeMetrics** es una aplicación web que combina:
- **Educación en Cloud Computing**: Explicación completa de PaaS
- **Monitoreo en tiempo real**: Datos de consumo de canal y caches
- **Visualización moderna**: Tabla responsive con métricas actualizadas
- **Despliegue en la nube**: Optimizada para Azure App Service

Perfecta para demostrar conocimientos en Cloud Computing mientras se monitorean métricas reales de infraestructura.

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js + Express
- **Frontend**: HTML5 + CSS3 + JavaScript Vanilla
- **Base de Datos**: API externa (CSV)
- **Estilos**: CSS Grid, Flexbox, Gradientes
- **Fuentes**: Google Fonts (Inter)
- **Iconos**: Emojis nativos
- **Cloud**: Azure App Service

## 📦 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd landing-page-cloud-computing
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar la aplicación**
```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start

# Modo Azure
npm run azure
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🌐 Despliegue en Azure

### Configuración para Azure App Service

Esta aplicación está **optimizada específicamente para Azure App Service** con las siguientes configuraciones:

#### Archivos de configuración incluidos:
- `web.config`: Configuración para IIS/Node.js en Azure
- `.deployment`: Script de despliegue automático
- `azure-pipelines.yml`: Pipeline de CI/CD

#### Variables de Entorno para Azure:
- `PORT`: Puerto automático asignado por Azure (no configurar manualmente)
- `NODE_ENV`: production (configurado automáticamente)

### Pasos para desplegar en Azure:

1. **Crear Azure App Service**
   - Tipo: Node.js
   - Plan: Básico o superior
   - Región: Cercana a tus usuarios

2. **Configurar el despliegue**
   - Usar Git o Azure DevOps
   - El archivo `web.config` se encarga de la configuración

3. **Verificar el despliegue**
   - La aplicación estará disponible en `https://tu-app.azurewebsites.net`
   - Health check: `https://tu-app.azurewebsites.net/health`
   - API de datos: `https://tu-app.azurewebsites.net/api/data`

### Solución de problemas comunes en Azure:

#### ❌ Error: "Site not loading"
**Solución**: Verificar que el archivo `web.config` esté en la raíz del proyecto

#### ❌ Error: "Port not found"
**Solución**: El código ya está configurado para usar `process.env.PORT`

#### ❌ Error: "Static files not loading"
**Solución**: Verificar que la carpeta `public` esté incluida en el despliegue

## 📊 API Endpoints

- `GET /`: Página principal con datos en tiempo real
- `GET /health`: Health check de la aplicación
- `GET /api/data`: Datos de Google Sheets en formato JSON

### Ejemplo de respuesta de `/api/data`:
```json
{
  "success": true,
  "data": [
    {
      "Capacidad Real (Gigas)": "320",
      "Ocupación en Gigas": "220,80",
      "% Ocupación": "69,0%"
    }
  ],
  "totalRows": 1,
  "timestamp": "2024-09-11T21:30:00.000Z"
}
```

## 📁 Estructura del Proyecto

```
landing-page-cloud-computing/
├── public/                 # Archivos estáticos
│   ├── styles.css         # Estilos principales
│   └── assets/            # Recursos adicionales
├── views/                 # Templates HTML
│   └── index.html         # Página principal con datos
├── SuperAgent/            # Sistema de gestión de contexto
│   ├── tech-structure.md
│   ├── project-brief.md
│   └── Context/
│       ├── project-architecture.md
│       └── iterations-log.md
├── index.js              # Servidor Express con API
├── web.config            # Configuración para Azure
├── .deployment           # Script de despliegue
├── azure-pipelines.yml   # Pipeline CI/CD
├── package.json          # Configuración npm
├── .gitignore           # Archivos ignorados por Git
└── README.md            # Este archivo
```

## 🎯 Contenido Educativo

### ¿Qué es PaaS?
**Platform as a Service (PaaS)** es un modelo de cloud computing donde el proveedor gestiona completamente la infraestructura y el runtime, permitiendo que los desarrolladores se enfoquen únicamente en subir y ejecutar su código.

### Ventajas de PaaS
- 🚀 **Acelera el desarrollo**: Deploy inmediato sin configuración
- ⚙️ **Reduce tareas operativas**: No más gestión de servidores
- 📈 **Escalabilidad fácil**: Escala automáticamente según demanda

### Riesgos
- ⚠️ **Vendor Lock-in**: Dependencia del proveedor puede dificultar migración

## 📊 Integración de Datos

La aplicación incluye funcionalidad para mostrar datos en tiempo real:
- **Visualización**: Tabla responsive con métricas
- **Actualización**: En tiempo real al cargar la página
- **API**: Endpoint `/api/data` para consumo de datos

## 🔧 Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo producción
- `npm run dev`: Ejecuta la aplicación en modo desarrollo
- `npm run azure`: Ejecuta la aplicación optimizada para Azure
- `npm test`: Ejecuta las pruebas (pendiente de implementar)

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `public/styles.css`:
- Gradiente principal: `#667eea` → `#764ba2`
- Color de acento: `#4fd1c7`

### Contenido
El contenido se puede modificar directamente en `views/index.html`.

### Configuración de datos
Para personalizar la fuente de datos, modifica la configuración en `index.js`.

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `package.json` para más detalles.

## 👨‍💻 Autor

**GoGo** - Proyecto académico para la clase de Cloud Computing

---

## 🚀 Comandos Git Recomendados

```bash
# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "feat: inicializar proyecto con landing page Cloud"

# Agregar remote (reemplazar con tu URL)
git remote add origin https://github.com/tu-usuario/tu-repositorio.git

# Push inicial
git push -u origin main
```

## 📚 Recursos Adicionales

- [Documentación de Express.js](https://expressjs.com/)
- [Guía de Node.js](https://nodejs.org/docs/)
- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [API Integration Best Practices](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Cloud Computing Concepts](https://aws.amazon.com/what-is-cloud-computing/)

---

*Desarrollado con ❤️ para demostrar conocimientos en Cloud Computing y Azure*

<!-- Trigger deployment --># edgemetrics
# edgemetrics
