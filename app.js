const gridContainer = document.querySelector('.gridContainer');
const clrBtn = document.querySelector('.clear');
let numberOfRows = 16

let containerSize = gridContainer.clientWidth;
// creates a 16x16 grid
function createGrid(rows) {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < rows; j++) {
            let cells = document.createElement('div');
            cells.classList = "cells";
            gridContainer.appendChild(cells);
            cells.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
        }
    }
}

// clears all the colors on the grid
clrBtn.addEventListener('click', () =>{
    clearGrid(numberOfRows);
})
function clearGrid(rows) {
    
    let cells = gridContainer.children;
    for (let i = 0; i < rows * rows; i++) {
        cells[i].style.backgroundColor = 'white';
    }
}

createGrid(numberOfRows);