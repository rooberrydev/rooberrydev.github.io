let playButton = document.querySelector(".play-button");
let splashScreen = document.querySelector(".start-splash-screen");
playButton.addEventListener("click", e => {
  document.querySelector("#about").scrollIntoView();
  document.querySelector("html").style.overflow = "scroll";
});
