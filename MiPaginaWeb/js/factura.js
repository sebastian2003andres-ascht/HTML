var precio;
var cantidad;
var total;
var producto;

producto = 'tomate';
precio = 0.75;
cantidad = 14;
total = precio * cantidad;

// Seleccionar el elemento del documento usando el id 'cost' y cambiar su contenido con textContent
var el = document.getElementById('cost');
el.textContent = producto + ' $' + total;