// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas de fondo
    initParticles();
    
    // Actualizar el año automáticamente
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Añadir transición para el mensaje
    const mensajeElement = document.getElementById('mensaje');
    if (mensajeElement) {
        mensajeElement.style.transition = 'opacity 0.3s ease';
    }
    
    // Inicializar galería de imágenes
    initGallery();
    
    // Configurar eventos
    setupEvents();
});

// Inicializar partículas de fondo
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: ["#ff5733", "#ffbd33", "#e91e63"] },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ff5733",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
}

// Configurar eventos
function setupEvents() {
    // Cambiar mensaje al hacer clic en el botón
    const mensajes = [
        "Aunque no tenga dinero, siempre tendrás tus flores amarillas",
        "Cada flor amarilla representa un 'te quiero' que te doy",
        "Las flores amarillas son como mi amor por ti: brillantes y eternas",
        "Mi corazón florece como girasoles cuando pienso en ti",
        "Estas flores amarillas son el reflejo del sol que ilumina mi vida: tú",
        "Como las flores amarillas que buscan el sol, yo siempre te busco a ti",
        "Mis sentimientos por ti son tan intensos como el color de estas flores"
    ];
    
    let mensajeActual = 0;
    const btnCambiarMensaje = document.getElementById('btnCambiarMensaje');
    const mensajeElement = document.getElementById('mensaje');
    
    if (btnCambiarMensaje && mensajeElement) {
        btnCambiarMensaje.addEventListener('click', function() {
            mensajeActual = (mensajeActual + 1) % mensajes.length;
            
            // Efecto de desvanecimiento
            mensajeElement.style.opacity = 0;
            
            setTimeout(function() {
                mensajeElement.textContent = mensajes[mensajeActual];
                mensajeElement.style.opacity = 1;
                
                // Añadir clase animate__heartBeat y eliminarla después de la animación
                mensajeElement.classList.add('animate__animated', 'animate__heartBeat');
                setTimeout(() => {
                    mensajeElement.classList.remove('animate__animated', 'animate__heartBeat');
                }, 1000);
            }, 300);
            
            // Lanzar algunos confetis al cambiar el mensaje
            lanzarConfeti(20);
        });
    }
    
    // Efecto de latido para el corazón
    const corazon = document.getElementById('corazon');
    if (corazon) {
        corazon.addEventListener('click', function() {
            this.style.fontSize = '2em';
            setTimeout(() => {
                this.style.fontSize = '1.5em';
            }, 300);
            
            // Lanzar confeti al hacer clic en el corazón
            lanzarConfeti(30);
        });
    }
    
    // Efecto de confeti al hacer doble clic en el título
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.addEventListener('dblclick', function() {
            lanzarConfeti(100);
        });
    }
}

// Inicializar galería de imágenes
function initGallery() {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Verificar si los elementos existen
    if (!gallery || !modal || !modalImg || !modalCaption || !closeModal || !prevBtn || !nextBtn) return;
    
    // Imágenes para la galería (todas de flores amarillas)
    const images = [
        {
            src: 'https://images.unsplash.com/photo-1552248524-10d9a7e4841c',
            caption: 'Flores amarillas para ti'
        },
        {
            src: 'https://images.unsplash.com/photo-1551893665-f843f600794e',
            caption: 'Girasoles brillantes'
        },
        {
            src: 'https://images.unsplash.com/photo-1595185584672-b9f1dc9a7d82',
            caption: 'Campo de flores amarillas'
        },
        {
            src: 'https://images.unsplash.com/photo-1599666476394-81535c6eb8b4',
            caption: 'Flores amarillas silvestres'
        }
    ];
    
    // Crear elementos de la galería con carga perezosa
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item animate__animated animate__fadeIn';
        item.style.animationDelay = `${0.1 * index}s`;
        
        const img = document.createElement('img');
        img.src = `${image.src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80`;
        img.alt = image.caption;
        img.loading = 'lazy'; // Carga perezosa para mejorar rendimiento
        img.width = 300;
        img.height = 200;
        
        item.appendChild(img);
        gallery.appendChild(item);
        
        // Abrir modal al hacer clic en la imagen
        item.addEventListener('click', function() {
            openModal(index);
        });
    });
    
    let currentIndex = 0;
    
    // Función para abrir el modal
    function openModal(index) {
        modal.style.display = 'block';
        currentIndex = index;
        updateModalImage();
    }
    
    // Función para actualizar la imagen en el modal
    function updateModalImage() {
        // Mostrar indicador de carga
        modalImg.src = '';
        modalImg.alt = 'Cargando...';
        
        // Cargar imagen de alta calidad
        const highResImg = new Image();
        highResImg.src = `${images[currentIndex].src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`;
        highResImg.onload = function() {
            modalImg.src = highResImg.src;
            modalImg.alt = images[currentIndex].caption;
        };
        
        modalCaption.textContent = images[currentIndex].caption;
    }
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Imagen anterior
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage();
    });
    
    // Imagen siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage();
    });
    
    // Cerrar modal al hacer clic fuera de la imagen
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Navegación con teclado
    window.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateModalImage();
            } else if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % images.length;
                updateModalImage();
            } else if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });
}

// Función para lanzar confeti
function lanzarConfeti(cantidad = 50) {
    for (let i = 0; i < cantidad; i++) {
        const confeti = document.createElement('div');
        confeti.className = 'confeti';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.backgroundColor = getRandomColor();
        confeti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confeti);
        
        // Eliminar el confeti después de la animación
        setTimeout(() => {
            confeti.remove();
        }, 5000);
    }
}

// Función para obtener un color aleatorio
function getRandomColor() {
    const colors = ['#ff5733', '#ffbd33', '#33ff57', '#33ffbd', '#3357ff', '#bd33ff', '#ff33bd', '#e91e63'];
    return colors[Math.floor(Math.random() * colors.length)];
}