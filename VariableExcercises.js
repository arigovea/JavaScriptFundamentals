// Madame zazu
let city = "Alemania";
let children = "3";
let husband = "1";
let work = "CEO de una empresa";
let mascotas = "dos conejos";

console.log("Madame Zazu dijo que: " + 
"vivire en " + city + 
", que tendre " + children + " hijos" + 
", que tendre " + husband + " esposo" +
", que sere " + work +
", que tendre "+ mascotas);

const MadameZazuPrediction = "";

// Calculadora de edad

let year = 1994;
const actual = 2020;
function edad(year, actual){
    return actual - year;
}
console.log(edad(1994, 2020));

// Calculadora de figuras geometricas.

//for(let i = 0; i <= 10; i++)
  //{  
    //console.log("Stars: ", i, stars);
    //stars = stars + "*";
     // }
     let i = 0;
     let stars = "";
      while( i <= 10){
        console.log("Stars; ", i, stars);
        stars = stars + "*";
        i++;
      }

let s = 0;
starss = "";
      do{
        console.log("Stars; ", s, starss);
        starss = starss + "*";
        s++; 
    } while (s <= 10)
   

// Águila o Sello

//Tablas de 1 a 10, 

for (i = 1; i <= 10; i++){
  for(j = 1; j <=10; j++){
      r = i * j;
      console.log(i, "*", j, "=", r);
  }
}


// intercambiando variables 
let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);