const table = document.querySelector('table');
const body = document.querySelector('body');

// Create nodelists with all age and name nodes of the table
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

// create and populate an age and name array with tha textContent of the node elements
let nameValuesDefault = [];
let ageValuesDefault = [];

let counter = 0;
namesOriginal.forEach(nameItem => {
  nameValuesDefault[counter] = nameItem.textContent;
  counter++;
});

counter = 0;
agesOriginal.forEach(ageItem => {
  ageValuesDefault[counter] = ageItem.textContent;
  counter++;
});
console.log(`name values list: ${nameValuesDefault}`);
console.log(`age values list: ${ageValuesDefault}`);

// create an object with related pairs of the names and ages
let relationPairs = {};

for (let i = 0; i <= ageValuesDefault.length - 1; i++) {
  relationPairs[nameValuesDefault[i]] = ageValuesDefault[i];
}

// log
  const p = document.createElement('p');
p.textContent = `${ageValuesDefault} : ${nameValuesDefault}`;
  body.appendChild(p);

console.log(`object structure with related name and age pairs:`, relationPairs);
