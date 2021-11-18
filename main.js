const btnMobileMenu = document.getElementById('btn-menu-mobile')

function toggleMobileMenu(){
  const expandingMobileMenu = document.getElementById('expading-mobile-menu')

  expandingMobileMenu.classList.toggle('active')

}


btnMobileMenu.addEventListener('click', toggleMobileMenu)