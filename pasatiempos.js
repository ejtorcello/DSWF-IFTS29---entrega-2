const imagenes = {};
const indices = {};
const maxIntentos = 100;

function cargarImagenes(pasatiempo) {
    imagenes[pasatiempo] = [];
    let n = 1;

    function probarSiguiente() {
        if (n > maxIntentos) {
            if (imagenes[pasatiempo].length > 0) {
                mostrarImagen(pasatiempo);
            }
            return;
        }

        const ruta = `pasatiemposImagenes/${pasatiempo}/${n}.jpg`;
        const img = new Image();

        img.onload = () => {
            imagenes[pasatiempo].push(ruta);
            n++;
            probarSiguiente();
        };

        img.onerror = () => {
            if (imagenes[pasatiempo].length > 0) {
                mostrarImagen(pasatiempo);
            }
        };

        img.src = ruta;
    }

    probarSiguiente();
}

function mostrarImagen(pasatiempo) {
    const imgElem = document.getElementById(`img-${pasatiempo}`);
    if (imagenes[pasatiempo].length > 0) {
        imgElem.src = imagenes[pasatiempo][indices[pasatiempo]];
    }
}

function cambiarImagen(pasatiempo, direccion) {
    if (imagenes[pasatiempo].length === 0) return;

    indices[pasatiempo] += direccion;

    if (indices[pasatiempo] < 0) {
        indices[pasatiempo] = imagenes[pasatiempo].length - 1;
    } else if (indices[pasatiempo] >= imagenes[pasatiempo].length) {
        indices[pasatiempo] = 0;
    }

    mostrarImagen(pasatiempo);
}

// Inicializar
window.onload = () => {
    const pasatiempos = ['pesca', 'ufologia', 'electronica', 'modelismo']; 

    pasatiempos.forEach(p => {
        indices[p] = 0;
        cargarImagenes(p);
    });
};