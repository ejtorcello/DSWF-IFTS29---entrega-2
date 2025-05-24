document.addEventListener("DOMContentLoaded", function() {
    // Tu código va aquí
    
    
    
    
    console.log("DOM ready");

    // Por ejemplo, podés acceder a elementos ya existentes
    const boton = document.getElementById("miBoton");
    boton.addEventListener("click", () => {
        alert("¡Click!");
    });
});