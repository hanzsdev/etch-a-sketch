function userPrompt() {
    const button = document.querySelector('.button');
    console.log(button);

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

function grid(value) {
    const cellSize = 640 / value 

    const container = document.querySelector('.main-grid-container');

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
};

grid(16);