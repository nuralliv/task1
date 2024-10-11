let sidebar = document.querySelector('.nav-bar-side');
let menuside = document.querySelector('.menu-side');
let menuClose = document.querySelector('.menu-side-close');



menuside.onclick = () => {
   sidebar.classList.toggle('active')

}
menuClose.onclick = () => {
   sidebar.classList.toggle('active')
}