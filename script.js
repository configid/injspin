function spinOnce() {
    // Randomly select symbols for each slot
    const symbols = ["😎", "😂", "🤣", "😍", "😘", "😅", "🥰", "🤩", "😣", "🥱", "😴", "😛", "😜", "😭", "🤑"];
    const symbolMatrix = [
        [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
        [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
        [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]]
    ];

    // Display symbols
    slot1.textContent = symbolMatrix[0][0];
    slot2.textContent = symbolMatrix[0][1];
    slot3.textContent = symbolMatrix[0][2];
    slot4.textContent = symbolMatrix[1][0];
    slot5.textContent = symbolMatrix[1][1];
    slot6.textContent = symbolMatrix[1][2];

    // Check for a win
    const winSymbol = checkForWin(symbolMatrix);
    if (winSymbol) {
        // Logika kemenangan di sini, sesuai simbol yang menang
        const winnings = calculateWinnings(winSymbol); // Menghitung kemenangan berdasarkan simbol

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
        slot1.classList.remove("rolling");
        slot2.classList.remove("rolling");
        slot3.classList.remove("rolling");
        slot4.classList.remove("rolling");
        slot5.classList.remove("rolling");
        slot6.classList.remove("rolling");

        // Enable the button after the spins are complete
        document.querySelector("button").disabled = false;
    }
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


function checkRowWin(row) {
    const symbolCount = {};
    for (const symbol of row) {
        symbolCount[symbol] = (symbolCount[symbol] || 0) + 1;
    }

    for (const symbol in symbolCount) {
        if (symbolCount[symbol] >= 8) {
            return true; // Win if there are 8 or more of the same symbol in a row
        }
    }

    return false;
}

function calculateWinnings(winSymbol) {
    // Logika untuk menghitung kemenangan berdasarkan simbol
    // Misalnya, Anda dapat mengatur nilai kemenangan berdasarkan simbol tertentu
    const symbolValues = {
        "😎": 100,
        "😂": 50,
        "🤣": 30,
        "😍": 20,
        "😘": 10,
        "😅": 5,
        // ... tambahkan simbol lain sesuai kebutuhan
    };

    return symbolValues[winSymbol] || 0;
}
