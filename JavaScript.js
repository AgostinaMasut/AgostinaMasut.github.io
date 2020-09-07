var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup"),
    adivinanza = "",
    ganaste = "",
    i = 4;
const respuestaCorrecta = "Australia",
    primeraPista = "Otro postre tipico de la regio son los Lamingtons",
    segundaPista = "Es el hogar de koalas y kanguros",
    adivinizaAcertada = "Felicitaciones ¡Adivinaste! ",
    sortea = "Ya estas participando del sorteo";
    

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

function darPista(){
    event.preventDefault();
    adivinanza = "";
    adivinanza += "<p><b>" + "PISTA " + "</b></p>" + "<p>" + primeraPista + "</p>" + "<hr>";
    document.getElementById("pista1").innerHTML = adivinanza;
}

function adivinar(){
    event.preventDefault();
    let respuesta = document.getElementById("respuesta").value;
    
        if (i > 0) {
            i--;
            if (respuesta != respuestaCorrecta) {
                adivinanza = "";
                adivinanza += "<p><b>" + "PISTA " + "</b></p>" + "<p>" + segundaPista + "</p>" + "<hr>";
                document.getElementById("pista2").innerHTML = adivinanza;
            }
            if(respuesta === respuestaCorrecta){
                ganaste += "<h4>" + adivinizaAcertada +"<br>"+ sortea +"</h4>"
                document.getElementById('ganaste').innerHTML = ganaste;
            }
        }
    
}




/*let felicitaciones = document.getElementById("alertaCorrecta").value;
    var mostrar="";
function jugar_ahora() {
    var cant_intentos = 4;
    var acierto = false;
    var answer;
    var correctAnswer = "Wesley";
    var nombre=document.getElementById("nombre").value;
    {
        while(cant_intentos>0 && acierto!=true)
        {
            cant_intentos--;
            answer = prompt("Ingrese respuesta");
            if (answer===correctAnswer )
            {
                alert("Adivinaste Felicitaciones !!!");
                acierto = true;	
            }
            else if ( cant_intentos==3 && acierto!=true)
            {
                alert("PISTA 1 : Se hace amigo de Traveler, un viajero en el tiempo quién descubre su alto coeficiente intelectual");
            }
            else if (cant_intentos==2 && acierto!=true)
            {
                alert("PISTA 2 : Es llevado a juicio y casi ejecutado  por dañar un jardin de flores");
            }
            else if(cant_intentos==1 && acierto!=true)
            {
                alert("LE QUEDA " + cant_intentos + " INTENTO !!! PISTA 3 : No es un adroide");
            }
        }
        document.getElementById("solution").innerHTML="El personaje es : <h3>" + correctAnswer + "</h3>";
    }
}

btnEnviar.addEventListener('click', function (e) {
    

});

function adivinar(){
    for(i, i> -1, i--){
        let respuesta = document.addEventListener("respuesta").value;
    }
};*/
