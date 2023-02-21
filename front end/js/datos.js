
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => agregarDatos(json))


//agrega datos a los elementos correspondientes en el html
function agregarDatos(json) {
    fecha_nac = new Date(json.results[0].dob.date).toLocaleDateString('es-AR')
    console.log(json.results[0].cell);
    modificarContenido("foto", "<img src=" + json.results[0].picture.large + " class='img-fluid rounded-circle p-3' alt='foto de perfil'></img>");
    modificarContenido("nombre_completo", json.results[0].name.first + " " + json.results[0].name.last);
    modificarContenido("fecha_nac", "Fecha de Nacimiento: " + fecha_nac);
    modificarContenido("pais", "Pais: " + json.results[0].location.country);
    modificarContenido("estado", "Estado: " + json.results[0].location.state);
    modificarContenido("ciudad", "Ciudad: " + json.results[0].location.city);
    modificarContenido("codigo_postal", "Codigo Postal: " + json.results[0].location.postcode);
    modificarContenido("direccion", "Dirección: " + json.results[0].location.street.name + " nº: " + json.results[0].location.street.number);
    modificarAtributo("mapa", "href", "https://maps.google.com/?q=" + json.results[0].location.coordinates.latitude + "," + json.results[0].location.coordinates.longitude);
    modificarContenido("telefono", "Teléfono: " + json.results[0].cell);
    modificarContenido("email", "Email: " + json.results[0].email);
    modificarContenido("trabajos", trabajos(fecha_nac));
    modificarContenido("estudios", estudios(fecha_nac));
    modificarContenido("email", "Email: " + json.results[0].email);

}

//modifica el contenido dado un id y el dato a incertar
function modificarContenido(identificador, dato) {
    document.getElementById(identificador).innerHTML = dato;
}

//modifica un atributo dado el id, el atributo y el valor que se requiere para el atributo
function modificarAtributo(identificador, atributo, valor) {
    document.getElementById(identificador).setAttribute(atributo, valor)
}

//genera un listado de 1 a 5 trabajos
function trabajos(nacimiento) {
    auxiliar = "";
    for (let i = 0; i < aleatotio(5); i++) {
        auxiliar = auxiliar + "<p>" + texto_empleo(nacimiento) + "</p>";
    }
    return auxiliar;
}

//genera un listado de 1 a 5 estudios
function estudios(nacimiento) {
    auxiliar = "";
    for (let i = 0; i < aleatotio(5); i++) {
        titulo_facultad = texto_titulo_facultad(nacimiento)
        auxiliar = auxiliar + "<p>" + titulo_facultad + "</p>";
    }
    return auxiliar;
}