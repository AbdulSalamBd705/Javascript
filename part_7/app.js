// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e)=>{
//   console.log(e)
// }

// let box = document.querySelector("#box");

// box.onmouseover = ()=>{
//   console.log("you are inside div")
// }

// Events Listeners

// addEventListener(event, callback)
// removeEventListener(event, callback)

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt)=>{
//   console.log("button1 was clicked");
//   console.log(evt);
// })

// const handler3 = ()=>{
//   console.log("button2 was clicked - hendler3")
// }
// btn1.addEventListener("click", handler3);

// btn1.removeEventListener("click", handler3);

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// modeBtn.addEventListener("click", ()=>{
//   if(currMode === "light"){
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   }
//   else {
//     currMode = 'light';
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   console.log(currMode);
// })


let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

mode.addEventListener("click", ()=>{
  if(currMode === "light"){
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }
  else{
    currMode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }
})