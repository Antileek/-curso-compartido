function lsitadoFrutas(...frutas)
{
    frutas.forEach(element => {
        console.log(element);
    });
}
var frutas = ["melon","Manzana","Mango","pera"];
lsitadoFrutas(...frutas);
