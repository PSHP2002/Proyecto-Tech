const fs = require('fs');
const path = require('path');

const estructura = {
    "restaurante_comida_rapida": {
        "data": ["menu.json", "empleados.json", "sucursales.json"],
        "public": ["index.html", "styles.css"],
        "scripts": ["app.js"],
        "root_files": ["server.js", "package.json", "README.md"]
    }
};

function crearEstructura(basePath, estructura) {
    for (const [carpeta, archivos] of Object.entries(estructura)) {
        const rutaCarpeta = path.join(basePath, carpeta);
        
        if (!fs.existsSync(rutaCarpeta)) {
            fs.mkdirSync(rutaCarpeta, { recursive: true });
            console.log(`📁 Carpeta creada: ${rutaCarpeta}`);
        }

        for (const subCarpeta in archivos) {
            const rutaSubCarpeta = path.join(rutaCarpeta, subCarpeta);
            
            if (!fs.existsSync(rutaSubCarpeta)) {
                fs.mkdirSync(rutaSubCarpeta, { recursive: true });
                console.log(`📂 Carpeta creada: ${rutaSubCarpeta}`);
            }

            archivos[subCarpeta].forEach(archivo => {
                const rutaArchivo = path.join(rutaSubCarpeta, archivo);
                if (!fs.existsSync(rutaArchivo)) {
                    fs.writeFileSync(rutaArchivo, "", 'utf8');
                    console.log(`📄 Archivo creado: ${rutaArchivo}`);
                }
            });
        }
    }
}

// Ejecutar la función
crearEstructura(__dirname, estructura);
