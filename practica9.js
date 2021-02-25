//ejercicio dia de la semana 
// creamos varianle para almacenar el dia a la semana
let dia = prompt("Ingresa un dia a la semana");
//convertir lo que escriba el usuario  en minuculas
dia = dia.toLowerCase();
// validamos el dia si es entre semana o fin de semana
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia== "jueves" ) { // esto esc una  o = ||
    alert("Es un dia entre semana");
} else {
    if (dia == "sabado" || dia == "domingo") {
        alert("Es un fin de semana");
    } else {
        alert("Por favor ingresa un dia de la semana");
    }
   
}


/**
 *  1  - que pasa si no escriben nada
 * 2 - que pasa si usan mayusculas
 * 3 - si escribe otra cosa que no se ha solicitado
 * 4- Tildes tienen que estar programadas por el idioma espanol
 */