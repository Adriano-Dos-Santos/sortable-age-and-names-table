const table = document.querySelector('table');
const body = document.querySelector('body');
let relationObject = {};

  let agesOriginal = document.querySelectorAll('.age');
  agesOriginal.forEach( (ageItem) => {
    return Number(ageItem);
  });





  let namesOriginal = document.querySelectorAll('.name');
  namesOriginal.forEach((nameItem) => {
    let newName = String(nameItem);
    newName.toLowerCase()
    return newName;
  });





namesOriginal.forEach(item => {
const p = document.createElement('p');
p.textContent = item.textContent;
body.appendChild(p);
});




  // relationObject.namesOriginal[i].textContent = agesOriginal[i].textContent;
