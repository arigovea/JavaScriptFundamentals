
//The Keyword "this"
run();
function run(){
    console.log("running");
    console.log(this);
}
//let move = function walk(){
//    console.log("walking");
//};
//move ();
//console.log(this);

let persona = {
    name: "Ana",
    move: function (){
        console.log("I can move");
        console.log(this);
    }
}
persona.move();

function x(){
    let x = "x";
    console.log(x, this);
    function y(){
        let y = "y";
        console.log(y, this);
        function z(){
            let z = "z";
            console.log(z, this);
        }
        z();
    }
    y();
}

x();
var documentName = "JavaScript Fundamentals";
function examplethis(){
    console.log(this.documentName);
}
examplethis();

