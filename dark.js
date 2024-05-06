
var dark = false;

var a = document.body;
var p = document.getElementById("select")


function darkLight() {
	
	if (!dark) {
		
		a.className = "theme-dark";
		
		p.innerHTML = "Включить светлую тему";

	} else {
		
		a.className = "theme-light";
		
		p.innerHTML = "Включить тёмную тему";
	}

	
	dark = !dark;
	
} 