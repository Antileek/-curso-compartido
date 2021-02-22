var suma = 0;
var num;
var contador = 0;

var vNum = [0];

do
{
    num = parseInt(prompt("digita un numero, si es negativo parara de escribir"));

    if(num >= 0)
    {
    suma += num;
    vNum[contador] = num;
    contador++;
    }
    else if(num<0)
    {
        break;
    }
    else 
    {console.log("digite numeros");}
    


}while(num >= 0 || isNaN(num));

document.write("La suma de los numeros es: " + suma + "<br/>");
document.write("La media de los numeros es: " + suma/contador + "<br/>");

vNum.forEach(numeros => {
    document.write("<h1> numero: " + numeros + "</h1> <br/>");
});
