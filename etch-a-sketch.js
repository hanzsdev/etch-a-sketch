function userPrompt() {
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
        let userInput = prompt('Choose a grid size', '');
        let value = +userInput;

        if (!isNaN(userInput) && value > 0 && value <= 100) {
           grid(value);
        } else {
            alert('Enter a number between 1 - 100');
        };
    });
};

userPrompt();

function grid(value) {
    const cellSize = 640 / value 

    const container = document.querySelector('.main-grid-container');
    container.innerHTML = '';

    for(let i = 0; i < value; i++) {
        const rows = document.createElement('div');
        rows.classList.add('divRows');
        container.appendChild(rows);
            for(let j = 0; j < value; j++) {
                const columns = document.createElement('div');
                columns.classList.add('divColumns');
                columns.style.width = `${cellSize}px`;
                columns.style.height = `${cellSize}px`;
                rows.appendChild(columns);
            }
    }

    gridSelection();
};

grid(16);

function randomHex() {
    const hexiDecimal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        const randomindex = Math.floor(Math.random()* hexiDecimal.length);
        hex += hexiDecimal[randomindex];
    }
    return hex;
};

function gridSelection() {
    const grid = document.querySelectorAll('.divColumns');

    grid.forEach(item => {
        item.addEventListener('mouseover', () => {
            const randomColor = randomHex();
            item.style.backgroundColor = randomColor;
            let currentOapcity = parseFloat(item.style.opacity);
            currentOapcity = isNaN(currentOapcity) ? 1 : currentOapcity;
            const newOapcity = Math.max(currentOapcity - 0.1,0);
            item.style.opacity = newOapcity;
        });
    });
};