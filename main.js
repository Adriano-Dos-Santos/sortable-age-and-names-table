const table = document.querySelector('table');
const body = document.querySelector('body');

// Create nodelists with all age and name nodes of the table
 let agesOriginal = document.querySelectorAll('.age');

 let namesOriginal = document.querySelectorAll('.name');

// create and populate an age and name array with tha textContent of the node elements
let nameValuesDefault = [];
let ageValuesDefault = [];

let index = 0;
namesOriginal.forEach(nameItem => {
  nameValuesDefault[index] = String(nameItem.textContent.toLowerCase());
  index++;
});

index = 0;
agesOriginal.forEach(ageItem => {
  ageValuesDefault[index] = Number(ageItem.textContent);
  index++;
});

// create an object with related pairs of the names and ages
let relationPairs = {};

for (let i = 0; i <= ageValuesDefault.length - 1; i++) {
  relationPairs[nameValuesDefault[i]] = ageValuesDefault[i];
}

// create functions to sort the age and name arrays

function sortNames(namesArray) {
  let sortedArray = namesArray.sort();
  return sortedArray;
}

function compareNumbers(a,b) {
  return a - b;
}

function sortAges(agesArray) {
  let sortedArray = agesArray.sort(compareNumbers);
  return sortedArray;
}

// sort the oposite array to be related with the sorted one

function relationSortOnNamesArray(arraySorted, arrayToRelateSort) {
 // check only in case of age sorted first
  if (typeof arraySorted[0] === "number") {

  for (let i = 0; i <= arrayToRelateSort.length - 1; i++) {
    if (!(arraySorted[i] === relationPairs[arrayToRelateSort[i]])) {
      for (let name in relationPairs) {
        if (arraySorted[i] === relationPairs[name]) {
          arrayToRelateSort[i] = name;
          console.log(name);
        }
      }
    }
  }
  } else if (typeof arraySorted[0] === "string") {

  for (let i = 0; i <= arrayToRelateSort.length - 1; i++) {
    if (!(relationPairs[arraySorted[i]] === arrayToRelateSort[i])) {
      arrayToRelateSort[i] = relationPairs[arraySorted[i]];
      }
    }
  }
  return arrayToRelateSort;

  }

// replace the DOM with the sorted Array and the related one sorted as well



// log
  const p = document.createElement('p');
p.textContent = `${ageValuesDefault} : ${nameValuesDefault}`;
  body.appendChild(p);

console.table(`object structure with related name and age pairs:`, relationPairs);

console.log(`name values list original: ${nameValuesDefault}`);
// console.log(`age values list original: ${ageValuesDefault}`);

// console.log(`name values list sorted: ${sortNames(nameValuesDefault)}`);
console.log(`age values list sorted: ${sortAges(ageValuesDefault)}`);

let sortedAge = sortAges(ageValuesDefault);
console.log(`related pair array sorted: ${relationSortOnNamesArray(nameValuesDefault, sortedAge)}`);
