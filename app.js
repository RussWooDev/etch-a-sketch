
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

        square.addEventListener("mousedown", () => square.style.backgroundColor = "black");
        board.insertAdjacentElement('beforeend', square); 
    }
}

addSquares(16);


const changeSize = (input) => {
    if(input < 2) return console.log("too few squares");
    if(input > 100) return console.log("too many squares");
    addSquares(input);
}
