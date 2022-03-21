let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let pais = "";
for (let i = 0; i < countries.length; i++) {
	let opciones = document.createElement("option");
    pais = countries[i];
    opciones.appendChild(document.createTextNode(pais));
    document.getElementById("mySelect").appendChild(opciones);
}

document.getElementById("mySelect").addEventListener("change", function() {
    alert(document.getElementById("mySelect").value);
})

