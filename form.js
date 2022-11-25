document.querySelector('#submit').addEventListener('click',function(){

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "573227038265";

    let nombre = document.querySelector("#nombre").value;
    let mail = document.querySelector("#mail").value;
    let titulo = document.querySelector("#titulo").value;
    let texto = document.querySelector("#texto").value;

    let url = "https://web.whatsapp.com/send?phone=573227038265&text= Hola Comida Japonesa%0A Soy " + nombre + "%0A Mi E-mail es: " + mail + "%0A Quiero hablarles sobre: " + titulo + "%0A Mi mensaje es: " + texto;

    window.open(url);
});