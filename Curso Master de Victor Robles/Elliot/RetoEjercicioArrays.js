var numbers = new Array(6);

for(var i = 0; i < 6; i++)
{
    let number = parseInt(prompt("digiter un numero"));
    if(isNaN(number))
    {
         i--;
    }
    else
    {
        numbers[i] = number
        document.write(`posicion: ${i} valor: ${numbers[i]} <br>`);
        
    }
}
numbers.forEach((number,i ) => console.log(`posicion: ${i} valor: ${numbers[i]}`));

console.log("array ordenado " + numbers.sort());

console.log("Orden inverso " + numbers.reverse());

console.log("tamaño del array: " + numbers.length);

var valor = numbers.indexOf(parseInt(prompt("digite un numero para buscarlo")));

if(valor > -1)
{
console.log(`Index del numero encontrado ${valor} y el numero es ${numbers[valor]}`);
}
else
console.log("Numero no escontrado");