window.onload = function(){
var x = document.getElementsByTagName("p")[0];
var y = document.getElementsByTagName("p")[1];
y.onclick = function(){
  x.style.fontSize = "1.5rem";
  y.style.fontSize = "1.5rem";
}
x.onclick = function(){
  x.style.fontSize = "1.5rem";
  y.style.fontSize = "1.5rem";
}
var tbl = document.querySelectorAll("table tr:nth-child(odd)");
    for(var i=0;i<tbl.length;i++)
      tbl[i].style.color= "blue";

}