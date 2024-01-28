// Creador de Nombres de Bandas Aleatorios

let nombreBandas = () => {

    //declaro variables a usar para generar nombres
    let palabrasInusuales = ["Agiotismo", "Drogmán", "Insacular", "Mandanga"];
    //    0             1           2          3
    let coloresExtravagantes = ["morado", "karmesí", "purpura", "dorado"];
    //                              0        1           2          3
    let animalesExoticos = ["ajolote", "picozapato", "hirola", "uakari"];
    //                          0            1           2         3

    // formula para seleccionar aleatoriamente un elemento por medio de los numeros de la longitud del array
    let palabrasAleatorio = palabrasInusuales[Math.floor(palabrasInusuales.length * Math.random())];
    let coloresAleatorio = coloresExtravagantes[Math.floor(coloresExtravagantes.length * Math.random())];
    let animalesAleatorio = animalesExoticos[Math.floor(animalesExoticos.length * Math.random())];

    // concatenacion de los datos
    let nombreAleatorio = (`${palabrasAleatorio} ${coloresAleatorio} ${animalesAleatorio}`);

    return nombreAleatorio
}

console.log(nombreBandas())
console.log(nombreBandas())
console.log(nombreBandas())
console.log(nombreBandas())


// Conversor de Emociones a Emoji

let conversion = (emociones) => {

    let emocion = ['feliz', 'triste', 'sorprendido', 'enojado', 'decepcionado'];
    let emojis = ['😊', '😭', '😲', '😡', '😔'];
    


    for (i = 0; i < emocion.length; i++) {
        if (emocion[i] == emociones) {
            return (`${emojis[i]}`)
        }
    }
}

console.log(conversion('feliz'))
console.log(conversion('triste'))
console.log(conversion('sorprendido'))
console.log(conversion('enojado'))
console.log(conversion('decepcionado'))


// Generador de Historias Absurdas

let historiaAbsurda = () => {

    let personajes = ['perro', 'extraterrestre', 'monje', 'murcielago'];
    let elementos = ['compra galletitas', 'fuma cigarrillo', 'sale de fiesta', 'juega al truco'];
    let lugares = ['en Jupiter', 'en un horno', 'bajo un tornado', 'en un hormiguero'];

    let personajeAleatorio = personajes[Math.floor(personajes.length * Math.random())];
    let elementoAleatorio = elementos[Math.floor(elementos.length * Math.random())];
    let lugaresAleatorio = lugares[Math.floor(lugares.length * Math.random())];

    let historiasAbsurdas = (`Había una vez un ${personajeAleatorio} que ${elementoAleatorio} ${lugaresAleatorio}.`);

    return historiasAbsurdas
}

console.log(historiaAbsurda())


// Simulador de Viaje en el Tiempo Musical

let recomendacion = (annio) => {

    let epoca = ['1900', '1950', '1990', '2020'];
    let historia = ['en la Argentina se sanciona la ley de servicio militar obligatorio para todos los ciudadanos a partir de 20 años', 'en la Argentina ocurre el primer levantamiento militar hacia el presidente Juan Domingo Peron', 'en la Argentina se lanza el Plan Blonex, dirigido por Carlos Saul Menem, consistió en el canje forzoso de los depósitos a plazo fijo por títulos públicos denominados Bonex 89, y se dio en un contexto hiperinflacionario', 'se declara una emergencia de salud pública de preocupación internacional por la pandemia del nuevo COVID-19'];
    let musica = ['Paulette Darty - Amoureuse y tambien Scott Joplin - Easy Winners', 'Lollipop - The Chordettes o tambien Summertime Blues - Eddie Cochran', 'Bailar Pegados - Sergio Dalma o tambien Loco Vox - Locomia', 'Mamichula - Trueno o tambien Colocao - Nicki Nicole'];


    for (i = 0; i < epoca.length; i++) {
        if (epoca[i] == annio) {
            return (`En los años ${epoca[i]} ${historia[i]}. Y se escuchaban canciones como ${musica[i]}`)
        }
    }
}

console.log(recomendacion(1990))
console.log(recomendacion(1900))
console.log(recomendacion(1950))
console.log(recomendacion(2020))


// Creador de Recetas Culinarias del Futuro

let receta = () => {

    let ingredientes = ['Galanga', 'Salsa de ostra ', 'Pasta de gamba seca', 'Yuzu', 'Macis'];
    let sitioAcocinar = ['asfalto', 'horno', 'parrilla', 'plancha aerospacial', 'disco'];
    let coccion = ['ahumar', 'sofreir', 'guisar', 'brasear', 'fritar a nivel molecular'];


    let ingredienteUno = ingredientes[Math.floor(ingredientes.length * Math.random())];
    let ingredienteDos = ingredientes[Math.floor(ingredientes.length * Math.random())];
    let ingredienteTres = ingredientes[Math.floor(ingredientes.length * Math.random())];
    let dondeCocino = sitioAcocinar[Math.floor(sitioAcocinar.length * Math.random())];
    let metodoCoccion = coccion[Math.floor(coccion.length * Math.random())];

    let preparacion = (`Ingredientes:
    - 1 ${ingredienteUno}
    - 1/2  ${ingredienteDos}
    - una pizca de ${ingredienteTres}
Preparación: 
    - Integramos todos los ingredientes dentro de un bowl y mezclamos hasta que quede homogeneo.
    - Precalentamos ${dondeCocino} hasta que llegue a la temperatura deseada (150° aprox.).
    - Luego ${metodoCoccion} y condimentar a gusto.
    - Dejar enfriar 5´ y a disfrutar!` );

    return preparacion
}

console.log(receta())


// Generador de Planetas Fantásticos

let planetas = () => {

    let nombrePlaneta = ['Ivan', 'Flok', 'More', 'Lou', 'Cleo', 'Thelm'];
    let nombrePlanetaDos = ['ric', 'rty', 'lop', 'linder', 'tra', 'terri'];
    let colores = ['dorado y fucsia', 'rojo lava', 'azul verdoso radiante', 'esmeralda', 'verde fluor'];
    let elementosQuimicos = ['Escandio', 'Neodimio', 'Flerovio', 'Holmio', 'Actinio'];

    // generador nombre aleatorio
    let generadorNombre = nombrePlaneta[Math.floor(nombrePlaneta.length * Math.random())];
    let generadorNombreDos = nombrePlanetaDos[Math.floor(nombrePlanetaDos.length * Math.random())];

    // concatenacion de generador de nombre
    let nombreAleatorio = generadorNombre + generadorNombreDos;

    // caracteristicas de los planetas
    let colorAleatorio = colores[Math.floor(colores.length * Math.random())];
    let presionAtmosferica = Math.floor(500 * Math.random());
    let elementoAleatorio = elementosQuimicos[Math.floor(elementosQuimicos.length * Math.random())];
    let cantidadSatelites = Math.round(10 * Math.random());
    let tamaño = Math.round(84620 * Math.random());


    // concatenacion de todos los datos 
    let planetaNuevo = (`${nombreAleatorio} es un planeta de color ${colorAleatorio}. Tiene un tamaño de ${tamaño} km. Su elemento quimico principal es el ${elementoAleatorio} y cuenta con una presión atmosférica de ${presionAtmosferica} hPa. Posee ${cantidadSatelites} satélites que giran a su alrededor.`);

    return planetaNuevo
}

console.log(planetas())


