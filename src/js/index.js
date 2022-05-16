//Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  navList.style.animation = "5s ease-in";
  navList.classList.toggle("show");
});

//Copyright year
const myYear = document.getElementById("currentYear");
const mydate = new Date();
myYear.textContent = mydate.getFullYear();

//Back to top
const mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// GSAP
const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline.from('header', { y: '-100%', ease: 'bounce' })
        .from('li', { opacity: 0, stagger: .8 }, 1)
        .from('main', { x: '-100vw' }, 1)
        .from('article', { x: '100vw', ease: 'elastic'})
        .from('.skill-box', { opacity: 0, stagger: 1 })
        .from('.project', { opacity: 0, stagger: 1 })
