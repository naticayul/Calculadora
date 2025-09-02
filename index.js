let concatenar="";

let num1="";
let num2="";
let opCode="";

function mostrarNumero (numero){
    concatenar+=numero;
    document.getElementById("numeroAbajo").textContent= concatenar
}
function operacion(modo){
    num1=concatenar;
    concatenar="";
    opCode=modo;
    document.getElementById("numeroArriba").textContent= num1 + modo;
}


function igual(){
    let resultado;
    if(opCode=="+"){
        resultado= Number(num1) + Number(concatenar)
    }
    if(opCode=="-"){
        resultado= num1-concatenar
    }
    if(opCode=="*"){
        resultado= num1*concatenar
    }
    if(opCode=="/"){
        if(concatenar==0){
            resultado="no se puede dividir por 0"
        }
        else{
        resultado= num1/concatenar
        }
    }
    document.getElementById("numeroArriba").textContent =  Number(num1) + opCode +concatenar;
    document.getElementById("numeroAbajo").textContent = resultado;
    concatenar=resultado;

}

function porcentaje(){
    num1=concatenar;
    concatenar/100;
    document.getElementById("numeroArriba").textContent= concatenar+"%"
    document.getElementById("numeroAbajo").textContent=concatenar/100
}  
function exponencial(){
    num1=concatenar;
    concatenar**2;
    document.getElementById("numeroArriba").textContent= concatenar+"²"
    document.getElementById("numeroAbajo").textContent=concatenar**2
}   
function raizCuadrada(){
    num1=concatenar;
    Math.sqrt(concatenar);
    document.getElementById("numeroArriba").textContent= "√"+concatenar
    document.getElementById("numeroAbajo").textContent=Math.sqrt(concatenar)
}   
function unoSobreX(){
    num1=concatenar;
    //  1/(concatenar);
    
    if(concatenar==0){
        document.getElementById("numeroArriba").textContent= "1/"+"("+concatenar+")"
        document.getElementById("numeroAbajo").textContent="no se puede dividir por 0"
        }
    else{
        document.getElementById("numeroArriba").textContent= "1/"+"("+concatenar+")"
        document.getElementById("numeroAbajo").textContent=1/+(concatenar)    
        }
} 

function borrarTodo(){ //CE//
    document.getElementById("numeroArriba").textContent= ""
    document.getElementById("numeroAbajo").textContent=0
    concatenar=""
}
function borrarAbajo(){ //C//
    document.getElementById("numeroAbajo").textContent=0
    concatenar=""
}


