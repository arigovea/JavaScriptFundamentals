
//Function Declaration
function move (){ }
move();

//Function expression
//function expression name 
//; se usa aqui porque se esta asignando a una variablE
let movement = function move (){  };
movement();

//anonymus function expression 
let run = function(){  };
run();

//arrow function
let walk = () => move(); //ejecuta una declaracion
let jump = () => {}; //ejecuta todas las declaraciones

//let s = "Hola Mundo!"
//function saludo(){
//    alert (s);
//l}

//saludo();

//let holaFunctions = () => console.log("Hola mundo de las funciones");
//holaFunctions ();

let age = undefined;

let isMayorEdad = ( age ) => {
    if (age >= 18 )
      console.log("Es mayor de edad");
    else 
      console.log("No eres mayor de edad");
}

isMayorEdad(age);

console.log("Hola", 1, "Hallo", 3.0, true, undefined, "...");

//function suma(a, b){
//   return a + b;
//}
//console.log(suma(2,1,3));

//function sum(){
 //   console.log(arguments);
 //   let result = 0;
  //  for(let param of arguments){
   //     result += param;
//    }
//    return result;
//}
//console.log(sum(1, 2, 3));

function pot ( potencia, ...args){
    console.log(args);

}
console.log(pot(1, 2, 3))

let pepito = {
    gender:  "Male",
    eyes: "Negros", 
    altura: 1.90,
    colorPiel: "browm"
}
let pepita = {
    ...pepito,
    gender: "Female"
    
}
console.log("Pepito: ", pepito);
console.log("Pepita:, ", pepita);

function suma (...bananas){
    //let res = first;
    let res = 0;
    for(let value of bananas){
       res += value;
    }
    return res;
}
console.log(suma(1));

function potenciacion(potencia = 2, value1 = 1, ...rest){
     console.log(potencia);
     console.log(value1);
     console.log(rest);
}
potenciacion(3, 5, 6, 7);

let componentColor = undefined;
let themeColor = "Blue"
let defaultColor = componentColor || themeColor;
console.log(defaultColor);

function getTotalPaymentPerYear(monto, interes = 3.5, years = 4){
    
    let montoWithInteres = (monto * interes /100) + monto;
    let totalPerYear = montoWithInteres / years;
     return totalPerYear;
}
console.log(getTotalPaymentPerYear(1000, 4.5, 6));

