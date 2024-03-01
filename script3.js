var fullImgBox = document.getElementById("fullImgBox");

var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = 'flex'
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

let menu = document.querySelector("#navbar");
let nav = document.querySelector(".menu");
let showContactForm = document.querySelector(".contact");
let myForm = document.querySelector(".contact-form");
let formClose = document.querySelector("#form-close");
let backgroundText = document.querySelector(".background-text");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

showContactForm.onclick = () => {
  myForm.classList.add('active');
};

formClose.onclick = () => {
  myForm.classList.remove('active');
};

