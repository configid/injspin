function spin() {
    const spinCount = document.getElementById("spinCount").value || 1;
    startSpin(spinCount);
}

function autoSpin(count) {
    startSpin(count);
}

function startSpin(count) {
    const symbols = ["😎", "😂", "🤣", "😍", "😘", "😅", "🥰", "🤩", "😣", "🥱", "😴", "😛", "😜", "😭", "🤑"];
    const resultDiv = document.getElementById("result");

    // Disable the button during the spin
    document.querySelector("button").disabled = true;

    // Add a class to trigger the roll animation
    document.querySelectorAll(".slot").forEach(slot => slot.classList.add("rolling"));

    let spinsLeft = count;

    function spinOnce() {
        // Randomly select symbols for each slot
        const symbolMatrix = [
            [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
            [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
            [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
            [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
            [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
            [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
        ];

        // Display symbols
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 5; j++) {
                document.getElementById(`slot${i * 5 + j + 1}`).textContent = symbolMatrix[j][i];
            }
        }

        // Check for a win
        const winSymbol = checkForWin(symbolMatrix);
        if (winSymbol) {
            const winnings = calculateWinnings(winSymbol);
            resultDiv.textContent = `Congratulations! You won ${winnings} coins with ${winSymbol} combination.`;
        } else {
            resultDiv.textContent = "Sorry, try again!";
        }

        spinsLeft--;

        if (spinsLeft > 0) {
            // Continue spinning after a delay
            setTimeout(spinOnce, 2000);
        } else {
            // Remove the class to end the roll animation
            document.querySelectorAll(".slot").forEach(slot => slot.classList.remove("rolling"));

            // Enable the button after the spins are complete
            document.querySelector("button").disabled = false;
        }
    }

    // Start the first spin
    spinOnce();
}

function checkForWin(matrix) {
    // Check for horizontal wins
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        if (checkRowWin(row)) {
            return row[0];
        }
    }

    // Check for vertical wins
    for (let j = 0; j < matrix[0].length; j++) {
        const column = [matrix[0][j], matrix[1][j], matrix[2][j], matrix[3][j], matrix[4][j], matrix[5][j]];
        if (checkRowWin(column)) {
            return column[0];
        }
    }

    return null; // No win
}

function checkRowWin(row) {
    let currentSymbol = row[0];
    let count = 1;

    for (let i = 1; i < row.length; i++) {
        if (row[i] === currentSymbol) {
            count++;
            if (count === 8) {
                return true; // Win if there are 8 consecutive symbols
            }
        } else {
            currentSymbol = row[i];
            count = 1;
        }
    }

    return false;
}

function calculateWinnings(winSymbol) {
    const symbolValues = {
        "😎": 100,
        "😂": 50,
        "🤣": 30,
        "😍": 20,
        "😘": 10,
        "😅": 5,
        // ... add other symbols as needed
    };

    return symbolValues[winSymbol] || 0;
}
