var x = 5;
var y = 30;
function oneFunctionScope (){
    let x = 10;
    function loop()
    {
        console.log(x, "index");
        console.log(y, "index");
    }
    loop();
}

oneFunctionScope();
