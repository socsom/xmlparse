var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "questions.xml", true);
xhttp.send();
//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml) {
    var xmlDoc = dadesXml.responseXML;//Parse XML to xmlDoc
   
  
      //*****************************************************************************PREGUNTA 1*******************RADIO2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var title1 = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
 var opcionesRadio2 = [];
 var nopt1 = xmlDoc.getElementById("pregunta_001").getElementsByTagName('option').length;
 for (i = 0; i < nopt1; i++) { 
    opcionesRadio2[i]=xmlDoc.getElementById("pregunta_001").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosRadio2Html(title1,opcionesRadio2);
 // FALTA GUARDAR LAS RESPUESTAS
 
 // Ahora ponemos esos datos recuperados de titulos y opciones en el HTML con la siguiente funcion:
function ponerDatosRadio2Html(t,opt){
 var radioContainer=document.getElementById('title1');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="color";
    input.id="color_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
 }  
}       
    
    
   
}
