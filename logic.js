const board = document.getElementById('board');
const numbers = Array.from({ length: 90 }, (_, i) => i + 1);
const drawnNumbers = new Set();

numbers.forEach(num => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = 'cell-' + num;
    cell.textContent = num;
    board.appendChild(cell);
});

// Draw number logic
function drawNumber() {
    const availableNumbers = numbers.filter(n => !drawnNumbers.has(n));
    if (availableNumbers.length === 0) {
        alert('All numbers have been drawn!');
        return;
    }
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const selectedNumber = availableNumbers[randomIndex];
    drawnNumbers.add(selectedNumber);

    document.getElementById('cell-' + selectedNumber).classList.add('highlighted');

    const numberDisplay = document.getElementById("numberDisplay");
    numberDisplay.textContent = selectedNumber;

    numberDisplay.classList.remove("animated");
    void numberDisplay.offsetWidth;
    numberDisplay.classList.add("animated");
}

document.getElementById('drawButton').addEventListener('click', drawNumber);
