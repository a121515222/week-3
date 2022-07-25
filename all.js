const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const headerlink = document.querySelectorAll('.nav li a')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburgerActive');
  nav.classList.toggle('navActive');

})