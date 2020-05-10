function toggleMenu() {
    let menu = document.getElementById("menu-content");
    let openMenuIcon = document.getElementById("open-menu");
    if (menu.classList.contains('hidden')) {
        menu.style.display = 'block';
        openMenuIcon.style.display = 'none';
        menu.classList.remove('hidden');
    } else {
        menu.style.display = 'none';
        openMenuIcon.style.display = 'block';
        menu.classList.add('hidden');
    }
}