// function menu() {
//     const menu = document.getElementById('menu')
//     if (menu.style.display == 'block') {
//         menu.style.display = 'none'
//     } else {
//         menu.style.display = 'block'
//     }
// }

const menu = document.getElementById('menu')
const icon = document.getElementsByClassName('icon')

icon[0].addEventListener('click', () => {
    if (menu.style.display == "block"){
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})