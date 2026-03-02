let locCount = 0;

const locDisplay = document.getElementById('loc-display');
const writeCodeBtn = document.getElementById('write-code-btn');

writeCodeBtn.addEventListener('click', () => {
    locCount++;
    locDisplay.textContent = locCount;
});
