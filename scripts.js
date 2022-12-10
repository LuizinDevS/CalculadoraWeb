/* VÁRIAVEIS (var, let e const) Ex: var x = 1 const y = x + 2 */

/*  OPERADORES (+, -, /, *, %, =, -=, +=, --, ++):

    Unários(x++, x-- só uma variavel), 
    Binários(mais de um operando, ex: x + 1)
    Ternário   
*/

//estruturas
//function
//objeto (json)

let mensagem = "Este foi meu primeiro projeto utilizando JavaScript, HTML 5 e CSS 3"
alert(mensagem);

function inserir(num)
{
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar()
{
    let input_numeros = document.getElementById('resultado').innerHTML;
    //inciando da posicao 0 e indo até o tamanho da variavel - 1, ou seja apagando apenas o último número
    document.getElementById('resultado').innerHTML = input_numeros.substring(0, input_numeros.length - 1);
}

function calcular()
{
    let calculo = document.getElementById('resultado').innerHTML; 
    if(calculo)
    {
        document.getElementById('resultado').innerHTML = eval(calculo); 
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada para calcular :("
    }
}