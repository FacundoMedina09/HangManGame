/* Pagina principal */ 

var btn_nuevojuego = document.querySelector('#nuevojuego');
var btn_nuevapalabra = document.querySelector('#nuevapalabra');
var btn_reglas = document.querySelector('#reglas');

btn_nuevojuego.addEventListener('click', function(){
    location.href = 'nuevojuego.html';
})
btn_nuevapalabra.addEventListener('click', function() {
    location.href = 'nuevapalabra.html';
})
btn_reglas.addEventListener('click', function(){
    location.href='reglas.html';
})




/* Funcion del Ahorcado */ 


/*
function ahorcado(){

    var lista= ["ARGENTINA","ESPAÑA","PORTUGAL","URUGUAY","BRASIL","RUSIA","MEXICO","ALEMANIA","ITALIA","CHINA","BIELORRUSIA","CHILE","BOLIVIA"];

    var palabra_random = lista[Math.floor(Math.random() * lista.length)];

    var contador_derrota = 1;

    var contador_victoria = 1
    
    var caracter = prompt("Ingrese un caracter: ")

    caracter = caracter.toUpperCase();

    while (contador_derrota < palabra_random.length){

        if (contador_victoria == palabra_random.length){
            console.log ("Felicidades, la palabra era " + palabra_random );
            break;
        }
        
        else if (palabra_random.includes(caracter) ){
            console.log(caracter + " esta dentro de la palabra.");
            contador_victoria++;
            caracter = prompt("Ingrese un caracter: ")
            caracter = caracter.toUpperCase();
            
        }
        
        else{

            console.log(caracter + " no esta dentro de la palabra.")
            contador_derrota++;
            caracter = prompt("Ingrese un caracter: ")
            caracter = caracter.toUpperCase();
        
        }

    }

    if(contador_derrota == palabra_random.length){

        console.log("Perdiste, la palabra era " + palabra_random);

    }
    
}


/*var hola = ahorcado();
console.log(hola);*/

/*
function agregarpalabra(){

    var lista = ["Hola","Chau"];


    var condition = false
    
    if(){

     var palabra = prompt("Ingrese una palabra: ");

     lista.push(palabra);

    }
    

    return lista;
}

var resultado = agregarpalabra();
console.log(resultado);
console.log(resultado);
console.log("Hola");
console.log(resultado);
*/


