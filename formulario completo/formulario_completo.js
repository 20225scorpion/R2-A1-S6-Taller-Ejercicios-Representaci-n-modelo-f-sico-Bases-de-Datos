const form = document.getElementById("miFormulario");

form.addEventListener("submit", function(e) {
    e.preventDefault();


    const nombres = form.nombres.value.trim();
    const apellidos = form.apellidos.value.trim();
    const correo = form.correo.value.trim();
    const celular = form.celular.value.trim();

    // VALIDACIONES
    if (nombres.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    }

    if (apellidos.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres");
        return;
    }

    if (!correo.includes("@")) {
        alert("Correo inválido");
        return;
    }

    if (celular.length !== 10) {
        alert("El celular debe tener 10 números");
        return;
    }

    const hobbies = form.querySelectorAll('input[type="checkbox"]:checked');
    if (hobbies.length === 0) {
        alert("Selecciona al menos un hobby");
        return;
    }

    alert("Formulario enviado correctamente ✅");

    form.submit();
});