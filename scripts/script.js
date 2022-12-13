// const navSlide = () => {
//  const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.mobile-nav');
//   const navlinks = document.querySelectorAll('.nav-links li');

//   burger.addEventListener('click', () => {
//     //toggle nav\

//     nav.classList.toggle('nav-active');

//     //animete links
//     navlinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = '';
//       } else {
//         link.style.animation = `navlinkfade 0.5s ease forwards ${(navlinks.length+index-1-(index*2))/7 + 0.25}s`;
//       }
//     });
//     //burger animation
//     burger.classList.toggle('toggle');

//   });

// }

// $("pre").html(function (index, html) {
//   return html.replace(/^(.*)$/mg, "<span class=\"line\">$1</span>")
// });//

let burger = document.querySelector("#burger");
let nav = document.querySelector("#mobile-nav");



burger.addEventListener('click', () => {
  console.log(nav.classList)
  nav.classList.toggle('open-menu')
})


let modeSwitch = document.getElementById("mode");

modeSwitch.addEventListener('click', function () {
    modeSwitch.checked ? 
    document.documentElement.setAttribute("data-theme", "dark") : 
    document.documentElement.setAttribute("data-theme", "");


});