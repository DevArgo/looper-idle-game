let locCount = 0;
let juniorDevCount = 0;
let juniorDevCost = 10;

const locDisplay = document.getElementById('loc-display');
const writeCodeBtn = document.getElementById('write-code-btn');

const juniorDevCountDisplay = document.getElementById('junior-dev-count');
const juniorDevCostDisplay = document.getElementById('junior-dev-cost');
const buyJuniorDevBtn = document.getElementById('buy-junior-dev-btn');

function updateDisplay() {
    locDisplay.textContent = Math.floor(locCount);
    juniorDevCountDisplay.textContent = juniorDevCount;
    juniorDevCostDisplay.textContent = juniorDevCost;
}

writeCodeBtn.addEventListener('click', () => {
    locCount++;
    updateDisplay();
});

buyJuniorDevBtn.addEventListener('click', () => {
    if (locCount >= juniorDevCost) {
        locCount -= juniorDevCost;
        juniorDevCount++;
        // Increase cost exponentially (e.g., 1.15 multiplier)
        juniorDevCost = Math.ceil(juniorDevCost * 1.15);
        updateDisplay();
    }
});

// Auto-generation logic
setInterval(() => {
    if (juniorDevCount > 0) {
        locCount += juniorDevCount;
        updateDisplay();
    }
}, 1000);

updateDisplay();
