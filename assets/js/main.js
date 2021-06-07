var mensaje = "Bienvenido a nuestro sitio web";

$(".menu").on('click', function(){
    $("nav ul").toggle('slow');
})

// a continuación se muestra un mensaje
alert(mensaje);