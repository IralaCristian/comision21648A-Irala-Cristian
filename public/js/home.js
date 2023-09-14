const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";
    publicaciones.forEach( (pub) => {
        secciones += `
            <section class="d-flex gap-2">
                <img src="${pub.url_imagen}" class="rounded" height="200" width="200" alt="${pub.titulo}" >
                <div class="d-flex flex-column justify-content-between">
                    <a href='/editar?id=${pub.id}' class="fs-3">${pub.titulo}</a>
                    <p>${pub.detalle}</p>
                    <p>${pub.fecha}</p>
                </div>
            </section>

        `
    })

    elementoHtml.innerHTML = secciones;
    
}

const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}





document.addEventListener('DOMContentLoaded', async () => {
    
    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)
})