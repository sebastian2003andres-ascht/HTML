var today = new Date();
var hourNow = today.getHours();
var saludo;

// Impresion en la consola del navegador
console.log(today);
console.log(hourNow);

// Sentencias de control para definir el saludo segun la hora
if (hourNow > 18)
{
    saludo = "Buenas noches";
}
else if (hourNow > 12)
{
    saludo = "Buenas tardes";
}
else if (hourNow > 0)
{
    saludo = "Buenos dias";
}
else
{
    saludo = "¡Bienvenido!";
}

// Impresion en la pagina HTML
document.write('<h3>' + saludo + '</h3>');