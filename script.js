// script.js - slider simple y manejo del formulario PQRS (local)

document.addEventListener('DOMContentLoaded', function () {
  // --- Slider simple ---
  const slides = document.querySelectorAll('.hero .slide');
  let current = 0;
  if (slides.length > 1) {
    setInterval(() => {
      // mover las slides con transform
      slides.forEach((s, i) => {
        s.style.transform = `translateX(-${current * 100}%)`;
      });
      current = (current + 1) % slides.length;
    }, 5000);
  }

  // --- Formulario PQRS ---
  const form = document.getElementById('pqrsForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const tipo = document.getElementById('tipo') ? document.getElementById('tipo').value : '';
      const asunto = document.getElementById('asunto').value.trim();
      const descripcion = document.getElementById('descripcion').value.trim();
      const acepta = document.getElementById('acepta') ? document.getElementById('acepta').checked : true;

      if (!nombre || !correo || !telefono || !tipo || !asunto || !descripcion || !acepta) {
        alert('Por favor completa todos los campos obligatorios y acepta la política de datos.');
        return;
      }

      // generar radicado
      const radicado = 'AD-' + Date.now().toString().slice(-8);

      // mostrar mensaje de éxito
      const mensajeOk = document.getElementById('mensajeOk');
      if (mensajeOk) {
        form.style.display = 'none';
        document.getElementById('radicado').textContent = radicado;
        mensajeOk.style.display = 'block';
      }

      // aquí enviarías datos a un backend real (fetch), por ahora registramos en consola
      console.log('PQRS enviado (local):', { nombre, correo, telefono, tipo, asunto, descripcion, radicado });
    });
  }
});
