console.log ('hello word!');
/* escrever no console */

console.log ('voce foi hackeado!');

/* puxar um elemento html */

document.getElementsByClassName('title');

/* criacao de variavel do elemento html */
/*
 var
Declara uma variável, opcionalmente, inicializando-a com um valor.

 let
Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

 const
Declara uma constante de escopo de bloco, apenas de leitura."
*/

var heading1 = document.getElementsByClassName('title')[0];

/* estilizando pelo js o htm;  */

/*heading1.style.color = 'blue'  */
 

var cuurentNumberWrapper = document.getElementById ('Resposta')
var cuurentNumber = 0;

function increment () {
    cuurentNumber = cuurentNumber + 1;
    cuurentNumberWrapper.innerHTML = cuurentNumber;
}

function decrement () {
    cuurentNumber = cuurentNumber - 1;
    cuurentNumberWrapper.innerHTML = cuurentNumber;
}
