"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
// Ruta para el archivo 404.html
var outputPath = (0, path_1.join)(__dirname, 'dist', '404.html');
// Contenido del archivo 404.html
var content = "<!DOCTYPE html>\n<html>\n<head>\n    <meta http-equiv=\"refresh\" content=\"0; url=/ClassFinder/\" />\n    <script>\n        window.location.replace(\"/ClassFinder/\");\n    </script>\n</head>\n<body>\n</body>\n</html>";
try {
    (0, fs_1.writeFileSync)(outputPath, content);
    console.log('404.html creado automáticamente.');
}
catch (error) {
    console.error('Error al crear el archivo 404.html:', error);
}
