const botonModo = document.getElementById("modoBtn");

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});

const tituloExp = document.getElementById("toggleExp");
const contenidoExp = document.getElementById("expContenido");

tituloExp.addEventListener("click", () => {
    if (contenidoExp.style.display === "none") {
        contenidoExp.style.display = "block";
    } else {
        contenidoExp.style.display = "none";
    }
});

const tituloEdu = document.getElementById("toggleEdu");
const contenidoEdu = document.getElementById("eduContenido");

tituloEdu.addEventListener("click", () => {
    contenidoEdu.style.display =
        contenidoEdu.style.display === "none" ? "block" : "none";
});

const tituloHab = document.getElementById("toggleHab");
const contenidoHab = document.getElementById("habContenido");

tituloHab.addEventListener("click", () => {
    contenidoHab.style.display =
        contenidoHab.style.display === "none" ? "block" : "none";
});

const tituloInt = document.getElementById("toggleInt");
const contenidoInt = document.getElementById("intContenido");

tituloInt.addEventListener("click", () => {
    contenidoInt.style.display =
        contenidoInt.style.display === "none" ? "block" : "none";
});