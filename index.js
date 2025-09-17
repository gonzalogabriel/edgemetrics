// Express server for Cloud Computing landing page
// Servidor Express para landing page de Cloud Computing

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
// Azure App Service usa la variable PORT del entorno, fallback a 3000 para desarrollo local
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Static files middleware - Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Main route - Ruta principal para servir la landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Health check endpoint - Endpoint de verificación de salud
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Cloud Computing Landing Page is running',
        timestamp: new Date().toISOString()
    });
});

// Endpoint para obtener datos de Google Sheets
app.get('/api/data', async (req, res) => {
    try {
        // URL de la hoja de cálculo en formato CSV para fácil parsing
        const sheetUrl = 'https://docs.google.com/spreadsheets/d/1nIs97X-ozSiwWUPcJyFGnnnt2KGfyNAStZzr-gY9nCY/export?format=csv&gid=0';
        
        const response = await axios.get(sheetUrl);
        const csvData = response.data;
        
        // Parsear CSV básico (primera fila como headers)
        const lines = csvData.split('\n');
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        const data = [];
        
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim()) {
                const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
                const row = {};
                headers.forEach((header, index) => {
                    row[header] = values[index] || '';
                });
                data.push(row);
            }
        }
        
        res.json({
            success: true,
            data: data,
            totalRows: data.length,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error.message);
        res.status(500).json({
            success: false,
            error: 'Error al obtener datos de Google Sheets',
            message: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Start server - Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📖 Cloud Computing Landing Page ready!`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown - Cierre elegante del servidor
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server gracefully...');
    process.exit(0);
});
