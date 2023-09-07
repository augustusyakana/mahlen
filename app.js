const gridContainer = document.querySelector('.gridContainer');
let numberOfRows = 16

let containerSize = gridContainer.clientWidth;
let cellSize = 400 / numberOfRows;



function createGrid(rows) {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < rows; j++) {
            let cells = document.createElement('div');
            cells.classList = "cells";
            cells.setAttribute('style', `width: ${cellSize}px;`);
            gridContainer.appendChild(cells);
            
        }
    }
}

console.log(squares);
createGrid(numberOfRows);