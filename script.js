// Select DOM Elements
const countdownScreen = document.getElementById("countdown-screen");
const birthdayScreen = document.getElementById("birthday-screen");
const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const tickingSound = document.getElementById("ticking-sound");
const voiceRecording = document.getElementById("voice-recording");
const birthdayBgm = document.getElementById("birthday-bgm");

// Target Date (5th December at Midnight)
const targetDate = new Date(new Date().getFullYear(), 11, 5, 6, 45, 0).getTime(); // Month is 0-indexed (11 = December)

// Countdown Function
function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = targetDate - currentTime;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        showBirthdayScreen();
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysElem.textContent = String(days).padStart(2, "0");
    hoursElem.textContent = String(hours).padStart(2, "0");
    minutesElem.textContent = String(minutes).padStart(2, "0");
    secondsElem.textContent = String(seconds).padStart(2, "0");

    // Play Ticking Sound
    tickingSound.currentTime = 0; // Reset sound to start
    tickingSound.play();
}

// Show Birthday Screen
function showBirthdayScreen() {
    countdownScreen.style.display = "none";
    birthdayScreen.style.display = "flex";

    // Play Voice Recording and BGM
    voiceRecording.play();
    voiceRecording.onended = () => {
        birthdayBgm.play();
    };
}

// Start Countdown
const countdownInterval = setInterval(updateCountdown, 1000);
