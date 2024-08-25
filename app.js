function encriptar() {
    const texto = document.querySelector('.text-area').value;
    const textoEncriptado = texto
        .replace(/e/g, "3se")
        .replace(/i/g, "1fi")
        .replace(/a/g, "4la")
        .replace(/o/g, "0co")
        .replace(/u/g, "vnu");
    document.querySelector('.mensaje').value = textoEncriptado;
}

function desencriptar() {
    const texto = document.querySelector('.text-area').value;
    const textoDesencriptado = texto
        .replace(/3/g, "e")
        .replace(/1fi/g, "i")
        .replace(/4la/g, "a")
        .replace(/0co/g, "o")
        .replace(/vnu/g, "u");
    document.querySelector('.mensaje').value = textoDesencriptado;
}

function copiar() {
    const mensajeArea = document.querySelector('.mensaje');
    mensajeArea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
}