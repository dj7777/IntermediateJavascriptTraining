document.getElementById("checkoutdiv").style.display = "none";
document.getElementById("products").onmouseover = function(event){		
	var elem = event.target;
	if(elem.hasAttribute("src")){
		//alert(event.target);
		var id=elem.getAttribute("src");
		id= id.split(".");
		var id1 = id[0].split("/");
		//alert(id1[1]);
		changePic(id1[1],event.target);		
	}
};

document.getElementById("checkout").onclick =function(){
	document.getElementById("checkoutdiv").style.display = "";
};

document.getElementById("products").onclick = function(event){
	document.getElementById("noItemMsg").style.display = "none";
	// here implmentation
	
};
document.getElementById("cart-content").onclick = function(event){	
	var len = elemOL.childNodes.length;
	// Here implmentation
	if(len == 3){
	document.getElementById("noItemMsg").style.display = "block";
	}	
};
document.getElementById("remove").onclick = function(){
	
	// here implementation
	
};




document.getElementById("submit").onclick = function(){
	// Here is AJAX implementation to send data to the server in .jsp file.
};


function changePic(name,elemImg){
	var max = 3;
	var min = 1;
	
	var num = Math.floor(Math.random()* max - min + 1)+ min;
	
	//elemImg.style.display="";
	elemImg.setAttribute("src","laptops/"+name+"/"+name+""+num+".jpg");

	
}