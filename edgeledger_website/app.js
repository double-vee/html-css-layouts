const navbar = document.getElementById('navbar');
let scrolled = false;

const handleScroll = () => {
  if(pageYOffset >= 100) {
    navbar.classList.remove('top');
    if(!scrolled) {
      navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
    }
    setTimeout(function() {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
}

window.addEventListener('scroll', handleScroll);

const links = document.querySelectorAll('.navbar a');
 
for (let link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scrollTo({
    top: offsetTop - navbar.offsetHeight,
    behavior: "smooth"
  });
}