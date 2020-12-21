const inp = document.querySelector('input');
const but = document.querySelector('button');
const div = document.querySelector('div');

but.addEventListener('click',() =>{
  const oldString = inp.value.split(" ");
  const newString = [];
  oldString.forEach(str => {
    newString.push(str.substring(0,1).toUpperCase() + str.substring(1));
  })
  div.textContent = newString.join(" ");
})
