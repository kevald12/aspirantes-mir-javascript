const { log } = require("console");

function join (arr){
    let union = " ";

    arr.forEach(element => {
        union += element +" "
    });
    return union.trimEnd()
}

console.log(join(["hola", "Mundo"]));