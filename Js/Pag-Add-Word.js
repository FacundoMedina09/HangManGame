/* Pagina de Nueva Palabra */ 

var textentrada = document.querySelector('#textentrada')

const dato = {
    palabra: ''
}

textentrada.addEventListener("input", function(event){
    event.preventDefault();
    dato.palabra = event.target.value;
})

function AddWord(){

    var newword = dato.palabra;
    var result = listapalabras(dato.palabra);
    console.log(result);
    dato.palabra = " ";
    result = " ";
}


/* Meter palabra */


function listapalabras(ingreso){    /* ESTO ESTA BIEN */ 

    var lista = ["Argentina","Brasil"];

    lista.push(ingreso);

    return lista;
}




window.onload = function(){

    window.lista = ["Argentina" , "Brasil"];
}

function ashei(ingreso){

    var ingreso= document.getElementById('textentrada').value;

    lista.push(ingreso);
}





var alertgo = document.querySelector('#IngresaPalabra');

function goword() {

    navigator.clipboard.writeText(textentrada.innerHTML);

    alertgo.textContent = "Palabra agregada de forma exitosa!";

    setTimeout(function reset() {
        alertgo.textContent = " ";
    }, 3000);

}