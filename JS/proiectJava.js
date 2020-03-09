window.onload = function(){
	//byId
	var x = document.getElementById("title");
	//x.style.fontSize = "xx-large";
	//onclick
	x.onclick = function(){
		x.style.font = "normal bold 2rem arial,serif";
	}
	//add a iframe
    var ifr = document.createElement("iframe");
    ifr.src = "https://www.tripadvisor.com";
    document.body.appendChild(ifr); 
    ifr.style.position = "relative";
    ifr.className = "tripadvisor";
	//by class
	var trip = document.getElementsByClassName("tripadvisor");
   
    	trip[0].style.position = "absolute";
    	//trip[0].style.top = "0";
    	trip[0].style.width = "97%";
    	trip[0].style.height = "67%";

    var pDel = document.getElementsByTagName("p");
    pDel[1].remove();

}

