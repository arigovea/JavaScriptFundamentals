//let calculandoEdad = function (birthyear, actualyear) {
  //  return actualyear - birthyear;
//};

//let esMayorDeEdad = function (fn){
  //  let age = fn(1994, 2020);
//
  //  if (age > 18){
    //    console.log("Es mayor de edad");
    //}
    //else{
    //    console.log("No es mayor de edad");
    //}
//}

//esMayorDeEdad(calculandoEdad);

//let age = prompt("Please enter your age");
//console.log(age);

//let saludo = function (name){
  //  alert("Hola "+ name);
//};
//function getName(fn){
//    let name = prompt("Ingresa tu nombre aqui");
//    saludo (name);
//};
//getName();

//function pfn (){
   // alert("The Homework has been done!");
   // };

//function doHomeWork(pfn){
  // for(i=1; i<=100; i++){
  // console.log("Numero: " + i);
  // }
  // pfn(i);
 //}
//doHomeWork();

var num = undefined;
function dato (num){
    if(isNaN(num)){
        alert("No es un numero");
    }
    else{
        if(num % 3 == 0 && num % 5 !== 0){
            alert("Fizz");
            }
        else if(num % 5 == 0 && num % 3 !== 0){
                alert("Buzz");
                 }
        else if((num % 3 == 0) && (num % 5 == 0)){
                alert("FizzBuzz");
            }
        else{
                alert("Input");
            }
        }
    }

dato(20);

