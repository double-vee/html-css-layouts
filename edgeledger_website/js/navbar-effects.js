const navbar = document.getElementById('navbar');
let scrolled = false;

const handleScroll = () => {
  if(scrollY >= 100) {
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