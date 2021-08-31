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