const color = ["rgb(38, 70, 83)", "rgb(42, 157, 143)","rgb(233, 196, 106)","rgb(244, 162, 97)","rgb(231, 111, 81)"];
const background = document.body;
let button = document.querySelector("button");
let compareConflic = null;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

button.addEventListener("click", (e)=> {
    console.log(e.target, e.type);
    let conflic = color[getRandomInt(color.length)];
    console.log(conflic);

    if(conflic != compareConflic){
        compareConflic = conflic;
        background.style.backgroundColor = conflic;
    }
})
console.log(button);
console.log(color);
console.log(background);

