var http=require('http') // folosim modulul 'http' predefinit
var server=http.createServer( // cream un server Web

// functie anonima ce trateaza o cerere si trimite un raspuns
function(request,response){
console.log("Am primit o cerere..");
// stabilim valori pentru diverse campuri-antet HTTP
response.writeHead(200, {"Content-Type" : "text/html"});
// emitem raspunsul propriu-zis conform tipului MIME (cod HTML)
response.end('<html><body><h1>1)Manila</h1><br><h1>2)5</h1><br><h1>3)Venezuela</h1></body></html>');
});
server.listen(7000); // serverul este pornit si asculta cereri la portul 7000 al masinii locale
console.log ('Serverul creat asteapta cereri la http://localhost:7000/');

function myFunction(){
  var elem = document.getElementsByTagName("h1")[0];
  var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
  elem.style.backgroundColor = theCSSprop+100;
}
