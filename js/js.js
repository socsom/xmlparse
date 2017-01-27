var formElement=null;
var secret=50;
 
//al cargar la página... 
window.onload = function(){ 
 //pide los datos, lee preguntas.xml del servidor (por http)
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "questions.xml", true);
 xhttp.send();


//funcion donde cogemos los datos del xml y los ponemos en el html 
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML;
 document.getElementById("title").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
}
