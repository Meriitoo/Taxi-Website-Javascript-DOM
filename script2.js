document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.wrapper nav li');
    var sections = document.querySelectorAll('.wrapper section');

    function showSection(index) {
        navItems.forEach(function (navItem) {
            navItem.classList.remove('active');
        });

        navItems[index].classList.add('active');

        sections.forEach(function (section) {
            section.style.display = 'none';
        });

        sections[index].style.display = 'block';
    }

    navItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            showSection(index);
        });
    });

    showSection(0); /* means it initially displays the first section and marks the first navigation item as 'active'.*/

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
});
