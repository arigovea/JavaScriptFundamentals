let salarydaily = 333;
let role = "Full Stack Developer";
let isFullStack = true;

let impuesto="isr";
let salario=333;
const iva=16;

console.log("Impuesto", impuesto, 200);
impuesto = 100;
console.log("Nuevo impuesto", impuesto);

function showNumbers(){
    for(let  i = 0; i < 5; i++)
    console.log("index", i);
    console.log("index", i);
}

let name = "Ari";

console.log ("name", typeof(name));

let a = 10;
let b = 7;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log(++a);
console.log(--a);

a = 10;
a += b;
console.log(a);
a = 10;
b = 7;

a -= b;
console.log(a);
a = 10;
b = 7;

a *= b;
console.log(a);
a = 10;
b = 7;

a /= b;
console.log(a);
a = 10;
b = 7;

a %= b;
console.log(a);

a = 15;
b = 25;

//Operadores Racionales 

console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);

//Operadores de Igualdad

let x = true;
let y = 1;
console.log(x == y);
console.log(x != y);

//Operador Ternario ?

let result = a > b ? "a es el mayor" : "b es el mayor";
console.log(result);

let color1 = "Red";
let color2 = "Blue";

console.log(color1);
console.log(color2);

let color3 = color1;
color1 = color2;
color2 = color3;

console.log(color2);
console.log(color1);

//
a = 5;
b = 10;
let c = 8;
let d = 10;
console.log(!(a > b));

console.log( undefined || "" || null ||10);
 color1 = "red";
  let defaultcolor = "Blue" || color1;
  console.log(defaultcolor);
