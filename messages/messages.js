
function loadmsg(){
	
	name = document.getElementById("msg").value;
	
	block = document.getElementById("block");
	block.innerHTML = ' ';
	
	left = document.getElementById("left");
	right = document.getElementById("right");
	
	if (name == "Liz" || name == "liz" || name == "Elizabeth" || name == "elizabeth"){
		image(1);
		address = document.createTextNode("Hi beautiful! Happy Valentine's Day! I love you and I will carry you off to be my cave wife forever!");
		block.appendChild(address);
	}
	else if (name == "erik" || name == "Erik" || name == "pet fish"){
		image(2);
		address = document.createTextNode("Hey good lookin, just wanted to say Happy Halloween! ");
		block.appendChild(address);
		var a = document.createElement('a');
		var linkText = document.createTextNode(" click me");
		a.appendChild(linkText);
		a.href = "../messages/special.html";
		document.body.appendChild(a);
	}
	
	else if (name == "watson" || name == "Watson"){
		image(3);
		address = document.createTextNode("Happy whatever day it is when you read this :P");
		block.appendChild(address);
	}
	
	else if (name == "julia" || name == "Julia"){
		image(4);
		address = document.createTextNode("Hey sexypants, Happy Valentine's Day to the best-ever roomie! --Love, future hedgehog");
		block.appendChild(address);
	}
	
	else if (name == "hannah" || name == "Hannah"){
		image(5);
		address = document.createTextNode("Hey sexypants, Happy Valentine's Day to my best friend! I got your package and your card and I even stuck the envelope to my bulletin board cause it's so cool :) Here is a picture of what you would be doing if you were here. Love ya!! ");
		block.appendChild(address);
	}
	
	else if (name == "margot" || name == "Margot"){
		image(6);
		address = document.createTextNode("Thought I'd send you some hot Monty Python ass (MPa, for short. Which makes it megapascals. I need to go to bed, don't I) for Valentine's Day. Anyway, I send much love and I'm NOT sorry!!!");
		block.appendChild(address);
	}
	
	else if (name == "tessa" || name =="Tessa"){
		image(7);
		address = document.createTextNode("Well this almost says it all...actually, no it doesn't. Not even the entire periodic table of elements would be able to describe how awesome you are. In any case, much love and have a great day!");
		block.appendChild(address);
	}
	
	else if (name == "Gabe" || name == "gabe"){
		image(8);
		address = document.createTextNode("Happy Valentine's Day, Baby!!");
		block.appendChild(address);
	}
	else{
		alert("Grace has no messages for " + name + " at this time. Please come back later!");
	}
}

function image(num){
	document.getElementById('background').className="bg"+num;
}



