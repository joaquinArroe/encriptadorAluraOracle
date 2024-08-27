function encriptar() {
    const textArea = document.querySelector('.text-area');
    const mensajeArea = document.querySelector('.mensaje');
    const cambioTexto = document.querySelector('.cambiodetexto');
    
    const texto = textArea.value.trim();

    if (texto === "") {
        mensajeArea.value = "";
        cambioTexto.textContent = "Ningún mensaje fue encontrado";
        return;
    }

    cambioTexto.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    
    const textoEncriptado = texto
        .replace(/e/g, "3se")
        .replace(/i/g, "1fi")
        .replace(/a/g, "4la")
        .replace(/o/g, "0co")
        .replace(/u/g, "vnu");

    mensajeArea.value = textoEncriptado;
}

function desencriptar() {
    const textArea = document.querySelector('.text-area');
    const mensajeArea = document.querySelector('.mensaje');
    const cambioTexto = document.querySelector('.cambiodetexto');
    
    const texto = textArea.value.trim();

    if (texto === "") {
        mensajeArea.value = "";  // Limpiar el textarea de mensaje
        cambioTexto.textContent = "Ningún mensaje fue encontrado";
        return;
    }

    cambioTexto.textContent = "Ingresa el texto que desees encriptar o desencriptar.";

    const textoDesencriptado = texto
        .replace(/3se/g, "e")
        .replace(/1fi/g, "i")
        .replace(/4la/g, "a")
        .replace(/0co/g, "o")
        .replace(/vnu/g, "u");

    mensajeArea.value = textoDesencriptado;
}

function copiar() {
    const mensajeArea = document.querySelector('.mensaje');

    if (mensajeArea.value.trim() === "") {
        alert("No hay mensaje para copiar");
        return;
    }

    mensajeArea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
}

document.querySelector('.text-area').addEventListener('input', () => {
    const cambioTexto = document.querySelector('.cambiodetexto');
    const textArea = document.querySelector('.text-area');
    const mensajeArea = document.querySelector('.mensaje');

    if (textArea.value.trim() === "") {
        cambioTexto.textContent = "Ningún mensaje fue encontrado";
        mensajeArea.value = "";
    } else {
        cambioTexto.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    }
});
