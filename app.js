const container = document.querySelector('#container');
let rows = document.getElementsByClassName('cell');
let columns = document.getElementsByClassName('columnCell');

function createRows(num) {
    for (let r = 0; r < num; r++) {
        let cell = document.createElement('div');
        cell.classList = 'cell'
        container.appendChild(cell);

    }
}

function createColumns(numRows) {
    for (let i = 0; i < numRows; i++) {
        for (let columns = 0; columns < rows.length; columns++) {
            let columnCell = document.createElement('div');
            columnCell.classList = 'columnCell';
            let columnCells = rows[columns].appendChild(columnCell);
            
        }
    }
}

createRows(18);
createColumns(18);