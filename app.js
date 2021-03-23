// Shortcut function to select DOM elements
const $ = (element) => document.querySelector(element);

// Play sound for specific pressed keys
function playSound(e) {
  const audio = $(`audio[data-key="${e.keyCode}"]`);
  const key = $(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

// Remove 'playing' class
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

// Get a list of all keys
const keys = document.querySelectorAll(".key");

// Remove 'playing' class from keys
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// To play the sounds when pressing the keys
window.addEventListener("keydown", playSound);
