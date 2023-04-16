const iconButton = document.querySelector('.iconButton');
const icons = document.querySelector('.divOfIcons');
iconButton.addEventListener('click', displayIcon)
function displayIcon() {
    icons.classList.toggle('divOfIconsActive')
}