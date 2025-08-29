let concatenar=""

let num1;
let num2;

function mostrarNumero (numero){
    concatenar+=numero;
    document.getElementById("numeroAbajo").textContent= concatenar
}

function sum(numero){
    num1=concatenar;
    concatenar+=numero;
    document.getElementById("numeroArriba").textContent= concatenar
    concatenar="" 
}

function igual(){
    document.getElementById("numeroArriba").textContent= Number(num1)+"+"+concatenar
    concatenar=Number(concatenar)+Number(num1)
    document.getElementById("numeroAbajo").textContent=concatenar
}


document.getElementById("texto").textContent="30"-Number("30")
