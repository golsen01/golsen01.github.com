
function loadmsg(){
	
	name = document.getElementById("msg").value;
	
	block = document.getElementById("block");
	block.innerHTML = ' ';
	
	left = document.getElementById("left");
	right = document.getElementById("right");
	
	if (name == "Liz" || name == "liz" || name == "Elizabeth" || name == "elizabeth"){
		image(1);
		address = document.createTextNode("Hi beautiful!");
		block.appendChild(address);
		tag = document.createTextNode("Happy Valentine's Day! I love you and I will carry you off to be my cave wife forever!");
		block.appendChild(tag);
	}
	else if (name == "erik" || name == "Erik" || name == "pet fish"){
		image(2);
		address = document.createTextNode("Hey good lookin, just wanted to say Happy Halloween! ");
		block.appendChild(address);
		var a = document.createElement('a');
		var linkText = document.createTextNode(" click me");
		a.appendChild(linkText);
		a.title = " click me";
		a.href = "../special.html";
		document.body.appendChild(a);
		
	}
}

function image(num){
	document.getElementById('background').className="bg"+num;
}



