function setColor(){
    let element = document.getElementsByTagName('body');
    document.body.style.backgroundColor = "purple";

}

function changeLetterColor(){
    let elem = document.getElementById('contenedor');
    elem.style.color = "blue";
}

//onmouseout

function changeColoragain(){
    let elm = document.getElementById('contenedor');
    elm.style.color = "black";
}

//acceder a archivos de documento usamos DOM
//acceder a archivos de toda la pagina usamos window
//Selectors: 

function save (){ 
    let inputValue = document.getElementById('name');
    alert("El elemento ha sido guardado de manera correcta" + inputValue)

}