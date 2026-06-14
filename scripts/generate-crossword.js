const fs = require('fs');
const path = require('path');

// 1. Database of Economics Terms and Clues
const ECONOMICS_WORD_BANK = [
    { answer: "INFLATION", clue: "A general increase in prices and fall in the purchasing value of money." },
    { answer: "TARIFF", clue: "A tax or duty to be paid on a particular class of imports or exports." },
    { answer: "LIQUIDITY", clue: "The availability of liquid assets to a market or a company." },
    { answer: "DEFICIT", clue: "The amount by which something, especially a sum of money, falls short." },
    { answer: "SURPLUS", clue: "An amount of something left over when requirements have been met." },
    { answer: "RECESSION", clue: "A period of temporary economic decline during which trade and industrial activity are reduced." },
    { answer: "INTEREST", clue: "Money paid regularly at a particular rate for the use of money lent." },
    { answer: "EQUITY", clue: "The value of the shares issued by a company." }
];

const GRID_SIZE = 15; // 15x15 standard grid

// Helper to create an empty grid matrix
function createEmptyGrid(size) {
    return Array(size).fill(null).map(() => Array(size).fill(' '));
}

// 2. The Core Crossword Generator Logic
function generateCrosswordLayout(wordBank) {
    // Sort words by length descending to place larger structural words first
    const sortedWords = [...wordBank].sort((a, b) => b.answer.length - a.answer.length);

    const grid = createEmptyGrid(GRID_SIZE);
    const placedWords = { across: {}, down: {} };
    let clueCounter = 1;

    // Place the very first word right in the center horizontally
    const firstWord = sortedWords[0].answer;
    const startCol = Math.max(0, Math.floor((GRID_SIZE - firstWord.length) / 2));
    const startRow = Math.floor(GRID_SIZE / 2);

    for (let i = 0; i < firstWord.length; i++) {
        grid[startRow][startCol + i] = firstWord[i];
    }

    placedWords.across[clueCounter] = {
        clue: sortedWords[0].clue,
        answer: firstWord,
        row: startRow,
        col: startCol
    };
    clueCounter++;

    // Try to place the rest of the words by intersecting them
    for (let w = 1; w < sortedWords.length; w++) {
        const word = sortedWords[w].answer;
        const clue = sortedWords[w].clue;
        let placed = false;

        // Scan the grid to find a matching letter intersection
        for (let r = 0; r < GRID_SIZE && !placed; r++) {
            for (let c = 0; c < GRID_SIZE && !placed; c++) {
                if (grid[r][c] !== ' ' && word.includes(grid[r][c])) {
                    const letterIndex = word.indexOf(grid[r][c]);

                    // Try placing Down
                    const targetRowStart = r - letterIndex;
                    if (targetRowStart >= 0 && targetRowStart + word.length <= GRID_SIZE) {
                        let canPlace = true;

                        // Validation: Check if it collides safely with surrounding blocks
                        for (let i = 0; i < word.length; i++) {
                            const currentGridCell = grid[targetRowStart + i][c];
                            if (currentGridCell !== ' ' && currentGridCell !== word[i]) {
                                canPlace = false;
                                break;
                            }
                        }

                        if (canPlace) {
                            // Draw it down on the grid
                            for (let i = 0; i < word.length; i++) {
                                grid[targetRowStart + i][c] = word[i];
                            }
                            placedWords.down[clueCounter] = {
                                clue: clue,
                                answer: word,
                                row: targetRowStart,
                                col: c
                            };
                            clueCounter++;
                            placed = true;
                        }
                    }
                }
            }
        }
    }

    return {
        date: new Date().toISOString().split('T')[0],
        across: placedWords.across,
        down: placedWords.down
    };
}

// 3. Execution and Writing to File
function main() {
    console.log("Generating today's crossword grid...");
    const puzzleData = generateCrosswordLayout(ECONOMICS_WORD_BANK);

    // Path coordinates point precisely to your assets folder
    const outputPath = path.join(__dirname, '../assets/data/today-crossword.json');

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(puzzleData, null, 2), 'utf-8');
    console.log(`Success! Crossword data successfully written to: ${outputPath}`);
}

main();