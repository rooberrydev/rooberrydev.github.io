let playButton = document.querySelector(".play-button");
let splashScreen = document.querySelector(".start-splash-screen");
playButton.addEventListener("click", e => {
  splashScreen.classList.add("hidden");
});
