const countdownDisplay = document.getElementById('countdownDisplay');
const timeInput = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');
const audio = new Audio('assets/sound.mp3');

let countdownInterval;

startButton.addEventListener('click', () => {
    const selectedTime = new Date(timeInput.value).getTime();
    const currentTime = new Date().getTime();

    if (selectedTime <= currentTime) {
        alert('Please select a future time.');
        return;
    }

    const countdownTime = selectedTime - currentTime;

    clearInterval(countdownInterval);
    startCountdown(countdownTime);
});

function startCountdown(duration) {
    let remainingTime = duration;

    countdownInterval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            audio.play();
            countdownDisplay.textContent = 'Time is up!';
            return;
        }

        remainingTime -= 1000;
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownDisplay.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}