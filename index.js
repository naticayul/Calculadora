let concatenar="";

let num1="";
let num2="";
let opCode="";
let resultado=false

function mostrarNumero (numero){
    if(resultado){
        borrarTodo()
        resultado=false
    }
    concatenar+=numero;
    document.getElementById("numeroAbajo").textContent= concatenar
}

 function operacion(modo){
    if(opCode==""){
        guardarNumero()
    } else if(concatenar!="") {
        calculos()
        guardarNumero()
    }
    opCode=modo;
    document.getElementById("numeroArriba").textContent=num1 + modo;
}

function guardarNumero(){
    num1=concatenar;
    concatenar="";
}

function calculos(){
    switch(opCode){
        case"+":
            concatenar= Number(num1) + Number(concatenar)
        break;
        case"-":
            concatenar= num1-concatenar
        break;
        case"/":
            concatenar= dividir(num1, concatenar)
        break;
        case"*":
            concatenar= num1*concatenar
                // tambien podria hacerse... concatenar*=num1
        break;
        default:
        break;
    }
    document.getElementById("numeroAbajo").textContent = concatenar
}

function igual(){
    document.getElementById("numeroArriba").textContent = num1 + opCode +concatenar +"=";
    calculos()
    document.getElementById("numeroAbajo").textContent = concatenar
    guardarNumero();
}

function dividir(num1,concatenar){
    if(concatenar==0){
        return "no se puede dividir por 0"
        }
    return num1/concatenar
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
    document.getElementById("numeroArriba").textContent= "0"
    document.getElementById("numeroAbajo").textContent=0
    concatenar=""
}
function borrarAbajo(){ //C//
    document.getElementById("numeroAbajo").textContent=0
    concatenar=""
}
function borrarUltimo(){ //»//
    concatenar=concatenar.slice(0,-1)
    document.getElementById("numeroAbajo").textContent=concatenar
}

function masMenos(){ //±//
    if(concatenar>0){
        concatenar= "-"+concatenar
        document.getElementById("numeroAbajo").textContent=concatenar
    }
    else{
        concatenar= concatenar.slice(1)
        document.getElementById("numeroAbajo").textContent=concatenar
    } 
}

const punto=()=>{
    if(concatenar==""){
        concatenar+="0.";
        document.getElementById("numeroAbajo").textContent=concatenar
    }
    if(!concatenar.includes(".")){
        concatenar+=".";
        document.getElementById("numeroAbajo").textContent=concatenar
    }
}
