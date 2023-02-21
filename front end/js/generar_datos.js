nombres_local = ['Iucundum dictas', 'Inprobitas tale', 'Phaedrum hoc', 'Afficit praeclara', 'Concederetur adhaesiones',
    'Libidinibus graecos', 'Inanitate laboriosam', 'Gubernatoris erudito', 'Impedit dissensio', 'Adiuvet eodem']

//genera un numero aleatorio entre 1 y un maximo
function aleatotio(max) {
    return (Math.floor(Math.random() * max) + 1);
}

//genera una lista de empleos de tamaño aleatorio
function generear_empleo() {
    empleos = ['Carpintero',
        'Cerrajero', 'Mecánico', 'Pescador', 'Albañil', 'Fontanero o plomero', 'Carpintero', 'Soldador',
        'Pintor de brocha gorda', 'Sastre', 'Pastor ganadero', 'Agricultor',
        'Carnicero', 'Lechero', 'Cocinero', 'Lavandero', 'Escultor', 'Editor',
        'Obrero', 'Locutor', 'Escritor', 'Vendedor', 'Repartidor', 'Cajero', 'Vigilante',
        'Animador', 'Frutero', 'Deshollinador', 'Artesano', 'Tornero', 'Barrendero',
        'Panadero', 'Barbero', 'Leñador', 'Peletero', 'Impresor', 'Policía', 'Exterminador',
        'Peluquero', 'Abogado', 'Ingeniero', 'Biólogo', 'Matemático', 'Profesor', 'Físico',
        'Químico', 'Electricista', 'Técnico de sonido', 'Filósofo', 'Antropólogo', 'Administrador',
        'Contador', 'Médico cirujano', 'Historiador', 'Filólogo', 'Arquitecto', 'Periodista',
        'Sociólogo', 'Politólogo', 'Bibliotecólogo', 'Archivólogo', 'Secretaria', 'Técnico en turismo',
        'Lingüista', 'Psicoanalista', 'Paleontólogo', 'Geógrafo', 'Psicólogo', 'Computista',
        'Botánico', 'Farmacólogo', 'Enfermero', 'Paramédico', 'Músico', 'Traductor', 'Economista',
        'Radiólogo', 'Ecólogo'];

    return (empleos[aleatotio(empleos.length)])
}

//genera una lista de titulos con universidad de tamaño aleatorio
function generar_titulo_universidad() {
    universidades = [
        'Harvard University', 'Stanford University', 'Massachusetts Institute of Technology',
        'University of California Berkeley', 'University of Oxford', 'University of Michigan',
        'University of Washington', 'Cornell University', 'Columbia University New York',
        'Johns Hopkins University', 'University of Pennsylvania', 'University of Cambridge',
        'University of California Los Angeles UCLA', 'Yale University', 'UCL University College London',
        'University of Toronto', 'University of California San Diego', 'University of Minnesota System',
        'Pennsylvania State University', 'University of Wisconsin Madison', 'Duke University',
        'Northwestern University', 'New York University', 'Tsinghua University / 清华大学',
        'University of Texas Austin', 'Princeton University', 'University of British Columbia',
        'University of North Carolina Chapel Hill', 'University of Chicago', 'Eidgenössische Technische Hochschule ETH Zürich / Swiss Federal Institute of Technology Zurich',
        'University of Southern California', 'Peking University / 北京大学', 'University of Illinois Urbana Champaign',
        'Imperial College London', 'University of Florida', 'Ohio State University', 'University of California Davis',
        'University of California Irvine', 'University of California San Francisco', 'University of Melbourne',
        'University of New South Wales', 'Washington University Saint Louis', 'University of Maryland College Park',
        'University of Edinburgh', 'Purdue University', 'University of Pittsburgh', 'National University of Singapore',
        'Michigan State University', 'Carnegie Mellon University', 'University of Sydney',
        'Rutgers The State University of New Jersey', 'University of Queensland', 'Texas A&M University',
        'University of Arizona', 'Arizona State University', 'Boston University', 'Monash University',
        'Vanderbilt University', 'California Institute of Technology Caltech', 'McGill University',
        'University of Manchester', 'Georgia Institute of Technology', 'University of Utah',
        'University of Virginia', 'Utrecht University / Universiteit Utrecht', 'University of Tokyo / 東京大学',
        'King\'s College London', 'Zhejiang University (National Che Kiang University) / 浙江大学',
        'Shanghai Jiao Tong University / 上海交通大学', 'Universidade de São Paulo USP',
        'University of Alberta', 'Emory University', 'University of Amsterdam / Universiteit van Amsterdam',
        'University of Copenhagen / Københavns Universitet', 'University of Hong Kong',
        'University of California Santa Barbara', 'North Carolina State University', 'Catholic University of Leuven / Katholieke Universiteit Leuven',
        'Australian National University', 'Brown University', 'Chinese University of Hong Kong',
        'University of Iowa', 'Virginia Polytechnic Institute and State University', 'University of Groningen / Rijksuniversiteit Groningen',
        'University of Waterloo', 'Technische Universität München', 'Nanyang Technological University',
        'University of Leeds', 'City University of Hong Kong', 'École Polytechnique Fédérale de Lausanne',
        'University of Calgary', 'Universität Zürich', 'University of Helsinki / Helsingin yliopisto',
        'Delft University of Technology TU Delft', 'University of Science & Technology of China / 中国科学技术大学',
        'Seoul National University / 서울대학교', 'University of Oslo / Universitetet i Oslo',
        'Indiana University Bloomington', 'University of Adelaide', 'University of Massachusetts Amherst'
    ];
    titulos = [
        'Médico/a', 'Veterinario/a', 'Enfermero/a universitario/a (LICENCIATURA)', 'Kinesiólogo/a',
        'Odontólogo/a', 'Farmacéutico/a', 'Fonoaudiólogo/a', 'Óptico/a universitario/a', 'Podólogo/a universitario',
        'Terapeuta Ocupacional', 'Nutricionista', 'Psicólogo/a', 'Ingeniero/a Civil – Ingeniero/a en Construcciones',
        'Ingeniero/a en Minas', 'Ingeniero/a Industrial', 'Ingeniero/a en Aeronáutica', 'Ingeniero/a en Agronomía',
        'Ingeniero/a Forestal-Silvicultura', 'Ingeniero/a Naval', 'Ingeniero/a en Telecomunicaciones',
        'Arquitecto/a', 'Ingeniero/a en Mecánica', 'Ingeniero/a en Electrónica', 'Ingeniero/a en Electricidad',
        'Ingeniero/a en Química', 'Ingeniero/a en Sonido e Imagen', 'Ingeniero/a en Topografía – Agrimensor',
        'Profesor/a (UNIVERSITARIO) en Educación Inicial', 'Profesor/a (UNIVERSITARIO) en Educación Primaria',
        'Profesor/a (UNIVERSITARIO) en Educación Media-Secundaria', 'Profesor/a para nivel universitario',
        'Abogado/a', 'Procurador/a', 'Licenciado/a en Administración de Empresas', 'Licenciado/a en Asistencia Social-Trabajo Social',
        'Licenciado/a en Bellas Artes', 'Licenciado/a en Biología', 'Licenciado/a en Bioquímica', 'Licenciado/a en Ciencias Actuariales',
        'Licenciado/a en Ciencias de la Comunicación', 'Licenciado/a en Ciencias Políticas',
        'Contador/a', 'Diseñador/a industrial', 'Licenciado/a en Diseño Gráfico', 'Licenciado/a en Economía', 'Licenciado/a en Educación Física y del Deporte',
        'Licenciado/a en Estadística', 'Licenciado/a en Filosofía', 'Licenciado/a en Física',
        'Licenciado/a en Genética-Biotecnología', 'Licenciado/a en Geografía',
        'Licenciado/a en Sociología', 'Licenciado/a en Historia', 'Licenciado/a en idioma - Filología',
        'Licenciado/a en Logística y Transporte', 'Licenciado/a en Marketing', 'Licenciado/a en Matemática', 'Licenciado/a en Medio Ambiente',
        'Licenciado/a en Organización Industrial', 'Licenciado/a en Pedagogía – en Educación',
        'Licenciado/a en Periodismo', 'Licenciado/a en Psicopedagogía', 'Licenciado/a en Publicidad',
        'Química (no en química industrial)', 'Licenciado/a en Recursos Humanos', 'Licenciado/a en Relaciones Públicas',
        'Licenciado/a en Seguridad e Higiene Laboral', 'Licenciado/a en Sistemas', 'Traductor/a universitario',
        'Licenciado/a en Turismo',
    ];
    return ([titulos[aleatotio(titulos.length)], universidades[aleatotio(universidades.length)]])
}

//genera dos años que no sean menores a 20 años despues del nacimiento ni mayores al año actual
function anio_inicio_fin(nacimiento) {
    var ani
    var hoy = new Date();
    var anio_actual = hoy.getFullYear();
    var anio_nacimiento = parseInt(nacimiento.split("/")[2])
    do {
        anio_inicio = anio_nacimiento + 20 + aleatotio(5);
        anio_fin = anio_inicio + aleatotio(10);
    } while (anio_fin > anio_actual);
    return [anio_inicio, anio_fin]
}

//genera un texto para un empleo
function texto_empleo(nacimiento) {
    anios = anio_inicio_fin(nacimiento);
    return generear_empleo() + " en " + nombres_local[aleatotio(nombres_local.length)] + " (" + anios[0] + " - " + anios[1] + ")";
}

//genera un texto para un titulo con su facultad
function texto_titulo_facultad(nacimiento) {
    anios = anio_inicio_fin(nacimiento);
    datos = generar_titulo_universidad();
    return datos[0] + " en " + datos[1] + " (" + anios[0] + " - " + anios[1] + ")";
}