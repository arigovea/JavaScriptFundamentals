//if, else if
let hora = 15;
function saludo (hora){ 
    let mensaje = "";
    if ((hora >= 6) && (hora <12)){
    mensaje = "Buenos dias";
    }
    else if ((hora >= 12) && (hora < 20)){
        mensaje = "Buenas tardes";
    }
    else{
        mensaje = "Buenas noches";
    }

    return false;
}
let mensaje = saludo(hora);
console.log(mensaje);

let width = "";
let height = "";
function foto (width, height){
    let tipo = "";
    if(width > height){
        tipo = "landscape";
    }
    else if (width < height){
        tipo = "portrait";
    }
    else if( width = height){
        tipo = "1:1";
    }
    return tipo;
}
console.log(foto(100, 100));

function landscape (width, height){
    let fotos = "";
    if(width > height){
        return true;
    }
    else{
        return false;
    }
}
console.log(landscape(700, 300));

//switch case
hora = 22;
function saludo1 (hora){
    switch(hora){
        case 6:
            console.log("Buenos dias")
        break;
        case 12:
            console.log("Buenas tardes")
        break;
        case 20:
            console.log("Buenas noches")
        break;
    }
}
 saludo1(20);

 //
 function saludoempresa(role){
     let saludo = "";
     switch(role){
         case "Recursos Humanos":
             saludo = "Hola compañero de " + role
         break;
         case "IT":
            saludo = "Hola compañero de ", role
         break;
         case "Contabilidad":
            saludo = "Hola compañero de " + role
         break;
         default:
            saludo = "Hola invitado";
     }    
     console.log(saludo);
  
 }
 let role = "Recursos Humanos";
 saludoempresa(role);
 
 //request al servidor
 function getpage(){
     const responseCode = 500;

     switch(responseCode){
         case 200:
             console.log("Ok");
         break;
         case 404:
             console.log("Not found");
         break;
         case 500:
             console.log("Server Error");
         break;
         default:
             console.log("We can't resolve the request Code");

     }
 }
 getpage();

 //impresion de numeros
  for(let i = 1; i <= 10; i++)
  {
      console.log("Index", i);
  }
//
let person = {
    name: "Ari",
    edad: 25,
};

for(let key in person){
    console.log(key);
}

//let manzana = {
    //color: "roja",
    //size: "chica",
    //peso: 0.3,
    //sabor: "dulce",

//};
//console.log("Mi manzana es:")
//for (let propiedad in manzana)
//{
// if( propiedad !== "peso"){
 
    //console.log(propiedad, "es", manzana[propiedad], "yumi");
 //}
    //else{
    //console.log(propiedad, "es", manzana[propiedad], "kg yumi");
    //}
//}

let numeros = [12, 34, 56, 8, 90];
for(let numero in numeros)
{
    console.log("Index", numero);

}

for(let numero of numeros){
    console.log(numero);
}

//While, do while
let consumedMB = 6;
//while(consumedMB > 2.5){
//    checkingIsNecesary(consumedMB);
//    consumedMB--;

do{
    checkingIsNecesary(consumedMB);
    --consumedMB;
} while ( consumedMB > 2.5)
   
function checkingIsNecesary(trafic){
    console.log("Checking Trafic", trafic);
    if ( trafic > 2.5){
    console.log("There is some trafic")
    }
    else{
    console.log("You can stop checking trafic")
    }
}

checkingIsNecesary(consumedMB);

//while(true){
//    console.log(1);
//}

for (let i = 0; i < 10; i++){
    if(i > 5) {
    console.log("Estoy en el if", i);
    continue ;
    }
    console.log("Index", i);
}

