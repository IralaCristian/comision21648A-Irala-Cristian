
//obtiene los datos que estan en los valores del formulario ediat_publicacion
const obtenerDatosDelForm = () => {
    return data = {
        id: document.querySelector('#id').value,
        titulo: document.querySelector('#titulo').value,
        detalle: document.querySelector('#detalle').value,
        url_imagen: document.querySelector('#url_imagen').value,
        fecha: document.querySelector('#fecha').value,
    }
}


const mostrarPublicacion = (publicacion) => {

    //carga de datos de la publicación a editar en el formulario editar_publicacion
    const {id, titulo, detalle, url_imagen, fecha} = publicacion
    document.querySelector("#titulo").value= titulo
    document.querySelector("#detalle").value= detalle
    document.querySelector("#url_imagen").value= url_imagen
    document.querySelector("#fecha").value= fecha
    document.querySelector("#id").value= id
    
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
    mostrarPublicacion(publicacion)
})

//referencio al formulario en la constante form para luego implementar sus eventos
const formEditar = document.querySelector("#editar_publicacion")

//listener para el evento que desencadenara la actualización de la publicación
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = obtenerDatosDelForm()

    // Enviar los datos al servidor para actualizar la publicación
    const respuesta = await fetch('/publicacion/'+ data.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const datos = await respuesta.json()
    console.log(datos);

    alert(datos.msg)

})


formEditar.addEventListener('reset', async (e) => {
    e.preventDefault();

    const data = obtenerDatosDelForm()

    // Enviar los datos al servidor para eliminar la publicación
    const respuesta = await fetch('/publicacion/'+ data.id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const datos = await respuesta.json()
    console.log(datos);

    alert(datos.msg)

    location.href= "/"

})


