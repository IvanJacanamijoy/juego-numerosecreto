/*let titulo = document.querySelector('h1'); //es un objeto
//document es el puente entre javascript y HTML, queryselector es un metodo que selecciona como parametro el elemento h1 de html
titulo.innerHTML = 'Juego del numero secreto';
//seleccionamos la variable titulo y con el metodo innerHTML ingresamos dentro del elemento h1 'Juego del numero secreto'
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//al agregar parametros a una funciones hacemos que esta funcion sea generica
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//declaramos una funcion llamada intentoDeUsuario
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El ususario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
        //console.log(intentos);
    }
    if(intentos > 3){
        document.getElementById('intento').setAttribute('disabled','true');
        asignarTextoElemento('p','Llegaste al numero maximo de intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //mostrar el texto inicial
    //generar el numero aleatorio
    //reiniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('intento').removeAttribute('disabled');
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }
    //si el numero generado esta incluido en la lista, includes es un metodo que mira si un elemento ya se encuentra en la lista



    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

condicionesIniciales();