const gridContainer = document.querySelector('.gridContainer');
const clrBtn = document.querySelector('.clear');
const rnbwBtn = document.querySelector('.rainbow');
const blkBtn = document.querySelector('.black');
const gridBtn = document.querySelector('.size');
const eraseBtn = document.querySelector('.erase');

let numberOfRows = 16

let containerSize = gridContainer.clientWidth;
// creates a 16x16 grid
function createGrid(rows) {
    for (i = 0; i < rows; i++) {
        for (j = 0; j < rows; j++) {
            let cells = document.createElement('div');
            cells.classList = "cells";
            gridContainer.setAttribute('style', `display: inline-grid; grid-template-columns: repeat(${rows}, 2fr); grid-template-rows: repeat(${rows}, 2fr);`);
            gridContainer.appendChild(cells);
            cells.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
        }
    }
}
    
gridBtn.addEventListener('click', resetGrid);
    

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

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

rnbwBtn.addEventListener('click', () => {
    let cells = gridContainer.children;
    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
})


blkBtn.addEventListener('click', () => {
    let cells = gridContainer.children;
    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
})

eraseBtn.addEventListener('click', () => {
    let cells = gridContainer.children;
    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'white';
        })
    }
})

function resetGrid(){
    numberOfRows = prompt("Enter Grid Size (1 to 99 only):")
    if (numberOfRows < 1 || numberOfRows > 99) {
        alert('invalid input!');
        gridContainer.innerHTML = '';
        createGrid(16);
    } else {
        // console.log(numberOfRows);
        gridContainer.innerHTML = '';
        createGrid(numberOfRows);
    }

    
}

createGrid(numberOfRows);