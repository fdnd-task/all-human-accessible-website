const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  const navlinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {
    //toggle nav\

    nav.classList.toggle('nav-active');

    //animete links
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${(navlinks.length+index-1-(index*2))/7 + 0.25}s`;
      }
    });
    //burger animation
    burger.classList.toggle('toggle');

  });



}

navSlide();
