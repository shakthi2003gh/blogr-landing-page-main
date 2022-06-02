const slideMenuButton = document.querySelector(".hamburger-menu");
const popUpMenuButton = document.querySelectorAll("nav li span");

slideMenuButton.addEventListener("click", (e) => {
  if (!e.target.closest("header").classList.contains("open-menu")) {
    e.target.src = "/images/icon-close.svg";
    e.target.style.height = "30px";
  } else {
    e.target.src = "/images/icon-hamburger.svg";
    e.target.style.height = "20px";
  }

  e.target.closest("header").classList.toggle("open-menu");
});

popUpMenuButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.closest("li").classList.toggle("open");
  });
});
