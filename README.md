# Te Amo 3 Millones - Página Web Romántica

Una hermosa página web dedicada a expresar amor con el tema de "Flores Amarillas", inspirada en la popular canción. Este proyecto está diseñado para ser alojado en GitHub Pages.

## Características

- Diseño responsivo y atractivo
- Animaciones y efectos visuales
- Reproductor de música integrado
- Galería de imágenes con vista modal
- Efectos de partículas interactivas
- Mensajes románticos cambiantes
- Efectos de confeti al interactuar

## Tecnologías utilizadas

- HTML5
- CSS3 (con animaciones y transiciones)
- JavaScript (vanilla)
- Particles.js para efectos de fondo
- Font Awesome para iconos
- Google Fonts para tipografías
- Animate.css para animaciones

## Estructura del proyecto

```
te-amo-3-millones/
│
├── index.html                # Página principal
├── README.md                 # Documentación
│
└── assets/
    ├── css/
    │   └── styles.css        # Estilos CSS
    │
    ├── js/
    │   └── main.js           # JavaScript principal
    │
    ├── images/
    │   └── preview.jpg       # Imagen de vista previa para redes sociales
    │
    └── fonts/                # Carpeta para fuentes personalizadas (opcional)
```

## Cómo usar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/te-amo-3-millones.git
   cd te-amo-3-millones
   ```

2. Personaliza las imágenes:
   - Reemplaza `assets/images/preview.jpg` con tu propia imagen de vista previa
   - Actualiza las URLs de las imágenes en `assets/js/main.js`

3. Personaliza los mensajes:
   - Edita el array de mensajes en `assets/js/main.js`

4. Personaliza la música:
   - Actualiza la URL de la canción en `assets/js/main.js`

5. Prueba localmente:
   - Abre `index.html` en tu navegador

6. Despliega en GitHub Pages (ver instrucciones abajo)

## Personalización

### Imágenes
El proyecto utiliza imágenes de Unsplash por defecto. Para usar tus propias imágenes:

1. Sube tus imágenes a la carpeta `assets/images/`
2. Actualiza las referencias en el archivo `assets/js/main.js`:
   ```javascript
   const images = [
     {
       src: 'assets/images/tu-imagen-1.jpg',
       caption: 'Tu descripción'
     },
     // Más imágenes...
   ];
   ```

### Música
Para usar tu propia música:

1. Sube tu archivo MP3 a la carpeta `assets/media/` (crea la carpeta si no existe)
2. Actualiza la referencia en `assets/js/main.js`:
   ```javascript
   audio.src = 'assets/media/tu-cancion.mp3';
   ```

### Mensajes
Edita el array de mensajes en `assets/js/main.js`:
```javascript
const mensajes = [
  "Tu mensaje personalizado 1",
  "Tu mensaje personalizado 2",
  // Más mensajes...
];
```

### Colores
Puedes cambiar el esquema de colores modificando las variables CSS en `assets/css/styles.css`:
```css
:root {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
  --background-color: #tu-color;
  /* Más variables... */
}
```

## Despliegue en GitHub Pages

### Método 1: Usando la interfaz web de GitHub

1. Sube tu código a un repositorio en GitHub
2. Ve a la pestaña "Settings" de tu repositorio
3. Navega a la sección "Pages" en el menú lateral
4. En "Source", selecciona la rama "main" (o "master")
5. Haz clic en "Save"
6. Espera unos minutos y tu sitio estará disponible en `https://tuusuario.github.io/te-amo-3-millones/`

### Método 2: Usando GitHub CLI

1. Asegúrate de tener instalado [GitHub CLI](https://cli.github.com/)
2. Ejecuta los siguientes comandos:
   ```bash
   # Inicializa Git si aún no lo has hecho
   git init
   git add .
   git commit -m "Primer commit"
   
   # Crea un repositorio en GitHub y sube el código
   gh repo create te-amo-3-millones --public --source=. --push
   
   # Configura GitHub Pages
   gh api repos/tuusuario/te-amo-3-millones/pages -F source.branch=main -F source.path=/
   ```

3. Tu sitio estará disponible en `https://tuusuario.github.io/te-amo-3-millones/`

## Solución de problemas comunes

### Las imágenes no se cargan
- Verifica que las rutas a las imágenes sean correctas
- Si usas imágenes locales, asegúrate de que estén en la carpeta correcta
- Para imágenes externas, verifica que las URLs sean accesibles

### La música no se reproduce
- Algunos navegadores bloquean la reproducción automática de audio
- Asegúrate de que el usuario interactúe con la página antes de reproducir audio
- Verifica que el formato del archivo de audio sea compatible (MP3 es recomendado)

### El sitio no se ve bien en dispositivos móviles
- Prueba el sitio en diferentes dispositivos y navegadores
- Ajusta los estilos CSS en la sección de media queries

## Licencia

Este proyecto está disponible como código abierto bajo la licencia MIT.

---

Hecho con ❤️ para expresar amor de una manera especial.