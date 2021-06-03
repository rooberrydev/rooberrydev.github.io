document.querySelector("body").scrollIntoView({
  behavior: "auto",
});

let playButton = document.querySelector(".play-button");

playButton.addEventListener("click", (e) => {
  document.querySelector("#projects").scrollIntoView();
  document.querySelector("html").style.overflowY = "scroll";
});

document.onload = () => {
  if (window.pageYOffset > 0)
    document.querySelector("html").style.overflowY = "scroll";
};
