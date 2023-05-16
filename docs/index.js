
setInterval(() => {
    const reloj = new Date()
    const hora = reloj.getHours();
    const minutos = reloj.getMinutes().toString().padStart(2, '0');
    const segundos = reloj.getSeconds().toString().padStart(2, '0');
    const pantalla = document.getElementById("rel");
    pantalla.textContent = `${hora}:${minutos}:${segundos}`
}, 1000);













