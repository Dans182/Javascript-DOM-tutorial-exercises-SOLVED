// Your code here
const input = document.querySelector("input");
const ul = document.querySelector("ul");

document.getElementById("addToDo").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const text = input.value;

        const li = document.createElement("li");
        const sp = document.createElement("span");
        li.innerHTML = `<span><i class="fa fa-trash"></i></span> ` + text;        


        ul.appendChild(li);
        input.value = "";
    }
})


document.addEventListener("click", function(e) {
    const item = e.target.parentElement;
    ul.removeChild(item);
});
