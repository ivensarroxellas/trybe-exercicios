let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let final = 0;
let contador = 0;
let impares = 0;
let contadorm = numbers[0];
let arr = [];
let arr2 = [];


for (let index = 0; index < numbers.length; index++) {
    total = total + numbers[index];
    if (contador < numbers[index]) {
        contador = numbers[index]
    }
    if (contadorm > numbers[index]) {
        contadorm = numbers[index]
    }
    if (numbers[index]%2 == 1) {
        impares++
    }

}
final = total/(numbers.length-1)
for (let index = 0; index < 26; index++) {
    arr.push(index);
}
for (let index = 0; index < numbers.length; index++) {
    arr2.push(numbers[index]/2);
    
}

//console log
/*1*/    console.log(numbers)
/*2*/    console.log("Soma dos valores da array "+total);
/*3*/    console.log("A média é "+final)
/*4*/   if (final > 20) {
         console.log("Valor maior que 20");
    }   else{
         console.log("Valor menor ou igual a 20");
    }
/*5*/    console.log("O maior valor é "+contador);
/*6*/   if (impares > 0) {
         console.log("Valores ímpares "+impares);
    }   else{
         console.log("Nenhum valor ímpar");
    }
/*7*/    console.log("O menor valor é "+contadorm);
/*8*/    console.log(arr);
/*9*/    console.log(arr2)