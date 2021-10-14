const hamburgerMenu = document.querySelector('#navigation .nav__icon');
const navContent = document.querySelector('#nav__content');
const closeNavButton = document.querySelector('#nav__content .close__btn');
const navLinks = document.querySelectorAll('#nav__content nav ul li a');

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
    navContent.classList.add('show');
    document.body.style.overflow="hidden";
  });
  closeNavButton.addEventListener('click', ()=>{
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  });
  navLinks.forEach( link => {
    link.addEventListener('click', ()=> {
      navContent.classList.remove('show');
      document.body.style.overflow="initial";
    })
  })

  // AOS
  AOS.init();