document.addEventListener("DOMContentLoaded", function() {
    // inicio
     
        let visitas = localStorage.getItem("visitas");

        // init
        if (!visitas) {
            visitas = 0;
        }

        // counter
        visitas++;
        localStorage.setItem("visitas", visitas);

        // fetch element and handle accordingly
        document.getElementById("contador").textContent = visitas;
        
    
    
    
    console.log("DOM ready");

   
    });
    document.addEventListener("mousemove", function (e) {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    // Obtener posición del mouse %
    const xPercent = e.clientY / window.innerWidth;
    const yPercent = e.clientX / window.innerHeight;

    // Usar estos porcentajes para color HSL
    const hue = Math.round(66 + xPercent * 20);  // entre 200 a 300
    const lightness = Math.round(20 + yPercent * 20);  // entre 40% a 60%

    const hslColor = `hsl(${hue}, 50%, ${lightness}%)`;

    header.style.color = hslColor;
    footer.style.backgroundColor = hslColor;
});
