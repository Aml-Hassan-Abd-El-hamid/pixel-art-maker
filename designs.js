//# Pixel Art Maker Project

//## Table of Contents

//* [Instructions](#instructions)
//* [Contributing](#contributing)

//## Instructions
//To get started, open `designs.js` and start building out the app's functionality.
let table = document.querySelector("table");
let form = document.querySelector("form");
const c = document.getElementById('pixelCanvas');
var col = document.querySelector("#colorPicker").value;
form.addEventListener("submit", function (event) {
    event.preventDefault();
    makGrade();
});
function makGrade() {
    c.innerHTML = '';
    let height = document.querySelector("#inputHeight").value;
    let width = document.querySelector("#inputWidth").value;
    grid(height, width);
    color();
}
function grid(hi, wi) {
    for (var i = 0; i < hi; i++) {
        let b = document.createElement("tr")
        for (var j = 0; j < wi; j++) {
            var c = document.createElement("td")
            b.appendChild(c);
        }
        document.querySelector('table').appendChild(b)
    }
}
function color(){
    document.getElementById("colorPicker").addEventListener("input", function pic() {
        col = document.querySelector("#colorPicker").value
        console.log(col)
    })
    //function to know which cell was clicked & color it
    table.addEventListener("click", function (e) {
        e.target.style.backgroundColor = col;
    })
}