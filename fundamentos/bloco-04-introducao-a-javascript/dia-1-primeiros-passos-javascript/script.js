//const myName= "Ivens";
//const birthCity= "Maceió";
//let birthYear= 1995;
//birthYear = 2030;
//birthCity = "Recife";

//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);

//--------------------------------------------------------//

//const base = 5;
//const height = 8;
//const area = base * height;
//const perimeter = (base+height)*2;

//console.log(area);
//console.log(perimeter)

//--------------------------------------------------------//

//const nota = 81;

//if(nota>80){
//   console.log("Aluno aprovado!")
//}
//else if(nota > 59 && nota < 80){
//    console.log("Você está na lista de espera")
//}
//else {
//    console.log("Aluno Reprovado!")
//}

//--------------------------------------------------------//

//const currentHour = 4;
//let message ="";

//if (currentHour >= 22) {
//    message = "Não deveríamos comer nada, é hora de dormir";     
//} else if(currentHour >= 18 && currentHour < 22) {
//    message = "Rango da noite, vamos jantar :D";
//} else if (currentHour >= 14 && currentHour < 18) {
//    message = "Vamos fazer um bolo pro café da tarde?";    
//} else if (currentHour >= 11 && currentHour < 14){
//    message = "Hora do almoço!!!";
//} else if (currentHour >= 4 && currentHour < 11){
//    message = "Hmmm, cheiro de café recém passado";
//}
//console.log(message)

//--------------------------------------------------------//

//let weekDay = "Sábado"

//if (weekDay === "Segunda-feira" ||weekDay === "Terça-feira" ||weekDay === "Quarta-feira" ||weekDay === "Quinta-feira" ||weekDay === "Sexta-feira") {
//    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
//}
//else {
//    console.log("FINALMENTE, descanso merecido UwU")
//}

//--------------------------------------------------------//

let stat ="Aprovado";

switch (stat) {
    case "Aprovado":
        console.log ("Aprovado!!")
    break;

    case "ListA":
        console.log ("Lista de espera")
    break;

    case "Reprovado":
        console.log ("Reprovado")
    break;

    default:
        console.log("Não identificado")
    break;
}