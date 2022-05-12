/*PROGRAMA 1
const a = 4;
const b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//PROGRAMA 2
if (a>b) {
    console.log(a);
}
else{
    console.log(b);
}
//PROGRAMA 3
const a = 4;
const b = 2;
const c = 3;

if (a>b && a>c) {
    console.log(a);
}
else if(b>a && b>c){
    console.log(b);
}
else{
    console.log(c);
}
//PROGRAMA 4
let valor = 4;

if (valor > 0) {
    console.log("Positive")
}
else if(valor < 0){
    console.log("Negative")
}
else{
    console.log("Neutro - 0")
}

//PROGRAMA 5
const a = 90;
const b = 45;
const c = 45;

if (a+b+c == 180) {
    console.log(true)
}else if(a <= 0 || b <= 0 || c <= 0){
    console.log("Ângulo Inválido")
}
 else{
    console.log(false)
}

//PROGRAMA 6
let peca = "rei";

switch (peca) {
    case "cavalo":
        console.log("Anda em L, 3 casas em linha reta e 2 para um dos lados")
        break;
    case "bispo":
        console.log("Anda quantas casas quiser em diagonal")
        break;
    case "peao":
        console.log("Anda 1 casa em linha reta (em direção ao tabuleiro adversário")
        break;       
    case "torre":
        console.log("Anda quantas casas quiser em em linha reta")
        break;
    case "rainha":
        console.log("Anda quantas casas quiser em qualquer direção")
        break;
    case "rei":
        console.log("Anda 1 casa em qualquer direção")
        break;
    default:
        console.log("Não é uma peça de xadrez");
        break;
}
//PROGRAMA 7
let nota = 81;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if(nota >= 80){
    console.log("B");    
} else if(nota >= 70){
    console.log("C");    
} else if(nota >= 60){
    console.log("D");    
} else if(nota >= 50){
    console.log("E");    
} else if(nota < 50 && nota >= 0){
    console.log("F");    
} else{
    console.log("Nota Inválida");
}

//PROGRAMA 8
const a = 3;
const b = 3;
const c = 2;

if (a%2 == 0 || b%2 == 0 || c%2 == 0) {
    console.log(true);
} else{
    console.log(false);
}

//PROGRAMA 9
const a = 3;
const b = 3;
const c = 2;

if (a%2 == 1 || b%2 == 1 || c%2 == 1) {
    console.log(true);
} else{
    console.log(false);
}

//PROGRAMA 10
const custo = 100;
const venda = 160;
const imp = 0.20;
let valorCustoTotal = "";
let lucro = "";

valorCustoTotal = custo + (custo * imp);
lucro = venda - valorCustoTotal

if (valorCustoTotal < 0) {
    console.log("Erro no valor");
}   else if(lucro < 0){
    console.log("Você está perdendo dinheiro");
}   else{
    console.log("Seu valor de custo total será R$"+valorCustoTotal);
    console.log("Seu valor de lucro será R$"+lucro);
}*/

//PROGRAMA 11
const salarioBruto = 3000;
let salarioInss = "";
let valorRest = "";
let inns = "";
let ir = "";
let irp = "";
let innsm ="";

if (salarioBruto <= 1556.94 ) {
    inns = 0.92;
}   else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ){
    inns = 0.91;
}   else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82 ){
    inns = 0.89;
}   else {
    innsm = 570.88;
}


if (salarioBruto <= 5189.82){
    salarioInss = salarioBruto * inns;
} else{
    salarioInss = salarioBruto - innsm;
}


if (salarioInss <= 1903.98 ) {
    ir = 1;
}   else if(salarioInss >= 1903.99 && salarioInss <= 2826.65 ){
    ir = 0.925;
    irp = 142.80;
}   else if(salarioInss >= 2826.66 && salarioInss <= 3751.05 ){
    ir = 0.85;
    irp = 354.80;
}   else if(salarioInss >= 3751.05 && salarioInss <= 4664.68 ){
    ir = 0.775;
    irp = 636.13;
}   else {
    ir = 0.725;
    irp = 869.36;
}
valorRest=(salarioInss * ir) + irp;
console.log("Resultado "+valorRest);