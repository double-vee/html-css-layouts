const navbar = document.getElementById('navbar');

const handleScroll = () =>
  pageYOffset >= 100
  ? navbar.classList.remove('top')
  : navbar.classList.add('top');

window.addEventListener('scroll', handleScroll);