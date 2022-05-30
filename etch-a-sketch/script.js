const gridContainer = document.querySelector('.container');
const inputRange = document.getElementById('pixel');
const inputColor = document.getElementById('choice');
const colorButton = document.querySelector('.color');
const rainbowButton = document.querySelector('.rainbow');
const eraserButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');

const DEFAULT_COLOR = 'black'
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16; 

// default setting
makeGrid(DEFAULT_SIZE);
adjustWidthHeight(DEFAULT_SIZE);
setColorMode(DEFAULT_COLOR);

// event that responds for the change of range input
inputRange.addEventListener('change', (e) => {
    length = e.target.value;
    resetGrid();
    makeGrid(length);
    adjustWidthHeight(length);
    setColorMode(inputColor.value);
})

// event that responds for chance of color input
inputColor.addEventListener('change', (e) => {
    setColorMode(e.target.value);
})

// set color mode to selected color input
colorButton.addEventListener('click', () => {
    setColorMode(inputColor.value);
})

// set color mode to rainbow input
rainbowButton.addEventListener('click', () => {
    setColorMode('rainbow');
})

// set eraser mode
eraserButton.addEventListener('click', () => {
    setColorMode('eraser');
})

resetButton.addEventListener('click', () => {
    eraseAll();
})

function eraseAll() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.style.backgroundColor = 'rgba(254, 254, 254, 1)';
    })
}

function setColorMode(color) {
    const columns = document.querySelectorAll('.column');
    if (color == DEFAULT_COLOR) {
        columns.forEach(column => {
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = DEFAULT_COLOR;
            })
        })
    } else if (color == 'rainbow') {
        columns.forEach(column => {
            column.addEventListener('mouseover', () => {
                const randomR = Math.floor(Math.random() * 256);
                const randomG = Math.floor(Math.random() * 256);
                const randomB = Math.floor(Math.random() * 256);
                column.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            })
        })
    } else if (color == 'eraser') {
        columns.forEach(column => {
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = '#fefefe';
            })
        })
    } else {
        columns.forEach(column => {
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = color;
            })
        })
    }
}

function resetGrid(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function makeGrid(length) {
    
    for (let i = 0; i < length; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;

        for (let j = 0; j < length; j++) {
            const column = document.createElement('div');
            column.className = 'column';
            column.id = 'column' + j;
            row.appendChild(column);
        }

        gridContainer.append(row);
    }
}

function adjustWidthHeight(length) {

    const rows = document.querySelectorAll('.row');
    const columns = document.querySelectorAll('.column');
    const desired = (450 / length) + 'px';

    rows.forEach(row => {
        row.style.height = desired;
    })

    columns.forEach(column => {
        column.setAttribute('style', `width: ${desired}; height: ${desired};`);
    })
}