document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioContacto");
  const resultado = document.getElementById("resultado");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !apellido || !telefono || !email || !mensaje) {
      mostrarResultado("Todos los campos son obligatorios.", "red");
      return;
    }

    if (!validarNombreApellido(nombre) || !validarNombreApellido(apellido)) {
      mostrarResultado("El nombre y apellido deben contener solo letras.", "red");
      return;
    }

    if (!validarTelefono(telefono)) {
      mostrarResultado("El teléfono debe tener entre 8 y 15 dígitos y solo números.", "red");
      return;
    }

    if (!validarEmail(email)) {
      mostrarResultado("El correo electrónico no es válido.", "red");
      return;
    }

    if (mensaje.length < 10) {
      mostrarResultado("El mensaje debe tener al menos 10 caracteres.", "red");
      return;
    }

    mostrarResultado("Formulario enviado correctamente (simulado).", "green");
    formulario.reset();
  });

  function mostrarResultado(mensaje, color) {
    resultado.textContent = mensaje;
    resultado.style.color = color;
  }

  function validarNombreApellido(texto) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(texto);
  }

  function validarTelefono(telefono) {
    return /^[0-9]{8,15}$/.test(telefono);
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});