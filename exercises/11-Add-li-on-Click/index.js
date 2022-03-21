let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	
	let lista = document.createElement("li");
	lista.innerHTML = "Forth Element";
	document.getElementById("myList").appendChild(lista);
});
