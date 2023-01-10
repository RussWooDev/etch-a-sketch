const addSquares = (size) => {
    let board = document.querySelector('.sketchboard');
    board.style.gridTemplateColumns = 'repeat(16 , 1fr)'
    board.style.gridTemplateRows = 'repeat(16 , 1fr)'
   
    for(let i=0; i<256; i++){
        let square = document.createElement('div');
        square.style.backgroundColor="gray";
        board.insertAdjacentElement('beforeend' , square)
    }
} 

addSquares(16)
