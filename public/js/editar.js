

const mostrarPublicacion = (publicacion, elementoHtml) => {

    console.log(publicacion)
    console.log(publicacion.titulo)
    document.querySelector("#titulo").value= publicacion.titulo
    //document.getElementById("titulo").innerHTML= publicacion.titulo
    
}

const obtenerPublicacion = async (id) => {
    const response = await fetch('/publicacion/'+ id)
    const data = await response.json()
    return data;
}



document.addEventListener('DOMContentLoaded', async () => {

    //Obteniendo el id de la publicación de la URL
    const valores= window.location.search;
    const urlParams= new URLSearchParams(valores);

    //id de la publicacion
    const id= urlParams.get('id');
    
    const publicacion = await obtenerPublicacion(id)
    const main = document.querySelector('#editar_publicacion')
    mostrarPublicacion(publicacion, main)
})