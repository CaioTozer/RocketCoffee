const navbar = document.getElementById('navbar')
const menu = document.getElementById('menu')

function openMenuMobile() {
    const isOpen = menu.classList.contains('open');

    const classToAddInMenu = isOpen ? 'close' : 'open';
    const classToRemoveInMenu = isOpen ? 'open' : 'close';

    navbar.classList.toggle('open');
    menu.classList.add(classToAddInMenu);
    menu.classList.remove(classToRemoveInMenu);
}