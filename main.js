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

function relationSort(arraySorted, arrayToRelateSort) {
  if (typeof arraySorted[0] === "number") {

  for (let i = 0; i <= arrayToRelateSort.length - 1; i++) {
    if (!(arraySorted[i] === relationPairs[arrayToRelateSort[i]])) {
      for (let name in relationPairs) {
        if (arraySorted[i] === relationPairs[name]) {
          arrayToRelateSort[i] = name;
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


function replaceElements() {
  let counter = 0;
  // Sort and replace Ages
  if (event.target.classList.contains("ageSpan")) {

    let ageSorted = sortAges(ageValuesDefault);
    let nameRelationSorted = relationSort(ageSorted, nameValuesDefault);
    // replace ages
    agesOriginal.forEach(ageItem => {
      ageItem.textContent = ageSorted[counter];
      counter++;
    });

    counter = 0;
    // replace names with based on relationPairs
    namesOriginal.forEach(nameItem => {
      nameItem.textContent = nameRelationSorted[counter];
      counter++;
    });

  } else if (event.target.classList.contains("nameSpan")) {

  //Sort and replace Names
    let nameSorted = sortNames(nameValuesDefault);
    let ageRelationSorted = relationSort(nameSorted, ageValuesDefault);

    namesOriginal.forEach(nameItem => {
      nameItem.textContent = nameSorted[counter];
      counter++;
    });

    counter = 0;

    agesOriginal.forEach(ageItem => {
      ageItem.textContent = ageRelationSorted[counter];
      counter++;
    });
  }
      console.log("replaced");
}


// reset on alternate clicks

function reset() {
  let counter = 0;
  for(let property in relationPairs) {
    agesOriginal[counter].textContent = relationPairs[property];
    namesOriginal[counter].textContent = property;
    counter++;
  }
      console.log("reseted");
}


// event to execute functions
const resetButton = document.getElementById('reset');
table.addEventListener('click', replaceElements);
resetButton.addEventListener('click', reset);
