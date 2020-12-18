const divs = document.querySelectorAll('div');
divs.forEach(div => {
  div.addEventListener('click',() => {
    document.body.style.background = `${div.className}`;
  })
  
})