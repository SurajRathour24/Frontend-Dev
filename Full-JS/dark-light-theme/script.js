let body = document.querySelector("body");
let btn = document.querySelector("#themeToggle");
//   let currentTheme = window.matchMedia("prefers-color-scheme:dark").matches;

let themeChange = function () {
  let current = localStorage.getItem("theme");
  if (current == "dark") {
    body.classList.add("light");
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
};

if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
} else {
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  localStorage.setItem("theme", prefersDark ? "dark" : "light");
  body.classList.add(prefersDark ? "dark" : "light");
}

btn.addEventListener("click", themeChange);
