let color = 'black';
let click = true;

const addSquares = (size) => {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;


    for(i=0; i<(size*size); i++){
        let square = document.createElement('div');
        square.style.backgroundColor = "white";
        square.style.borderRight = "thin solid darkgrey";
        square.style.borderBottom = "thin solid darkgrey";

        square.addEventListener("mouseover", colorSquare);
        board.insertAdjacentElement('beforeend', square); 
    }
}

addSquares(16);


const changeSize = (input) => {
    if(input < 2) return console.log("too few squares");
    if(input > 100) return console.log("too many squares");
    addSquares(input);
}

function colorSquare() {
  if (click) {
    if(color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color; //why does this work?
    }
  }

}

const changeColor = (choice) => {
    color=choice;
}


function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    addSquares(16);
}

document.querySelector("body").addEventListener("click", (e)=> {
    if(e.target.tagName !== "BUTTON"){
        click = !click;
        if(click){
            document.querySelector('.mode').textContent = "Coloring: On";
        } else {
            document.querySelector('.mode').textContent = "Coloring: Off";
        }
    }

})