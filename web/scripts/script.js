document.addEventListener('DOMContentLoaded', () => {
  const goTopBtn = document.getElementById("naarBovenKnop");
  const hamburger = document.getElementById('hamburger');
  const closeButton = document.getElementById('close');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  };

  document.querySelectorAll("footer li").forEach((li) => {
    li.addEventListener("click", () => {
      const content = li.nextElementSibling;
  
      const isOpen = li.classList.contains("open");
  
      document.querySelectorAll("footer li").forEach((item) => item.classList.remove("open"));
      document.querySelectorAll("footer ul > div").forEach((div) => div.classList.remove("open"));
  
      if (!isOpen && content && content.tagName === "DIV") {
        li.classList.add("open");
        content.classList.add("open");
      }
    });
  });
  
  
  
  

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    body.classList.add('no-scroll');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    body.classList.remove('no-scroll');
  });

  goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
