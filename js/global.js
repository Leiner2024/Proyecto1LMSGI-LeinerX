const checkbox = document.querySelector('.menu-btn input')
const menu = document.getElementById('menu-overlay')
const body = document.body

checkbox.addEventListener('change', function() {
    if (this.checked) {
        menu.classList.add('activo')
        body.style.overflow = 'hidden'
    } else {
        menu.classList.remove('activo')
        body.style.overflow = 'auto'
    }
})