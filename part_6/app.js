let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


let content = document.querySelector('.content');

content.classList.add("newClass")