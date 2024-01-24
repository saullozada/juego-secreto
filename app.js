let numeroSecreto = 0; //Variable con ambito alcance global
let intentos = 0;
let listaNumeroSorteado = [];

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        // Condicion cuando el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarElementoTexto('p','El número secreto es menor');
        } else {
            asignarElementoTexto('p','El númer secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value ='';
    document.querySelector('#valorUsuario').value =''; // instruccion resumida
}

function generarNumeroSecreto() {
    // let numeroSecreto = Math.floor(Math.random()*10)+1; // Variable con ambito de alcance de bloque.
    // return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    // Si el numero generado esta incluido en la lista
    if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
}

function condicionesIniciales() {
    asignarElementoTexto('h1','Juego del número secreto');
    asignarElementoTexto('p','Ingresa un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto(); //Variable con ambito alcance bloque
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indica Mensajes iniciales
    // Genera número secreto
    // Inicializa número de intentos
    condicionesIniciales();
    // Desahabilitar el boton de "Reiniciar Juego"
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();