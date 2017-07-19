document.getElementById("checkoutdiv").style.display = "none";
document.getElementById("products").onmouseover = function(event){

	var arr = document.getElementsByTagName('div');	
//	console.log(arr[1].childNodes);
	/*for(var i in arr){
	if(arr[i].title== "Apple"){
		var childs =arr[1].childNodes;
		//console.log(childs[1].attributes);
		changePic(arr[i].title,event.target);
	}	
	if(arr[i].title== "Dell"){
		var childs =arr[1].childNodes;
		//console.log(childs[1].attributes);
			changePic(childs[1],event.target);
	}	
	if(arr[i].title== "hp"){
		var childs =arr[1].childNodes;
		//console.log(childs[1].attributes);
			changePic(childs[1],event.target);
	}	

	}
*/	// Your code here

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

	var elem = event.target;
	if(elem.hasAttribute("src")){

		
		var elements = elem.parentNode.childNodes;
	//	console.log(elements);
	//	console.log(elements[3].innerText);
	
	//	console.log(elements[4].textContent+elements[5].textContent+elements[6].textContent);
		  var newLi = document.createElement('li');
			newLi.innerHTML = elements[3].childNodes[1].innerHTML+" "+ elements[5].textContent;
			
			var newImg = document.createElement('img');
			newImg.setAttribute("src","images/invalid.png");
			newImg.setAttribute("id","rmsing");
			newImg.style.display = "inline";
			var newInput = document.createElement('input');
			var br = document.createElement('br');
			newInput.setAttribute("type","number");
			newInput.setAttribute("id","qty");
			newInput.style.display = "inline";
			newLi.style.display = "inline";

		document.getElementById('cart-content').childNodes[1].append(newImg);
		document.getElementById('cart-content').childNodes[1].append(newLi);
		document.getElementById('cart-content').childNodes[1].append(newInput);
		document.getElementById('cart-content').childNodes[1].append(br);
		}


	
	//console.log(elem);

	
};
document.getElementById("cart-content").onclick = function(event){	
	// Your code here	
};
document.getElementById("remove").onclick = function(){	
	console.log("In Remove!");
	removeAll();
	function removeAll(){
    /*var delAll = document.getElementsByTagName('li');
     document.removeChild(delAll);*/

	 var delAll = document.getElementById('cart-content');
    	 console.log(delAll.childNodes);
		 delAll.removeChild(delAll.childNodes[1]);

		 var newLi = document.createElement('li');
			newLi.innerHTML = "You have no items in your cart.";
		var newOl = document.createElement('ol');

document.getElementById('cart-content').append(newOl);
	//var addLi= document.getElementById('cart-content');
	newOl.append(newLi);
	}

	
	// Your code here
};


document.getElementById("submit").onclick = function(){
	// Here is AJAX implementation to send data to the server in .jsp file.
};
/*function changePic(name,elemImg){	
	console.log("Method called");
	name.src=elemImg;
}*/

function changePic(name,elemImg){
	var max = 3;
	var min = 1;
	var num = Math.floor(Math.random()* max - min + 1)+ min;
	
	//elemImg.style.display="";
	elemImg.setAttribute("src","laptops/"+name+"/"+name+""+num+".jpg");

	
}