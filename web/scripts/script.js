const goTopBtn = document.getElementById("naarBovenKnop");
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.body;

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

hamburger.addEventListener('click', () => {
  const menuIsHidden = mobileMenu.classList.toggle('hidden');

  body.classList.toggle('no-scroll', !menuIsHidden);
});

