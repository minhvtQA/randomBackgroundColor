const color = ["rgb(38, 70, 83)", "rgb(42, 157, 143)","rgb(233, 196, 106)","rgb(244, 162, 97)","rgb(231, 111, 81)"];
const background = document.body;
let button = document.querySelector("button");
button.addEventListener("click", (e)=> {
    console.log(e.target, e.type);
    background.style.backgroundColor = color[floor(Math.random())*color.length];
})
console.log(button);
console.log(color);


console.log(background);

