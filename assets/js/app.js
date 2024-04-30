document.addEventListener("DOMContentLoaded", function() {
    // Inicializar tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // el elemento del checkbox y el modal
    var checkbox = document.getElementById('check');
    var modal = document.getElementById('termsModal');

    // Agregar un evento de cambio al checkbox
    checkbox.addEventListener('change', function() {
        // Si el checkbox está marcado, mostrar el modal
        if (checkbox.checked) {
            $(modal).modal('show');
        }
    });
});


$("#sendEmail").click(function () {
    // Enviar alerta
    alert("El correo se ha enviado correctamente");
  });