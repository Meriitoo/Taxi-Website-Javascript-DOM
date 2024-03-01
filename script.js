let menu = document.querySelector("#navbar");
let nav = document.querySelector(".menu");
let showContactForm = document.querySelector(".contact");
let myForm = document.querySelector(".contact-form");
let formClose = document.querySelector("#form-close");
let backgroundText = document.querySelector(".background-text");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
    // to add or remove a specified class from an element. It works by toggling the presence
    //  of a class: if the class is present, it will be removed; if it's not present, it will be added.
};

showContactForm.onclick = () => {
    myForm.classList.add('active');
    backgroundText.style.visibility = 'hidden';
};

formClose.onclick = () => {
    myForm.classList.remove('active');
    backgroundText.style.visibility = 'visible';
};

