// 10. Definicion del array con los productos disponibles y bucle for (Paso 10)
var productos = ['Tomate', 'Manzana', 'Banano', 'Lechuga', 'Zanahoria'];

for (let i = 0; i < productos.length; i++) {
    console.log("Producto " + (i + 1) + ": " + productos[i]);
}

// 11. Objeto persona y funcion de saludo basica (Paso 11)
var persona = {
    "nombre": "Andres",
    "apellido": "Chiluisa",
    "edad": 22,
    "cedula": 1728189760,
    "direccion": "San Juan",
    "correo": "sebastian2003andres@gmail.com"
};

function saludo() {
    document.write("<br><h3>Hola " + persona.nombre + "</h3>");
}

// Ejecucion de la funcion de saludo basica
saludo();


// 12. Funcion con parametros que muestra un mensaje en un Alert (Paso 12)
function mostrarBienvenidaCliente(nombrePersona, correoPersona) {
    alert("¡Bienvenido, " + nombrePersona + "! Tu correo electronico registrado es: " + correoPersona);
}

// Llamada a la funcion enviando los datos del objeto persona como parametros
mostrarBienvenidaCliente(persona.nombre, persona.correo);