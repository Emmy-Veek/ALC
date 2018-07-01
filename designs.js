// setting code to get input from the html form to the variable created
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWeight");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

// adding eventlistener to the color when clicked
color.addEventListener("click", function(){});

// action on the submit button when clicked
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}
// alternative code:
// while (table.rows.length > 0) {
//  table.deleteRow(0);
// }

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
