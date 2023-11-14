function spin() {
    const symbols = ["😎", "😂", "🤣", "😍", "😘", "😅", "🥰", "🤩", "😣", "🥱", "😴", "😛", "😜", "😭", "🤑"];
    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");
    const resultDiv = document.getElementById("result");

    // Randomly select symbols for each slot
    const symbol1 = symbols[Math.floor(Math.random() * symbols.length)];
    const symbol2 = symbols[Math.floor(Math.random() * symbols.length)];
    const symbol3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Display symbols
    slot1.textContent = symbol1;
    slot2.textContent = symbol2;
    slot3.textContent = symbol3;

    // Check for a win
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        const multiplier = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 20, 25, 50, 100, 125, 150, 200, 250, 500];
        const randomMultiplier = multiplier[Math.floor(Math.random() * multiplier.length)];
        const winnings = randomMultiplier * 10; // Assuming the bet is 10 (can be adjusted)

        resultDiv.textContent = `Congratulations! You won ${winnings} coins with a ${randomMultiplier}x multiplier.`;
    } else {
        resultDiv.textContent = "Sorry, try again!";
    }
}
