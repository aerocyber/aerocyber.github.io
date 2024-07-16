function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    const icn = document.getElementById('icon-toggler');
    menu.classList.toggle("open");
    icn.classList.toggle("bx-menu");
    icn.classList.toggle("bx-x");
    icon.classList.toggle("open");
}