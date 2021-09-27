const links = document.querySelectorAll('.btn');
 
for (let link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();

  let href = e.target.getAttribute("href");
  if(!href) {
    href = e.target.parentElement.getAttribute("href");
  }
  let offsetTop = document.querySelector(href).offsetTop;
  
  scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}