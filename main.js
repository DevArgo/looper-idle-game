// Game State
let gameState = {
    locCount: 0,
    totalClicks: 0,
    juniorDevCount: 0,
    juniorDevCost: 10,
    lastUpdate: Date.now()
};

// DOM Elements
const locDisplay = document.getElementById('loc-display');
const lpsDisplay = document.getElementById('lps-display');
const writeCodeBtn = document.getElementById('write-code-btn');
const actionArea = document.querySelector('.action-area');

const juniorDevCountDisplay = document.getElementById('junior-dev-count');
const juniorDevCostDisplay = document.getElementById('junior-dev-cost');
const buyJuniorDevBtn = document.getElementById('buy-junior-dev-btn');

const tooltip = document.getElementById('tooltip');
const toastContainer = document.getElementById('toast-container');

// Constants
const JUNIOR_DEV_LPS = 1;
const COST_MULTIPLIER = 1.15;

// Initialization
function init() {
    loadGame();
    setupEventListeners();
    setupTooltips();
    
    // Start game loops
    setInterval(gameLoop, 100); // UI and logic update
    setInterval(saveGame, 5000); // Auto-save every 5 seconds
    
    updateDisplay();
    showToast("SYSTEM REBOOT SUCCESSFUL");
}

function setupEventListeners() {
    writeCodeBtn.addEventListener('click', handleManualClick);
    
    buyJuniorDevBtn.addEventListener('click', () => {
        if (gameState.locCount >= gameState.juniorDevCost) {
            gameState.locCount -= gameState.juniorDevCost;
            gameState.juniorDevCount++;
            gameState.juniorDevCost = Math.ceil(gameState.juniorDevCost * COST_MULTIPLIER);
            updateDisplay();
            showToast("JUNIOR DEVELOPER HIRED");
        }
    });

    // Hotkeys
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault(); // Prevent scrolling with space
            handleManualClick(e);
            // Visual feedback for button
            writeCodeBtn.classList.add('active');
            setTimeout(() => writeCodeBtn.classList.remove('active'), 100);
        }
    });
}

function handleManualClick(e) {
    gameState.locCount++;
    gameState.totalClicks++;
    createFloatingText("+1 LoC", e);
    updateDisplay();
}

function gameLoop() {
    const now = Date.now();
    const deltaTime = (now - gameState.lastUpdate) / 1000;
    gameState.lastUpdate = now;

    // Passive income
    if (gameState.juniorDevCount > 0) {
        gameState.locCount += (gameState.juniorDevCount * JUNIOR_DEV_LPS) * deltaTime;
        updateDisplay();
    }
}

function updateDisplay() {
    locDisplay.textContent = Math.floor(gameState.locCount);
    lpsDisplay.textContent = (gameState.juniorDevCount * JUNIOR_DEV_LPS).toFixed(1);
    
    juniorDevCountDisplay.textContent = gameState.juniorDevCount;
    juniorDevCostDisplay.textContent = gameState.juniorDevCost;
    
    buyJuniorDevBtn.disabled = gameState.locCount < gameState.juniorDevCost;
}

// Floating Text Animation
function createFloatingText(text, event) {
    const floatText = document.createElement('div');
    floatText.className = 'floating-text';
    floatText.textContent = text;

    // Position near the click/event
    let x, y;
    if (event && event.clientX) {
        x = event.clientX;
        y = event.clientY;
    } else {
        // Fallback for hotkeys (center of button)
        const rect = writeCodeBtn.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
    }

    floatText.style.left = `${x}px`;
    floatText.style.top = `${y}px`;

    document.body.appendChild(floatText);

    // Remove after animation
    setTimeout(() => {
        floatText.remove();
    }, 800);
}

// Toast Notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = `> ${message}`;
    toast.style.color = '#00f2ff'; // Ensure neon color
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Tooltips
function setupTooltips() {
    const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');
    
    elementsWithTooltips.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            tooltip.textContent = el.getAttribute('data-tooltip');
            tooltip.classList.remove('hidden');
        });

        el.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.clientX + 10}px`;
            tooltip.style.top = `${e.clientY + 10}px`;
        });

        el.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
    });
}

// Storage
function saveGame() {
    localStorage.setItem('it-idle-game-save', JSON.stringify(gameState));
    console.log("Game Saved");
}

function loadGame() {
    const savedData = localStorage.getItem('it-idle-game-save');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            gameState = { ...gameState, ...parsed };
            gameState.lastUpdate = Date.now(); // Don't use old timestamp
            console.log("Game Loaded");
        } catch (e) {
            console.error("Failed to load save", e);
        }
    }
}

// CSS for hotkey visual feedback
const style = document.createElement('style');
style.textContent = `
    .neumorphic-btn.active {
        box-shadow: inset 4px 4px 8px var(--shadow-dark), 
                    inset -4px -4px 8px var(--shadow-light);
        transform: scale(0.98);
    }
`;
document.head.appendChild(style);

init();
