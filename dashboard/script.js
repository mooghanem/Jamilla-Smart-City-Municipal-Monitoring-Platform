// Live Clock Update in Navbar
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if (clockElement) {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();

// Interactive Diagnostics Button
const statusBtn = document.getElementById('status-btn');
const statusOutput = document.getElementById('status-output');

if (statusBtn) {
    statusBtn.addEventListener('click', () => {
        statusBtn.textContent = 'Checking Systems...';
        statusBtn.disabled = true;
        
        setTimeout(() => {
            statusOutput.textContent = '✔ All Jamilla smart sectors (Transport, Energy, IoT) operating at 100% optimal efficiency!';
            statusBtn.textContent = 'Run Diagnostics';
            statusBtn.disabled = false;
        }, 800);
    });
}