
let toggle = document.querySelector(".toggle");

let navIcons = document.querySelector(".nav-icons");

toggle.onclick = function () {
  navIcons.classList.toggle("active");
};

let toggles = document.querySelector(".toggles");

let headerList = document.querySelector(".header-list");

toggles.onclick = function () {
  headerList.classList.toggle("active");
};