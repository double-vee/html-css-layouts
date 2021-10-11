const texts = ['designer', 'developer', 'photographer'];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letters = '';

(function type() {
  if(count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letters = currentText.slice(0, ++index);
  document.querySelector('.txt-type').textContent = letters;

  if(letters.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 300);
  }
})();